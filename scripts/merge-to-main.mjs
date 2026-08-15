#!/usr/bin/env node

import { execFileSync } from 'node:child_process';
import process from 'node:process';
import readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

main().catch((error) => {
  const message = error instanceof Error ? error.message : 'Merge failed for an unknown reason.';
  fail(message);
});

async function main() {
  const args = process.argv.slice(2);
  const options = {
    dryRun: false,
    prompt: false,
    push: true,
  };

  let sourceBranch;

  for (const arg of args) {
    if (arg === '--dry-run') {
      options.dryRun = true;
      continue;
    }

    if (arg === '--prompt') {
      options.prompt = true;
      continue;
    }

    if (arg === '--push') {
      options.push = true;
      continue;
    }

    if (arg === '--no-push') {
      options.push = false;
      continue;
    }

    if (arg === '--help' || arg === '-h') {
      printHelp();
      process.exit(0);
    }

    if (arg.startsWith('--')) {
      fail(`Unknown option: ${arg}`);
    }

    if (sourceBranch) {
      fail('Only one source branch can be provided.');
    }

    sourceBranch = arg;
  }

  ensureInsideGitRepo();

  const originalBranch = git(['branch', '--show-current']);
  const branchToMerge = sourceBranch ?? originalBranch;

  if (!branchToMerge) {
    fail('Could not determine a source branch. Run this from a branch or pass one explicitly.');
  }

  if (branchToMerge === 'main') {
    fail('Refusing to merge main into main. Pick a non-main source branch.');
  }

  let checkedOutMain = false;

  try {
    ensureCleanWorkingTree();

    logStep('Fetching latest refs from origin');
    git(['fetch', '--prune', 'origin', 'main', branchToMerge], { stdio: 'inherit' });

    ensureBranchExists(branchToMerge);
    ensureRemoteBranchExists(branchToMerge);
    ensureLocalMatchesRemote(branchToMerge);
    ensureMainIsCurrent();
    ensureMainIsMergedIntoSource(branchToMerge);

    if (options.dryRun) {
      console.log('Dry run passed. All safety checks succeeded; no merge was performed.');
      return;
    }

    if (options.prompt) {
      await awaitConfirmation(branchToMerge, options.push);
    }

    logStep('Checking out main');
    git(['checkout', 'main'], { stdio: 'inherit' });
    checkedOutMain = true;

    logStep('Fast-forwarding local main to origin/main');
    git(['merge', '--ff-only', 'origin/main'], { stdio: 'inherit' });

    logStep(`Fast-forwarding main to ${branchToMerge}`);
    git(['merge', '--ff-only', branchToMerge], { stdio: 'inherit' });

    if (options.push) {
      logStep('Pushing main to origin');
      git(['push', 'origin', 'main'], { stdio: 'inherit' });
    }

    console.log(`Merged ${branchToMerge} into main successfully.${options.push ? ' origin/main was updated.' : ''}`);
  } catch (error) {
    if (checkedOutMain && originalBranch && originalBranch !== 'main') {
      try {
        git(['checkout', originalBranch], { stdio: 'inherit' });
      } catch {
        console.error(`Failed to restore original branch ${originalBranch}.`);
      }
    }

    throw error;
  }
}

function printHelp() {
  console.log(`Usage: pnpm merge:main [source-branch] [--dry-run] [--no-push] [--prompt]

Safely fast-forwards main to a source branch after verifying:
- the working tree is clean
- origin/main and origin/<source-branch> are fetched
- the local source branch matches origin/<source-branch>
- the source branch already contains the latest origin/main

Examples:
  pnpm merge:main agent/help-center --dry-run
  pnpm merge:main agent/help-center
  pnpm merge:main agent/help-center --prompt
  pnpm merge:main agent/help-center --no-push
  pnpm merge:main --dry-run
`);
}

function ensureInsideGitRepo() {
  git(['rev-parse', '--is-inside-work-tree']);
}

function ensureCleanWorkingTree() {
  const status = git(['status', '--porcelain']);

  if (status) {
    throw new Error('Working tree is not clean. Commit or stash changes before merging.');
  }
}

function ensureBranchExists(branchName) {
  try {
    git(['show-ref', '--verify', `refs/heads/${branchName}`]);
  } catch {
    throw new Error(`Local branch ${branchName} does not exist.`);
  }
}

function ensureRemoteBranchExists(branchName) {
  try {
    git(['show-ref', '--verify', `refs/remotes/origin/${branchName}`]);
  } catch {
    throw new Error(`Remote branch origin/${branchName} does not exist.`);
  }
}

function ensureLocalMatchesRemote(branchName) {
  const localHead = git(['rev-parse', branchName]);
  const remoteHead = git(['rev-parse', `origin/${branchName}`]);

  if (localHead !== remoteHead) {
    throw new Error(`Local branch ${branchName} is not in sync with origin/${branchName}. Push or pull it first.`);
  }
}

function ensureMainIsCurrent() {
  try {
    git(['show-ref', '--verify', 'refs/heads/main']);
    git(['merge-base', '--is-ancestor', 'main', 'origin/main']);
  } catch {
    throw new Error('Local main is behind origin/main. Update main before running this script.');
  }
}

function ensureMainIsMergedIntoSource(branchName) {
  try {
    git(['merge-base', '--is-ancestor', 'origin/main', branchName]);
  } catch {
    throw new Error(`${branchName} does not contain the latest origin/main. Rebase or merge main into it first.`);
  }
}

function awaitConfirmation(branchName, shouldPush) {
  const rl = readline.createInterface({ input, output });

  return rl
    .question(`Merge ${branchName} into main${shouldPush ? ' and push to origin' : ''}? [y/N] `)
    .then((answer) => {
      rl.close();

      if (!/^y(es)?$/i.test(answer.trim())) {
        throw new Error('Merge cancelled.');
      }
    })
    .catch((error) => {
      rl.close();
      throw error;
    });
}

function git(args, config = {}) {
  const result = execFileSync('git', args, {
    encoding: 'utf8',
    stdio: ['ignore', 'pipe', 'pipe'],
    ...config,
  });

  if (result == null) {
    return '';
  }

  return String(result).trim();
}

function logStep(message) {
  console.log(`\n==> ${message}`);
}

function fail(message, shouldExit = true) {
  console.error(`Error: ${message}`);

  if (shouldExit) {
    process.exit(1);
  }

  throw new Error(message);
}