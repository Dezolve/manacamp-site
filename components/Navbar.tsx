"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import BrandMark from "@/components/BrandMark";
import BrandWordmark from "@/components/BrandWordmark";

const navLinks = [
  { href: "/#features", label: "Features" },
  { href: "/about", label: "About" },
  { href: "/download", label: "Download" },
  { href: "/blog", label: "Blog" },
  { href: "/support", label: "Support" },
  { href: "/privacy", label: "Legal" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const toggleButtonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const handlePointerDown = (event: PointerEvent) => {
      const target = event.target;
      if (!(target instanceof Node)) {
        return;
      }

      if (menuRef.current?.contains(target) || toggleButtonRef.current?.contains(target)) {
        return;
      }

      setIsOpen(false);
    };

    document.addEventListener("pointerdown", handlePointerDown);
    return () => document.removeEventListener("pointerdown", handlePointerDown);
  }, [isOpen]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || isOpen
          ? "border-b border-border-subtle bg-[rgba(6,10,22,0.78)] shadow-[0_18px_40px_rgba(2,8,22,0.32)] backdrop-blur-xl"
          : "bg-[linear-gradient(180deg,rgba(5,9,20,0.34),rgba(5,9,20,0.08),transparent)] backdrop-blur-[6px]"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-4">
          <Link href="/" className="-ml-1.5 inline-flex items-center gap-2 rounded-full px-1.5 py-1.5 transition-colors duration-200 group hover:bg-white/[0.03]">
            <div className="icon-tile w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-200 group-hover:border-[rgba(255,158,88,0.34)] group-hover:shadow-[0_0_24px_rgba(90,178,255,0.18)]">
              <BrandMark className="w-[1.35rem] h-[1.35rem]" />
            </div>
            <BrandWordmark className="text-xl font-semibold" />
          </Link>

          <div className="hidden md:flex items-center gap-5 lg:gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-full px-3 py-2 text-sm whitespace-nowrap text-[rgb(184,199,232)] hover:bg-white/[0.04] hover:text-white transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/download"
              className="btn-primary inline-flex h-10 shrink-0 items-center justify-center rounded-full px-5 text-sm leading-none font-medium transition-all duration-200"
            >
              Get the App
            </Link>
          </div>

          <button
            ref={toggleButtonRef}
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border border-border-subtle bg-[rgba(8,13,25,0.55)] text-text-secondary hover:text-white transition-colors"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-nav-menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden px-4 pb-4">
          <div
            id="mobile-nav-menu"
            ref={menuRef}
            className="panel rounded-2xl border-border-subtle p-4 flex flex-col gap-2"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="rounded-xl px-3 py-2.5 text-text-secondary hover:text-white hover:bg-white/5 transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/download"
              onClick={() => setIsOpen(false)}
              className="btn-primary mt-2 inline-flex min-h-0 items-center justify-center rounded-full px-4 py-3 text-sm leading-none font-medium text-center transition-all duration-200"
            >
              Get the App
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
