import Link from "next/link";

const legalLinks = [
  { href: "/terms", label: "Terms & Conditions", key: "terms" },
  { href: "/privacy", label: "Privacy Policy", key: "privacy" },
  { href: "/guidelines", label: "Community Guidelines", key: "guidelines" },
] as const;

type LegalPageKey = (typeof legalLinks)[number]["key"];

export default function LegalNav({ current }: { current: LegalPageKey }) {
  return (
    <div className="panel rounded-2xl p-4 sm:p-5">
      <h2 className="text-sm font-semibold text-text-secondary uppercase tracking-[0.28em] mb-3">
        Legal Navigation
      </h2>
      <div className="flex flex-wrap gap-2">
        {legalLinks.map((link) => {
          const isActive = link.key === current;
          return (
            <Link
              key={link.href}
              href={link.href}
              aria-current={isActive ? "page" : undefined}
              className={`rounded-full px-4 py-2 text-sm transition-colors ${
                isActive
                  ? "bg-[rgba(90,178,255,0.18)] text-white border border-[rgba(90,178,255,0.45)]"
                  : "text-[rgb(182,224,255)] border border-border-subtle hover:text-white hover:border-border-strong"
              }`}
            >
              {link.label}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
