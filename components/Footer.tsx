import Link from "next/link";
import { Twitter, Github, Mail } from "lucide-react";
import BrandMark from "@/components/BrandMark";

const footerLinks = {
  Product: [
    { href: "/#features", label: "Features" },
    { href: "/#download", label: "Download" },
    { href: "/#ios", label: "iOS App" },
  ],
  Resources: [
    { href: "/support", label: "Support" },
    { href: "/terms", label: "Terms & Conditions" },
    { href: "/privacy", label: "Privacy Policy" },
  ],
  Contact: [
    { href: "mailto:hello@manacamp.app", label: "hello@manacamp.app" },
  ],
};

export default function Footer() {
  return (
    <footer className="border-t border-border-subtle bg-[rgba(4,7,15,0.82)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4 group">
              <div className="icon-tile w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-200 group-hover:border-[rgba(255,158,88,0.34)]">
                <BrandMark className="w-4 h-4 text-accent-primary" />
              </div>
              <span className="text-xl font-semibold">
                <span className="brand-wordmark-mana">Mana</span>
                <span className="brand-wordmark-camp">Camp</span>
              </span>
            </Link>
            <p className="text-sm text-text-secondary leading-relaxed">
              A modern home for channels, chats, sessions, and community.
            </p>
            <div className="flex items-center gap-3 mt-4">
              <a
                href="https://twitter.com/manacamp"
                target="_blank"
                rel="noopener noreferrer"
                className="panel w-8 h-8 rounded-full flex items-center justify-center text-text-muted hover:text-white hover:border-border-strong transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="https://github.com/Dezolve"
                target="_blank"
                rel="noopener noreferrer"
                className="panel w-8 h-8 rounded-full flex items-center justify-center text-text-muted hover:text-white hover:border-border-strong transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="mailto:hello@manacamp.app"
                className="panel w-8 h-8 rounded-full flex items-center justify-center text-text-muted hover:text-white hover:border-border-strong transition-colors"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category} className={category === "Contact" ? "col-span-2 sm:col-span-1" : "col-span-1"}>
              <h3 className="text-sm font-semibold text-white mb-3">
                {category}
              </h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-text-secondary hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 pt-6 border-t border-border-subtle flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 text-center sm:text-left">
          <p className="text-xs text-text-muted text-balance">
            © {new Date().getFullYear()} ManaCamp. All rights reserved.
          </p>
          <div className="flex flex-col items-center sm:items-end gap-1">
            <p className="text-xs text-text-muted text-balance">
              Built for communities that want a better place to gather.
            </p>
            <a
              href="https://dezolvelabs.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-[rgb(182,224,255)] hover:text-white transition-colors"
            >
              By DezolveLabs · DezolveLabs.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
