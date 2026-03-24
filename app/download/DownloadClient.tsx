"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  AlertCircle,
  ArrowDownToLine,
  CheckCircle2,
  ExternalLink,
  LoaderCircle,
  RefreshCw,
  Server,
  ShieldCheck,
} from "lucide-react";
import BrandMark from "@/components/BrandMark";

type DownloadPayload = {
  downloadPath: string;
  manifestPath: string;
  version: string | null;
  releaseDate: string | null;
};

type ErrorPayload = {
  error: string;
  manifestPath?: string;
};

const DOWNLOADS_MANIFEST_URL = "https://downloads.manacamp.com/latest.yml";

const steps = [
  "Checking the public desktop update feed",
  "Resolving the latest Windows installer",
  "Starting the download",
];

function formatReleaseDate(value: string | null) {
  if (!value) {
    return null;
  }

  const parsed = new Date(value);

  if (Number.isNaN(parsed.getTime())) {
    return value;
  }

  return new Intl.DateTimeFormat("en", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(parsed);
}

export default function DownloadClient() {
  const [download, setDownload] = useState<DownloadPayload | null>(null);
  const [error, setError] = useState<ErrorPayload | null>(null);
  const [stepIndex, setStepIndex] = useState(0);
  const hasTriggeredDownload = useRef(false);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setStepIndex((current) => (current < steps.length - 1 ? current + 1 : current));
    }, 900);

    return () => window.clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const abortController = new AbortController();

    async function loadDownload() {
      try {
        setError(null);
        const response = await fetch("/api/download/latest", {
          cache: "no-store",
          signal: abortController.signal,
        });

        if (!response.ok) {
          const payload = (await response.json().catch(() => null)) as ErrorPayload | null;
          throw new Error(payload?.error ?? "Unable to resolve the latest desktop build.");
        }

        const payload = (await response.json()) as DownloadPayload;
        setDownload(payload);
        setStepIndex(steps.length - 1);
      } catch (loadError) {
        if (abortController.signal.aborted) {
          return;
        }

        setError({
          error:
            loadError instanceof Error
              ? loadError.message
              : "Unable to resolve the latest desktop build.",
        });
      }
    }

    void loadDownload();

    return () => abortController.abort();
  }, []);

  useEffect(() => {
    if (!download || hasTriggeredDownload.current) {
      return;
    }

    hasTriggeredDownload.current = true;

    const timeoutId = window.setTimeout(() => {
      window.location.assign(download.downloadPath);
    }, 1200);

    return () => window.clearTimeout(timeoutId);
  }, [download]);

  const releaseDate = formatReleaseDate(download?.releaseDate ?? null);

  return (
    <div className="min-h-screen pt-24 sm:pt-28 pb-16 sm:pb-20 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_18%,rgba(90,178,255,0.18),transparent_24%),radial-gradient(circle_at_80%_22%,rgba(255,138,61,0.14),transparent_20%),linear-gradient(180deg,rgba(8,16,34,0.9)_0%,rgba(6,8,22,1)_72%)]" />
        <div className="absolute top-32 left-[10%] w-72 h-72 ambient-blue rounded-full blur-3xl opacity-90" />
        <div className="absolute bottom-16 right-[8%] w-80 h-80 ambient-ember rounded-full blur-3xl opacity-80" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 xl:grid-cols-[minmax(0,1.15fr)_minmax(20rem,28rem)] gap-8 lg:gap-10 items-start">
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="panel-strong rounded-[2rem] p-6 sm:p-8 lg:p-10 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-[linear-gradient(145deg,rgba(90,178,255,0.12),transparent_44%,rgba(255,138,61,0.08))]" />

            <div className="relative">
              <div className="eyebrow-pill text-xs sm:text-sm mb-6 border-[rgba(90,178,255,0.24)] text-[rgb(182,224,255)]">
                <BrandMark className="w-3.5 h-3.5 text-accent-primary" />
                ManaCamp desktop delivery
              </div>

              <h1 className="text-4xl sm:text-6xl font-semibold tracking-tight text-white max-w-[12ch] leading-[0.98] mb-5">
                <span className="text-white">Your download is</span>{" "}
                <span className="gradient-text">being prepared.</span>
              </h1>

              <p className="text-base sm:text-lg text-text-secondary max-w-2xl leading-relaxed mb-8">
                This page resolves the latest Windows release from the same public update feed used by the ManaCamp desktop app.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
                <div className="panel rounded-2xl p-4">
                  <p className="text-xs uppercase tracking-[0.22em] text-text-muted mb-2">Channel</p>
                  <p className="text-sm font-medium text-white">Stable public feed</p>
                </div>
                <div className="panel rounded-2xl p-4">
                  <p className="text-xs uppercase tracking-[0.22em] text-text-muted mb-2">Platform</p>
                  <p className="text-sm font-medium text-white">Windows 10 / 11 (64-bit)</p>
                </div>
                <div className="panel rounded-2xl p-4">
                  <p className="text-xs uppercase tracking-[0.22em] text-text-muted mb-2">Latest version</p>
                  <p className="text-sm font-medium text-white">{download?.version ?? "Resolving now"}</p>
                </div>
              </div>

              <div className="panel rounded-[1.5rem] p-5 sm:p-6 mb-6">
                <div className="flex items-center gap-3 mb-4">
                  {error ? (
                    <AlertCircle className="w-5 h-5 text-accent-warm-soft" />
                  ) : download ? (
                    <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                  ) : (
                    <LoaderCircle className="w-5 h-5 text-accent-primary animate-spin" />
                  )}
                  <div>
                    <p className="text-sm font-semibold text-white">
                      {error
                        ? "The feed could not be resolved yet"
                        : download
                          ? "Download ready"
                          : "Preparing the latest installer"}
                    </p>
                    <p className="text-sm text-text-secondary">
                      {error
                        ? "The public update feed is not available on this host yet."
                        : download
                          ? "If the download does not start automatically, use the manual button below."
                          : steps[stepIndex]}
                    </p>
                  </div>
                </div>

                <div className="space-y-3">
                  {steps.map((step, index) => {
                    const isActive = !error && (download ? true : index <= stepIndex);
                    const isComplete = !error && (download ? true : index < stepIndex);

                    return (
                      <div
                        key={step}
                        className={`rounded-2xl border px-4 py-3 transition-colors ${
                          isActive
                            ? "border-[rgba(90,178,255,0.24)] bg-[rgba(90,178,255,0.08)]"
                            : "border-border-subtle bg-[rgba(255,255,255,0.02)]"
                        }`}
                      >
                        <div className="flex items-center justify-between gap-3">
                          <span className="text-sm text-white">{step}</span>
                          {isComplete ? (
                            <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                          ) : isActive ? (
                            <LoaderCircle className="w-4 h-4 text-accent-primary animate-spin flex-shrink-0" />
                          ) : (
                            <span className="w-4 h-4 rounded-full border border-border-subtle flex-shrink-0" />
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={download?.downloadPath ?? "#"}
                  className={`btn-primary inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-base font-semibold transition-all duration-200 ${
                    download ? "hover:-translate-y-0.5" : "pointer-events-none opacity-60"
                  }`}
                >
                  <ArrowDownToLine className="w-4 h-4" />
                  Download latest build
                </a>
                <a
                  href={download?.manifestPath ?? DOWNLOADS_MANIFEST_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-secondary inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-base font-semibold transition-all duration-200 hover:-translate-y-0.5"
                >
                  <ExternalLink className="w-4 h-4" />
                  View update manifest
                </a>
                {error ? (
                  <Link
                    href="/support"
                    className="btn-secondary inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-base font-semibold transition-all duration-200 hover:-translate-y-0.5"
                  >
                    <RefreshCw className="w-4 h-4" />
                    Get help
                  </Link>
                ) : null}
              </div>
            </div>
          </motion.section>

          <motion.aside
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.45, delay: 0.08 }}
            className="space-y-4"
          >
            <div className="panel rounded-[1.5rem] p-5 sm:p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="icon-tile w-10 h-10 rounded-xl flex items-center justify-center border-[rgba(90,178,255,0.18)]">
                  <ShieldCheck className="w-5 h-5 text-accent-primary" />
                </div>
                <div>
                  <h2 className="text-lg font-semibold text-white">Reliable delivery</h2>
                  <p className="text-sm text-text-secondary">One feed for the site and the desktop updater.</p>
                </div>
              </div>
              <ul className="space-y-3 text-sm text-text-secondary leading-relaxed">
                <li>The site resolves the installer from the public update manifest rather than hardcoding a versioned file name.</li>
                <li>When the feed is updated, the download page automatically starts serving the newest installer.</li>
                <li>The API returns production URLs from downloads.manacamp.com for both the manifest and installer.</li>
              </ul>
            </div>

            <div className="panel rounded-[1.5rem] p-5 sm:p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="icon-tile w-10 h-10 rounded-xl flex items-center justify-center border-[rgba(255,138,61,0.2)]">
                  <Server className="w-5 h-5 text-accent-warm-soft" />
                </div>
                <div>
                  <h2 className="text-lg font-semibold text-white">Feed details</h2>
                  <p className="text-sm text-text-secondary">Current metadata from the update channel.</p>
                </div>
              </div>
              <dl className="space-y-3 text-sm">
                <div className="flex items-center justify-between gap-4">
                  <dt className="text-text-muted">Version</dt>
                  <dd className="text-white text-right">{download?.version ?? "Pending"}</dd>
                </div>
                <div className="flex items-center justify-between gap-4">
                  <dt className="text-text-muted">Release date</dt>
                  <dd className="text-white text-right">{releaseDate ?? "Pending"}</dd>
                </div>
                <div className="flex items-center justify-between gap-4">
                  <dt className="text-text-muted">Manifest</dt>
                  <dd className="text-right">
                    <a href={download?.manifestPath ?? DOWNLOADS_MANIFEST_URL} target="_blank" rel="noreferrer" className="text-[rgb(182,224,255)] hover:text-white transition-colors">
                      {download?.manifestPath ?? DOWNLOADS_MANIFEST_URL}
                    </a>
                  </dd>
                </div>
              </dl>
            </div>

            <div className="panel rounded-[1.5rem] p-5 sm:p-6">
              <h2 className="text-lg font-semibold text-white mb-3">If the download does not start</h2>
              <ol className="space-y-3 text-sm text-text-secondary leading-relaxed list-decimal pl-5">
                <li>Wait a few seconds for the manifest lookup to complete.</li>
                <li>Use the manual download button once the latest build has been resolved.</li>
                <li>If the feed is unavailable, contact support and include the manifest URL shown above.</li>
              </ol>
            </div>
          </motion.aside>
        </div>
      </div>
    </div>
  );
}
