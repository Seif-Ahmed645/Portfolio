
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Download,
  Sparkles,
  FileText,
  GraduationCap,
  Database,
  Code2,
  ChevronDown,
} from 'lucide-react';

const TAGS = [
  'Python',
  'SQL (Server & PostgreSQL)',
  'Data Analysis',
  'Machine Learning',
  'C++',
];

const BADGES = [
  {
    icon: FileText,
    label: '10+ ATS Resumes Created',
    position: 'top' as const,
  },
  {
    icon: GraduationCap,
    label: '3.25 GPA — Capital University',
    position: 'bottom' as const,
  },
];

const PROFILE_IMAGE = '/Portfolio/profile.jpg';

const STATS = [
  { icon: Database, value: '3+', label: 'Months Experience' },
  { icon: FileText, value: '10+', label: 'ATS Resumes' },
  { icon: Code2, value: '5+', label: 'Projects Built' },
];

export function Hero() {
  const scrollTo = (id: string) => {
    const target = document.getElementById(id);

    if (!target) {
      console.error(`Section with id "${id}" was not found.`);
      return;
    }

    target.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-28 pb-16 overflow-hidden"
    >
      <div className="absolute inset-0 dot-overlay opacity-50 pointer-events-none" />
      <div className="absolute inset-0 grid-overlay opacity-30 pointer-events-none" />
      <div className="absolute inset-0 bg-radial-glow pointer-events-none" />

      <div className="ambient-orb w-80 h-80 bg-violet-500 top-1/4 -left-20 animate-orb-float" />

      <div
        className="ambient-orb w-96 h-96 bg-coral-400 bottom-1/4 -right-32 animate-orb-float"
        style={{ animationDelay: '3s' }}
      />

      <div
        className="ambient-orb w-64 h-64 bg-violet-500 top-1/2 left-1/3 animate-orb-float"
        style={{ animationDelay: '5s' }}
      />

      <div className="container-mw px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          <div className="lg:col-span-7 order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-violet-500/20 mb-6">
                <Sparkles className="h-3.5 w-3.5" />

                <span
                  className="text-xs font-semibold font-mono tracking-wider"
                  style={{ color: '#5F2E1B' }}
                >
                  AVAILABLE FOR PROJECTS
                </span>
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight leading-[1.05]"
            >
              <span className="text-white-primary">Seif Ahmed</span>

              <span className="block mt-3 text-gradient-vc neon-text-glow">
                Junior Data Scientist &amp; AI Enthusiast
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-6 text-base sm:text-lg text-slate-400 leading-relaxed max-w-xl"
            >
              Passionate about turning complex datasets into strategic insights
              and building robust software solutions.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-7 flex flex-wrap gap-2.5"
            >
              {TAGS.map((tag, i) => (
                <motion.span
                  key={tag}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.4,
                    delay: 0.45 + i * 0.08,
                  }}
                  className={`neon-pill font-mono text-xs ${
                    i % 2 === 1
                      ? '!border-coral-400/20 hover:!border-coral-400/40 hover:!text-coral-400 hover:!shadow-violet-500/0'
                      : ''
                  }`}
                  style={
                    i % 2 === 1
                      ? {
                          background: 'rgba(251,146,60,0.05)',
                          borderColor: 'rgba(251,146,60,0.15)',
                        }
                      : undefined
                  }
                >
                  <span
                    className={`h-1.5 w-1.5 rounded-full ${
                      i % 2 === 0 ? 'bg-violet-400' : 'bg-coral-400'
                    }`}
                  />
                  {tag}
                </motion.span>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.55 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <button
                type="button"
                onClick={() => scrollTo('services-gallery')}
                className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-violet-500 hover:bg-violet-600 text-white font-bold text-sm transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-violet-500/30 magnetic-btn shine"
              >
                Explore My Work

                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
              </button>

              <a
                href="/Portfolio/Seif_Ahmed_CV.pdf"
                download
                className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-xl glass border border-violet-500/20 hover:border-violet-500/50 text-violet-400 font-bold text-sm transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-violet-500/15 magnetic-btn"
              >
                <Download className="h-4 w-4 group-hover:translate-y-0.5 transition-transform duration-300" />
                Download CV
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.65 }}
              className="mt-12 flex flex-wrap gap-8"
            >
              {STATS.map((stat) => (
                <div key={stat.label} className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-xl glass border border-violet-500/15 flex items-center justify-center shrink-0">
                    <stat.icon className="h-4 w-4 text-violet-400" />
                  </div>

                  <div>
                    <div className="text-xl font-bold text-white-primary font-display">
                      {stat.value}
                    </div>

                    <div className="text-xs text-slate-500">
                      {stat.label}
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          <div className="lg:col-span-5 order-1 lg:order-2 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative mx-auto w-full max-w-sm"
            >
              <div className="absolute inset-0 -m-4 rounded-[2rem] border border-violet-500/15 animate-spin-slow pointer-events-none" />

              <div className="absolute inset-0 -m-8 rounded-[2.5rem] border border-coral-400/8 pointer-events-none" />

              <div className="relative rounded-[2rem] overflow-hidden neon-border animate-pulse-glow">
                <div className="aspect-[4/5] bg-obsidian-850 overflow-hidden">
                  <img
                    src={PROFILE_IMAGE}
                    alt="Seif Ahmed Bahaa Eldein"
                    className="w-full h-full object-cover object-center"
                    loading="eager"
                  />
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-obsidian-900 via-obsidian-900/20 to-transparent pointer-events-none" />

                <div className="absolute top-3 left-3 h-6 w-6 border-t-2 border-l-2 border-violet-500/50 rounded-tl-lg pointer-events-none" />

                <div className="absolute top-3 right-3 h-6 w-6 border-t-2 border-r-2 border-coral-400/50 rounded-tr-lg pointer-events-none" />

                <div className="absolute bottom-3 left-3 h-6 w-6 border-b-2 border-l-2 border-coral-400/50 rounded-bl-lg pointer-events-none" />

                <div className="absolute bottom-3 right-3 h-6 w-6 border-b-2 border-r-2 border-violet-500/50 rounded-br-lg pointer-events-none" />

                <div className="absolute bottom-4 left-4 right-4">
                  <div className="glass-strong rounded-xl px-4 py-3 flex items-center justify-between border border-violet-500/10">
                    <div>
                      <div className="text-sm font-bold text-white-primary">
                        Seif Ahmed
                      </div>

                      <div className="text-xs text-slate-400">
                        Junior Data Scientist &amp; AI Enthusiast
                      </div>
                    </div>

                    <div className="h-2.5 w-2.5 rounded-full bg-green-400 animate-pulse shrink-0 shadow-lg shadow-green-400/50" />
                  </div>
                </div>
              </div>

              {BADGES.map((badge, i) => (
                <motion.div
                  key={badge.label}
                  initial={{ opacity: 0, x: i === 0 ? -30 : 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: 0.8 + i * 0.2,
                  }}
                  className={`absolute ${
                    badge.position === 'top'
                      ? 'top-6 -left-4 sm:-left-8'
                      : 'bottom-28 -right-4 sm:-right-8'
                  } animate-float ${
                    badge.position === 'bottom'
                      ? 'animate-float-delayed'
                      : ''
                  }`}
                >
                  <div
                    className={`glass-strong rounded-xl px-3.5 py-2.5 flex items-center gap-2.5 border ${
                      i === 0
                        ? 'border-violet-500/15 neon-glow'
                        : 'border-coral-400/20 neon-glow-coral'
                    }`}
                  >
                    <div
                      className={`h-8 w-8 rounded-lg flex items-center justify-center shrink-0 ${
                        i === 0
                          ? 'bg-violet-500/15 border border-violet-500/25'
                          : 'bg-coral-400/15 border border-coral-400/25'
                      }`}
                    >
                      <badge.icon
                        className={`h-4 w-4 ${
                          i === 0 ? 'text-violet-400' : 'text-coral-400'
                        }`}
                      />
                    </div>

                    <div className="text-xs font-bold text-white-primary whitespace-nowrap">
                      {badge.label}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      <motion.button
        type="button"
        onClick={() => scrollTo('about')}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center gap-2 text-violet-400/60 hover:text-violet-400 transition-colors duration-300"
      >
        <span className="text-xs font-mono tracking-widest">SCROLL</span>
        <ChevronDown className="h-5 w-5 animate-bounce-slow" />
      </motion.button>
    </section>
  );
}

export default Hero;