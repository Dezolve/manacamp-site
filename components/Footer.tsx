import Link from "next/link";
import { Zap, Twitter, Github, Mail } from "lucide-react";

const footerLinks = {
  Product: [
    { href: "/#features", label: "Features" },
    { href: "/#download", label: "Download" },
    { href: "/#ios", label: "iOS App" },
  ],
  Company: [
    { href: "/support", label: "Support" },
    { href: "/terms", label: "Terms & Conditions" },
    { href: "/terms#privacy", label: "Privacy Policy" },
  ],
  Connect: [
    { href: "mailto:hello@manacamp.app", label: "hello@manacamp.app" },
  ],
};

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4 group">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-600 to-amber-500 flex items-center justify-center">
                <Zap className="w-4 h-4 text-white" fill="white" />
              </div>
              <span className="text-xl font-bold gradient-text">ManaCamp</span>
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed">
              Your ultimate card game companion. Track, build, and dominate.
            </p>
            <div className="flex items-center gap-3 mt-4">
              <a
                href="https://twitter.com/manacamp"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full glass flex items-center justify-center text-gray-400 hover:text-white hover:border-purple-500 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="https://github.com/Dezolve"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full glass flex items-center justify-center text-gray-400 hover:text-white hover:border-purple-500 transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="mailto:hello@manacamp.app"
                className="w-8 h-8 rounded-full glass flex items-center justify-center text-gray-400 hover:text-white hover:border-purple-500 transition-colors"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-sm font-semibold text-white mb-3">
                {category}
              </h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-400 hover:text-purple-300 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} ManaCamp. All rights reserved.
          </p>
          <p className="text-xs text-gray-500">
            Built with ❤️ for card game enthusiasts
          </p>
        </div>
      </div>
    </footer>
  );
}
