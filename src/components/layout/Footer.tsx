import { Link } from "wouter";

const footerLinks = [
  { name: "Home", href: "/" },
  { name: "Publications", href: "/blog" },
  { name: "Interviews", href: "/interviews" },
  { name: "Photography", href: "/photography" },
  { name: "Events", href: "/event-planning" },
  { name: "About", href: "/about" },
];

const socialLinks = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/secretcuesofmslee/",
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: "X / Twitter",
    href: "https://twitter.com/",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
];

export function Footer() {
  return (
    <footer className="bg-primary text-white py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16 pb-16 border-b border-white/10">

          {/* Brand */}
          <div>
            <Link href="/" className="font-serif text-4xl font-light tracking-wide block mb-5">
              Jada <em className="text-white/70 italic">Lee</em>
            </Link>
            <p className="text-white/30 text-sm leading-relaxed max-w-xs font-light">
              Writer. Content creator. Sports journalist. Telling the stories that move people — one article at a time.
            </p>
            <div className="flex items-center gap-4 mt-8">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="text-white/25 hover:text-primary transition-colors duration-300"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Nav */}
          <div>
            <h4 className="luxury-label text-white/25 mb-7">Navigate</h4>
            <ul className="space-y-4">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-white/40 hover:text-white transition-colors text-sm font-light">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="luxury-label text-white/15">&copy; {new Date().getFullYear()} Jada Lee — SecretCues of Ms. Lee. All rights reserved.</p>
          <p className="font-serif italic text-white/15 text-base">"Small cues. Big transformations."</p>
        </div>
      </div>
    </footer>
  );
}
