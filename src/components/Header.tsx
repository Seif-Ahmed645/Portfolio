import { useEffect, useState } from 'react';
import { Menu, X, Moon, Sun, Linkedin } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'USP', href: '#usp' },
  { label: 'Education', href: '#education' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Certificates', href: '#certificates' },
  { label: 'Gallery', href: '#services-gallery' },
  { label: 'Contact', href: '#contact' },
];

type HeaderProps = {
  theme: 'dark' | 'light';
  onToggleTheme: () => void;
};

export function Header({ theme, onToggleTheme }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: '-40% 0px -55% 0px' }
    );
    NAV_LINKS.forEach(({ href }) => {
      const el = document.querySelector(href);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'glass-strong py-3 shadow-lg shadow-black/20' : 'bg-transparent py-5'
      }`}
    >
      <nav className="container-mw px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <a
          href="#hero"
          onClick={(e) => { e.preventDefault(); handleNavClick('#hero'); }}
          className="group flex items-center gap-2.5 text-xl font-display font-extrabold tracking-tight"
        >
          <span className="text-white-primary">Seif</span>
          <span className="text-violet-400 neon-text-glow">Ahmed</span>
          <span className="ml-1 flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-coral-400 animate-pulse-glow" />
            <span className="hidden sm:inline text-xs font-mono text-coral-400 font-medium">Available</span>
          </span>
        </a>

        <ul className="hidden xl:flex items-center gap-0.5">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                className={`relative px-3.5 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
                  activeSection === link.href.slice(1)
                    ? 'text-violet-400'
                    : 'text-slate-400 hover:text-violet-400'
                }`}
              >
                {link.label}
                <span
                  className={`absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-violet-500 transition-all duration-300 ${
                    activeSection === link.href.slice(1) ? 'opacity-100 scale-x-100 neon-glow' : 'opacity-0 scale-x-0'
                  }`}
                />
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2 sm:gap-3">
          <button
            onClick={onToggleTheme}
            aria-label="Toggle theme"
            className="h-10 w-10 rounded-xl glass border border-violet-500/10 hover:border-violet-500/40 flex items-center justify-center transition-all duration-300 hover:scale-105 group"
          >
            {theme === 'dark' ? (
              <Sun className="h-4 w-4 text-violet-400 group-hover:rotate-180 transition-transform duration-500" />
            ) : (
              <Moon className="h-4 w-4 text-violet-400 group-hover:-rotate-12 transition-transform duration-500" />
            )}
          </button>

          <a
            href="https://linkedin.com/in/seifahmed1"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
            className="h-10 w-10 rounded-xl glass border border-violet-500/10 hover:border-violet-500/40 flex items-center justify-center transition-all duration-300 hover:scale-105 group"
          >
            <Linkedin className="h-4 w-4 text-[#0A66C2] group-hover:scale-110 transition-transform duration-300" />
          </a>

          <button
            onClick={() => handleNavClick('#contact')}
            className="hidden sm:inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-violet-500 hover:bg-violet-600 text-white text-sm font-bold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-violet-500/30 magnetic-btn"
          >
            Let's Talk
          </button>

          <button
            onClick={() => setMobileOpen((p) => !p)}
            aria-label="Toggle menu"
            className="xl:hidden h-10 w-10 rounded-xl glass border border-violet-500/10 flex items-center justify-center transition-all duration-300 text-violet-400"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="xl:hidden overflow-hidden"
          >
            <div className="px-4 sm:px-6 pt-4 pb-6">
              <ul className="glass-strong rounded-2xl p-3 flex flex-col gap-1 border border-violet-500/10 max-h-[60vh] overflow-y-auto">
                {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                      className={`block px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                        activeSection === link.href.slice(1)
                          ? 'bg-violet-500/10 text-violet-400'
                          : 'text-slate-400 hover:bg-white/5 hover:text-violet-400'
                      }`}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
                <li className="pt-1">
                  <button
                    onClick={() => handleNavClick('#contact')}
                    className="w-full inline-flex items-center justify-center px-5 py-3 rounded-xl bg-violet-500 hover:bg-violet-600 text-white text-sm font-bold transition-all duration-300"
                  >
                    Let's Talk
                  </button>
                </li>
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
