import { NextResponse } from "next/server";

const DOWNLOADS_BASE_URL = "https://downloads.manacamp.com";
const MANIFEST_URL = `${DOWNLOADS_BASE_URL}/latest.yml`;

function extractScalarValue(manifest: string, key: string) {
  const expression = new RegExp(`^${key}:\\s*(.+)$`, "m");
  const value = manifest.match(expression)?.[1];

  if (!value) {
    return null;
  }

  return value.trim().replace(/^['"]|['"]$/g, "");
}

function extractInstallerPath(manifest: string) {
  const topLevelPath = extractScalarValue(manifest, "path");
  const fileUrlPath = manifest.match(/^\s*-\s*url:\s*(.+)$/m)?.[1];
  const rawPath = topLevelPath ?? fileUrlPath?.trim().replace(/^['"]|['"]$/g, "");

  if (!rawPath) {
    return null;
  }

  const normalizedPath = rawPath.replace(/^\.\//, "");
  return new URL(normalizedPath, `${DOWNLOADS_BASE_URL}/`).toString();
}

export const dynamic = "force-dynamic";

export async function GET() {
  const manifestResponse = await fetch(MANIFEST_URL, {
    cache: "no-store",
    headers: {
      accept: "text/yaml, text/plain;q=0.9, */*;q=0.8",
    },
  });

  if (!manifestResponse.ok) {
    return NextResponse.json(
      {
        error: "Desktop update manifest unavailable.",
        manifestPath: MANIFEST_URL,
      },
      {
        status: 502,
        headers: {
          "Cache-Control": "no-store",
        },
      },
    );
  }

  const manifest = await manifestResponse.text();
  const downloadPath = extractInstallerPath(manifest);

  if (!downloadPath) {
    return NextResponse.json(
      {
        error: "Desktop update manifest did not include an installer path.",
        manifestPath: MANIFEST_URL,
      },
      {
        status: 502,
        headers: {
          "Cache-Control": "no-store",
        },
      },
    );
  }

  return NextResponse.json(
    {
      downloadPath,
      manifestPath: MANIFEST_URL,
      version: extractScalarValue(manifest, "version"),
      releaseDate: extractScalarValue(manifest, "releaseDate"),
    },
    {
      headers: {
        "Cache-Control": "no-store",
      },
    },
  );
}
