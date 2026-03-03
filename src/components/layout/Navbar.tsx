'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect, useRef } from 'react';
import { Menu, X, Phone, Mail, GraduationCap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '/about', label: 'About' },
  { href: '/programmes', label: 'Programmes' },
  { href: '/for-schools', label: 'Schools' },
  { href: '/for-parents', label: 'Parents' },
  { href: '/for-students', label: 'Students' },
  { href: '/news', label: 'News' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const hamburgerRef = useRef<HTMLButtonElement>(null);

  // Shadow on scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileOpen) {
        setMobileOpen(false);
        hamburgerRef.current?.focus();
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [mobileOpen]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  return (
    <>
      {/* Skip to main content — visible only on focus */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-0 focus:left-0 focus:z-[100] focus:px-6 focus:py-3 focus:bg-primary focus:text-white focus:text-sm focus:font-medium focus:shadow-lg"
      >
        Skip to main content
      </a>

      <header className="sticky top-0 z-50">
        {/* Topbar */}
        <div className="bg-primary text-white text-xs sm:text-sm hidden sm:block">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex items-center justify-between gap-4">
            <span className="font-medium opacity-90 hidden md:block">
              MCR HQ CIC — Alternative Education Provision, Greater Manchester
            </span>
            <div className="flex items-center gap-4 ml-auto">
              <a
                href="tel:01611234567"
                className="flex items-center gap-1.5 hover:text-accent transition-colors"
                aria-label="Call us on 0161 123 4567"
              >
                <Phone size={13} aria-hidden="true" />
                <span>0161 123 4567</span>
              </a>
              <span className="opacity-30" aria-hidden="true">|</span>
              <a
                href="mailto:info@mcreducational.co.uk"
                className="flex items-center gap-1.5 hover:text-accent transition-colors"
                aria-label="Email info@mcreducational.co.uk"
              >
                <Mail size={13} aria-hidden="true" />
                <span className="hidden md:inline">info@mcreducational.co.uk</span>
                <span className="md:hidden">Email Us</span>
              </a>
            </div>
          </div>
        </div>

        {/* Main nav bar */}
        <nav
          role="navigation"
          aria-label="Main navigation"
          className={cn(
            'bg-white border-b border-neutral-100 transition-shadow duration-200',
            scrolled && 'shadow-md'
          )}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              {/* Logo */}
              <Link
                href="/"
                className="flex items-center gap-2.5 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-sm"
                aria-label="MCR Educational — home"
              >
                <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-primary text-white group-hover:bg-secondary transition-colors duration-200">
                  <GraduationCap size={20} aria-hidden="true" />
                </div>
                <div className="leading-tight">
                  <div className="text-base font-bold text-primary font-heading group-hover:text-secondary transition-colors duration-200">
                    MCR Educational
                  </div>
                  <div className="text-[10px] text-neutral-dark/50 font-body hidden sm:block tracking-wide uppercase">
                    Dance · Educate · Support
                  </div>
                </div>
              </Link>

              {/* Desktop nav links */}
              <ul
                role="list"
                className="hidden lg:flex items-center gap-0.5"
              >
                {navLinks.map(({ href, label }) => {
                  const isActive =
                    href === '/'
                      ? pathname === '/'
                      : pathname.startsWith(href);
                  return (
                    <li key={href}>
                      <Link
                        href={href}
                        className={cn(
                          'relative px-3 py-2 text-sm font-medium rounded-md transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-1',
                          isActive
                            ? 'text-primary'
                            : 'text-neutral-dark/70 hover:text-primary hover:bg-neutral-light'
                        )}
                        aria-current={isActive ? 'page' : undefined}
                      >
                        {label}
                        {isActive && (
                          <span
                            className="absolute bottom-0 left-3 right-3 h-0.5 bg-secondary rounded-full"
                            aria-hidden="true"
                          />
                        )}
                      </Link>
                    </li>
                  );
                })}
              </ul>

              {/* Desktop CTA */}
              <div className="hidden lg:block">
                <Button
                  asChild
                  className="bg-secondary hover:bg-secondary/90 text-white font-semibold shadow-sm"
                  size="sm"
                >
                  <Link href="/for-schools#referral">Make a Referral</Link>
                </Button>
              </div>

              {/* Mobile: CTA + hamburger */}
              <div className="flex items-center gap-2 lg:hidden">
                <Button
                  asChild
                  size="sm"
                  className="bg-secondary hover:bg-secondary/90 text-white font-semibold text-xs px-3 hidden sm:inline-flex"
                >
                  <Link href="/for-schools#referral">Refer</Link>
                </Button>

                <button
                  ref={hamburgerRef}
                  onClick={() => setMobileOpen((o) => !o)}
                  className="inline-flex items-center justify-center w-10 h-10 rounded-lg text-neutral-dark hover:bg-neutral-light focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary transition-colors"
                  aria-expanded={mobileOpen}
                  aria-controls="mobile-menu"
                  aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
                >
                  {mobileOpen ? (
                    <X size={22} aria-hidden="true" />
                  ) : (
                    <Menu size={22} aria-hidden="true" />
                  )}
                </button>
              </div>
            </div>
          </div>
        </nav>

        {/* Mobile menu overlay */}
        {mobileOpen && (
          <div
            className="fixed inset-0 z-40 lg:hidden"
            aria-hidden="true"
            onClick={() => setMobileOpen(false)}
          >
            <div className="absolute inset-0 bg-neutral-dark/40 backdrop-blur-sm" />
          </div>
        )}

        {/* Mobile menu panel */}
        <div
          id="mobile-menu"
          ref={mobileMenuRef}
          role="dialog"
          aria-modal="true"
          aria-label="Navigation menu"
          className={cn(
            'fixed top-0 right-0 bottom-0 z-50 w-full max-w-xs bg-white shadow-2xl flex flex-col transition-transform duration-300 ease-in-out lg:hidden',
            mobileOpen ? 'translate-x-0' : 'translate-x-full'
          )}
        >
          {/* Mobile menu header */}
          <div className="flex items-center justify-between px-5 py-4 border-b border-neutral-100 bg-neutral-light/50">
            <span className="text-sm font-semibold text-primary font-heading">Menu</span>
            <button
              onClick={() => setMobileOpen(false)}
              className="inline-flex items-center justify-center w-8 h-8 rounded-lg text-neutral-dark hover:bg-neutral-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary transition-colors"
              aria-label="Close menu"
            >
              <X size={18} aria-hidden="true" />
            </button>
          </div>

          {/* Mobile nav links */}
          <ul role="list" className="flex flex-col p-4 gap-1 flex-1 overflow-y-auto">
            {navLinks.map(({ href, label }) => {
              const isActive =
                href === '/' ? pathname === '/' : pathname.startsWith(href);
              return (
                <li key={href}>
                  <Link
                    href={href}
                    className={cn(
                      'flex items-center px-4 py-3 rounded-lg text-base font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary',
                      isActive
                        ? 'bg-primary/10 text-primary border-l-2 border-primary'
                        : 'text-neutral-dark hover:bg-neutral-light hover:text-primary'
                    )}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    {label}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Mobile CTA */}
          <div className="p-5 border-t border-neutral-100 space-y-3">
            <Button
              asChild
              className="w-full bg-secondary hover:bg-secondary/90 text-white font-semibold"
            >
              <Link href="/for-schools#referral">Make a Referral</Link>
            </Button>
            <div className="flex flex-col gap-2 text-sm text-neutral-dark/60">
              <a
                href="tel:01611234567"
                className="flex items-center gap-2 hover:text-primary transition-colors"
              >
                <Phone size={14} aria-hidden="true" />
                0161 123 4567
              </a>
              <a
                href="mailto:info@mcreducational.co.uk"
                className="flex items-center gap-2 hover:text-primary transition-colors"
              >
                <Mail size={14} aria-hidden="true" />
                info@mcreducational.co.uk
              </a>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
