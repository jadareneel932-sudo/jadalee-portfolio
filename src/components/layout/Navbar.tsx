import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { Menu, X, Moon, Sun, Globe } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "@/lib/theme";
import { useLang, LANGUAGES } from "@/lib/i18n";

const IconInstagram = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
  </svg>
);

const IconX = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const IconLinkedIn = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const socialLinks = [
  { icon: <IconInstagram />, href: "https://www.instagram.com/secretcuesofmslee/", label: "Instagram" },
  { icon: <IconX />, href: "https://twitter.com/", label: "X / Twitter" },
  { icon: <IconLinkedIn />, href: "https://linkedin.com/", label: "LinkedIn" },
];

export function Navbar() {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [mobileLangOpen, setMobileLangOpen] = useState(false);
  const langRef = useRef<HTMLDivElement>(null);

  const { theme, toggleTheme } = useTheme();
  const { lang, setLang, t } = useLang();

  const navLinks = [
    { name: t.nav.home, href: "/" },
    { name: t.nav.work, href: "/blog" },
    { name: t.nav.interviews, href: "/interviews" },
    { name: t.nav.photography, href: "/photography" },
    { name: t.nav.eventPlanning, href: "/event-planning" },
    { name: t.nav.about, href: "/about" },
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => { setMobileMenuOpen(false); }, [location]);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setLangOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const isHome = location === "/";
  const useLightText = isHome && !isScrolled;

  const iconClass = cn(
    "transition-colors duration-300 hover:text-primary",
    useLightText ? "text-white/70" : "text-foreground/50"
  );

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out px-6 md:px-12",
          isScrolled
            ? "bg-background/95 backdrop-blur-md shadow-sm py-3"
            : isHome
              ? "bg-transparent py-6"
              : "bg-background/95 backdrop-blur-sm border-b border-border/40 py-4"
        )}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">

          <Link
            href="/"
            className={cn(
              "font-serif text-3xl md:text-4xl font-bold tracking-wide z-50 relative transition-colors duration-500 shrink-0",
              useLightText ? "text-white" : "text-foreground"
            )}
          >
            Jada{" "}
            <span className="italic font-semibold text-primary">Lee</span>
          </Link>

          <nav className="hidden lg:flex items-center gap-4 xl:gap-7">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "luxury-label transition-colors hover:text-primary relative group py-2",
                  location === link.href
                    ? "text-primary"
                    : useLightText ? "text-white/80" : "text-foreground/70"
                )}
              >
                {link.name}
                {location === link.href && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute bottom-0 left-0 right-0 h-px bg-primary"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </Link>
            ))}

            {/* Divider */}
            <div className={cn("w-px h-4 transition-colors duration-500", useLightText ? "bg-white/20" : "bg-border")} />

            {/* Social icons */}
            <div className="flex items-center gap-3">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className={iconClass}
                >
                  {s.icon}
                </a>
              ))}
            </div>

            {/* Divider */}
            <div className={cn("w-px h-4 transition-colors duration-500", useLightText ? "bg-white/20" : "bg-border")} />

            {/* Dark mode toggle */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle dark mode"
              className={cn("p-1.5 rounded-full transition-colors duration-300", iconClass)}
            >
              {theme === "dark" ? <Sun size={15} /> : <Moon size={15} />}
            </button>

            {/* Language switcher */}
            <div ref={langRef} className="relative">
              <button
                onClick={() => setLangOpen((o) => !o)}
                aria-label="Change language"
                className={cn("flex items-center gap-1.5 p-1.5 rounded-full transition-colors duration-300", iconClass)}
              >
                <Globe size={15} />
                <span className="luxury-label text-[9px]">{lang.toUpperCase()}</span>
              </button>

              <AnimatePresence>
                {langOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -8, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -8, scale: 0.95 }}
                    transition={{ duration: 0.15 }}
                    className="absolute right-0 top-full mt-2 w-44 bg-background border border-border shadow-lg py-1 z-50 max-h-52 overflow-y-auto"
                  >
                    {LANGUAGES.map((l) => (
                      <button
                        key={l.code}
                        onClick={() => { setLang(l.code); setLangOpen(false); }}
                        className={cn(
                          "w-full flex items-center gap-3 px-4 py-2.5 text-left text-sm transition-colors hover:bg-primary/10 hover:text-primary",
                          lang === l.code ? "text-primary font-medium" : "text-foreground/70"
                        )}
                      >
                        <span className="text-base">{l.flag}</span>
                        <span className="font-sans text-xs tracking-wide">{l.label}</span>
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </nav>

          {/* Mobile right controls */}
          <div className="lg:hidden flex items-center gap-1 z-50">
            <button
              onClick={toggleTheme}
              aria-label="Toggle dark mode"
              className={cn("p-2 transition-colors duration-300", useLightText ? "text-white/80" : "text-foreground/60")}
            >
              {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
            </button>
            {/* Mobile language picker */}
            <div ref={langRef} className="relative">
              <button
                onClick={() => setLangOpen((o) => !o)}
                aria-label="Change language"
                className={cn("flex items-center gap-1 p-2 transition-colors duration-300", useLightText ? "text-white/80" : "text-foreground/60")}
              >
                <Globe size={16} />
                <span className="luxury-label text-[9px]">{lang.toUpperCase()}</span>
              </button>
              <AnimatePresence>
                {langOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -8, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -8, scale: 0.95 }}
                    transition={{ duration: 0.15 }}
                    className="absolute right-0 top-full mt-2 w-44 bg-background border border-border shadow-lg py-1 z-50 max-h-52 overflow-y-auto"
                  >
                    {LANGUAGES.map((l) => (
                      <button
                        key={l.code}
                        onClick={() => { setLang(l.code); setLangOpen(false); }}
                        className={cn(
                          "w-full flex items-center gap-3 px-4 py-2.5 text-left text-sm transition-colors hover:bg-primary/10 hover:text-primary",
                          lang === l.code ? "text-primary font-medium" : "text-foreground/70"
                        )}
                      >
                        <span className="text-base">{l.flag}</span>
                        <span className="font-sans text-xs tracking-wide">{l.label}</span>
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <button
              className={cn("p-2 -mr-2 transition-colors duration-500", useLightText ? "text-white" : "text-foreground")}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-primary pt-28 px-8 flex flex-col lg:hidden overflow-y-auto"
          >
            <nav className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    "font-serif text-3xl py-5 border-b border-white/10 transition-colors",
                    location === link.href ? "text-white italic" : "text-white/80"
                  )}
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* Language picker in mobile menu — collapsible */}
            <div className="mt-8 border-t border-white/10 pt-6">
              <button
                onClick={() => setMobileLangOpen(o => !o)}
                className="w-full flex items-center justify-between"
              >
                <span className="luxury-label text-white/40 tracking-widest">Language</span>
                <span className="flex items-center gap-2 text-white/60">
                  <span className="text-sm">{LANGUAGES.find(l => l.code === lang)?.flag}</span>
                  <span className="luxury-label text-xs">{lang.toUpperCase()}</span>
                  <motion.span
                    animate={{ rotate: mobileLangOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="text-white/40 text-xs"
                  >
                    ▼
                  </motion.span>
                </span>
              </button>

              <AnimatePresence>
                {mobileLangOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="overflow-hidden"
                  >
                    <div className="mt-4 max-h-52 overflow-y-auto pr-1 flex flex-col gap-1">
                      {LANGUAGES.map((l) => (
                        <button
                          key={l.code}
                          onClick={() => { setLang(l.code); setMobileLangOpen(false); }}
                          className={cn(
                            "flex items-center gap-3 px-3 py-2.5 text-left transition-colors",
                            lang === l.code
                              ? "bg-white/15 text-white"
                              : "text-white/50 hover:text-white/80 hover:bg-white/5"
                          )}
                        >
                          <span className="text-base">{l.flag}</span>
                          <span className="font-sans text-sm">{l.label}</span>
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div className="mt-auto pb-16">
              <div className="flex items-center gap-6 mb-8">
                {socialLinks.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="text-white/40 hover:text-white transition-colors"
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
