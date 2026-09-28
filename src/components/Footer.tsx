
import { ArrowUp, Linkedin, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

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

export function Footer() {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-violet-500/10 bg-obsidian-950 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-px w-1/2 bg-gradient-to-r from-transparent via-violet-500/30 to-transparent pointer-events-none" />

      <div className="ambient-orb w-64 h-64 bg-violet-500 bottom-0 left-1/2 -translate-x-1/2 pointer-events-none" />

      <div className="container-mw px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 text-xl font-display font-extrabold tracking-tight mb-3">
              <span className="text-white-primary">Seif</span>
              <span className="text-violet-400 neon-text-glow">Ahmed</span>
              <span className="ml-0.5 h-2 w-2 rounded-full bg-coral-400 animate-pulse-glow" />
            </div>

            <p className="text-sm text-slate-500 leading-relaxed max-w-xs">
              Junior Data Scientist & AI Enthusiast. Turning complex datasets into strategic insights and building robust software solutions.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-bold text-violet-400 mb-4 font-mono tracking-widest uppercase">
              Navigate
            </h3>

            <ul className="grid grid-cols-2 gap-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollTo(link.href);
                    }}
                    className="text-sm text-slate-500 hover:text-violet-400 transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold text-violet-400 mb-4 font-mono tracking-widest uppercase">
              Connect
            </h3>

            <div className="flex gap-3">
              <a
                href="mailto:Seif.ahmed2580@gmail.com"
                aria-label="Email"
                className="h-10 w-10 rounded-xl glass border border-violet-500/10 hover:border-violet-500/40 flex items-center justify-center transition-all duration-300 hover:scale-105 group"
              >
                <Mail className="h-4 w-4 text-violet-400 group-hover:scale-110 transition-transform duration-300" />
              </a>

              <a
                href="https://linkedin.com/in/seifahmed1"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="h-10 w-10 rounded-xl glass border border-violet-500/10 hover:border-violet-500/40 flex items-center justify-center transition-all duration-300 hover:scale-105 group"
              >
                <Linkedin className="h-4 w-4 text-[#0A66C2] group-hover:scale-110 transition-transform duration-300" />
              </a>
            </div>

            <p className="mt-4 text-xs text-slate-500">
              Available 24/7 for project updates and support.
            </p>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-violet-500/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-500 text-center sm:text-left">
            © {new Date().getFullYear()} Seif Ahmed Bahaa Eldein. All rights reserved.
          </p>

          <motion.button
            onClick={() => scrollTo('#hero')}
            whileHover={{ y: -2 }}
            className="inline-flex items-center gap-2 text-xs text-slate-500 hover:text-violet-400 font-medium transition-colors duration-300 group"
          >
            Back to top

            <span className="h-7 w-7 rounded-lg glass border border-violet-500/10 flex items-center justify-center group-hover:border-violet-500/40 transition-all duration-300">
              <ArrowUp className="h-3.5 w-3.5" />
            </span>
          </motion.button>
        </div>
      </div>
    </footer>
  );
}