
import { motion } from 'framer-motion';
import { ArrowRight, Database, Code2, FileText, Presentation, Linkedin, FileOutput, Heart, Clock } from 'lucide-react';
import { SectionHeading } from '@/components/SectionHeading';
import { TiltCard } from '@/components/TiltCard';

const NARRATIVE_STATS = [
  { icon: Database, label: 'SQL Server & PostgreSQL', color: 'violet' as const },
  { icon: Code2, label: 'C++ Desktop Apps (OOP)', color: 'violet' as const },
  { icon: FileText, label: '10+ ATS-Compliant CVs', color: 'coral' as const },
  { icon: Presentation, label: '10+ Technical Presentations', color: 'coral' as const },
  { icon: Linkedin, label: 'LinkedIn Profile Optimizations', color: 'violet' as const },
  { icon: FileOutput, label: 'PDF to Word Conversions', color: 'coral' as const },
];

const TRAITS = [
  { icon: Heart, label: 'Highly Dedicated' },
  { icon: Clock, label: '24/7 Available' },
  { icon: Presentation, label: 'Clear Communicator' },
  { icon: Code2, label: 'Detail-Oriented' },
];

export function About() {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="about" className="section-pad relative overflow-hidden">
      <div className="ambient-orb w-72 h-72 bg-violet-500 top-1/3 -right-20 animate-orb-float" />
      <div className="ambient-orb w-56 h-56 bg-coral-400 bottom-1/4 -left-16 animate-orb-float" style={{ animationDelay: '4s' }} />

      <div className="container-mw relative z-10">
        <SectionHeading
          eyebrow="About Me"
          title={<>Get to know <span className="text-gradient-vc neon-text-glow">Seif</span></>}
        />

        <TiltCard className="mt-12 rounded-3xl glass-strong border border-violet-500/10 p-8 sm:p-10 lg:p-12 relative overflow-hidden">
          <div className="absolute inset-0 dot-overlay opacity-20 pointer-events-none" />
          <div className="absolute -top-16 -right-16 h-48 w-48 rounded-full bg-violet-500/8 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-coral-400/6 blur-3xl pointer-events-none" />

          <div className="relative">
            <div className="text-6xl font-display font-extrabold text-violet-500/15 leading-none mb-4 select-none">"</div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-base sm:text-lg lg:text-xl text-slate-300 leading-relaxed font-light"
            >
              I am{' '}
              <span className="font-semibold text-violet-400">Seif Ahmed Bahaa Eldein</span>, a Junior Data
              Scientist and AI Enthusiast equipped with{' '}
              <span className="font-semibold !text-[#D9886A]">3 months of hands-on industry experience</span>{' '}
              and high proficiency in SQL Server and PostgreSQL. Throughout my professional and technical
              journey, I have engineered real-world{' '}
              <span className="font-semibold text-violet-400">C++ desktop software applications</span>,
              including a Bank Management System and a Library Management System, applying advanced
              Object-Oriented Programming (OOP) principles and file handling techniques. Alongside my
              technical core, I deliver high-quality digital execution services — having crafted over{' '}
              <span className="font-semibold !text-[#D9886A]">10 professional ATS-compliant CVs</span>,
              designed{' '}
              <span className="font-semibold !text-[#D9886A]">10+ technical presentations</span>,
              <span className="font-semibold !text-[#D9886A]"> optimized multiple LinkedIn profiles</span>,
              and{' '}
              <span className="font-semibold !text-[#D9886A]">converted complex PDF documents to Word formats with precision</span>.
              {' '}I am a{' '}
              <span className="font-semibold !text-[#D9886A]">highly dedicated and hardworking</span>{' '}
              junior professional who stays committed to every project until{' '}
              <span className="font-semibold !text-[#D9886A]">absolute completion</span>, offering{' '}
              <span className="font-semibold !text-[#D9886A]">24/7 availability</span> for seamless
              communication, updates, and support.
            </motion.p>
          </div>
        </TiltCard>

        <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {NARRATIVE_STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="flex items-center gap-3 rounded-xl glass border border-violet-500/10 p-4 hover:border-violet-500/30 transition-all duration-300 group"
            >
              <div className={`h-10 w-10 rounded-lg flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300 ${stat.color === 'violet' ? 'bg-violet-500/10 border border-violet-500/20' : 'bg-coral-400/10 border border-coral-400/20'}`}>
                <stat.icon className={`h-4 w-4 ${stat.color === 'violet' ? 'text-violet-400' : 'text-coral-400'}`} />
              </div>
              <span className="text-sm font-medium text-slate-300">{stat.label}</span>
            </motion.div>
          ))}
        </div>

        <div className="mt-6 grid lg:grid-cols-5 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3 rounded-2xl glass border border-violet-500/10 p-6 sm:p-8"
          >
            <h3 className="font-display text-lg font-bold text-white-primary mb-6 flex items-center gap-2">
              <span className="h-px w-6 bg-violet-500" />
              Core Personal Traits
            </h3>

            <div className="grid sm:grid-cols-2 gap-3">
              {TRAITS.map((trait) => (
                <div key={trait.label} className="flex items-center gap-3 rounded-xl glass border border-violet-500/10 p-4 hover:border-violet-500/30 transition-all duration-300 group">
                  <div className="h-9 w-9 rounded-lg bg-violet-500/10 border border-violet-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shrink-0">
                    <trait.icon className="h-4 w-4 text-violet-400" />
                  </div>
                  <span className="text-sm font-medium text-slate-300">{trait.label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <TiltCard glow className="lg:col-span-2 rounded-2xl bg-gradient-to-br from-violet-500 to-coral-500 p-6 sm:p-8 flex flex-col justify-center overflow-hidden relative border-2 border-violet-500/20">
            <div className="absolute inset-0 dot-overlay opacity-20 pointer-events-none" />
            <div className="absolute -top-8 -right-8 h-32 w-32 rounded-full bg-white/15 blur-2xl pointer-events-none" />

            <div className="relative">
              <h3 className="font-display text-xl sm:text-2xl font-extrabold text-white leading-tight">
                Have a project or opportunity in mind?
              </h3>

              <p className="mt-2 text-white/80 text-sm font-medium">
                Let's work together and turn your ideas into reality.
              </p>

              <button
                onClick={() => scrollTo('#contact')}
                className="mt-6 inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-obsidian-900 text-violet-400 font-bold text-sm transition-all duration-300 hover:scale-105 hover:shadow-xl group/btn magnetic-btn"
                style={{ backgroundColor: 'var(--bg-deep)', color: 'var(--accent-primary)' }}
              >
                Let's Work Together
                <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
          </TiltCard>
        </div>
      </div>
    </section>
  );
}
