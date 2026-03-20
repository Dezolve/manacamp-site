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
          ? "border-b border-border-subtle bg-[rgba(6,10,22,0.78)] backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="icon-tile w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-200 group-hover:border-[rgba(255,158,88,0.34)] group-hover:shadow-[0_0_24px_rgba(90,178,255,0.18)]">
              <Zap className="w-4 h-4 text-white" fill="white" />
            </div>
            <span className="text-xl font-semibold tracking-[0.02em] text-white">
              ManaCamp
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-text-secondary hover:text-white transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/#download"
              className="btn-primary px-4 py-2 rounded-full text-sm font-medium transition-all duration-200"
            >
              Get the App
            </Link>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-text-secondary hover:text-white transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden panel border-t border-border-subtle">
          <div className="px-4 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-text-secondary hover:text-white transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/#download"
              onClick={() => setIsOpen(false)}
              className="btn-primary px-4 py-2 rounded-full text-sm font-medium text-center transition-all duration-200"
            >
              Get the App
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
