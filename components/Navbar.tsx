"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Zap } from "lucide-react";

const navLinks = [
  { href: "/#features", label: "Features" },
  { href: "/#download", label: "Download" },
  { href: "/support", label: "Support" },
  { href: "/terms", label: "Terms" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "glass shadow-lg shadow-purple-900/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-600 to-amber-500 flex items-center justify-center shadow-lg group-hover:shadow-purple-500/50 transition-shadow">
              <Zap className="w-4 h-4 text-white" fill="white" />
            </div>
            <span className="text-xl font-bold gradient-text">ManaCamp</span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-gray-300 hover:text-white transition-colors duration-200 hover:text-purple-300"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/#download"
              className="px-4 py-2 rounded-full bg-gradient-to-r from-purple-600 to-violet-600 text-white text-sm font-medium hover:from-purple-500 hover:to-violet-500 transition-all duration-200 shadow-lg hover:shadow-purple-500/40"
            >
              Get the App
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-300 hover:text-white transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden glass border-t border-white/10">
          <div className="px-4 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-gray-300 hover:text-white transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/#download"
              onClick={() => setIsOpen(false)}
              className="px-4 py-2 rounded-full bg-gradient-to-r from-purple-600 to-violet-600 text-white text-sm font-medium text-center"
            >
              Get the App
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
