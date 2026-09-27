import { motion } from 'framer-motion';
import { GraduationCap, Calendar, Award, MapPin, BookOpen } from 'lucide-react';
import { SectionHeading } from '@/components/SectionHeading';
import { TiltCard } from '@/components/TiltCard';

const TIMELINE = [
  { year: '2025', event: 'Started CS & AI degree', highlight: false },
  { year: '2026', event: 'DEPI Data Science Scholarship', highlight: true },
  { year: '2027', event: 'Advanced ML & AI coursework', highlight: false },
  { year: '2028', event: 'Specialization & projects', highlight: false },
  { year: '2029', event: 'Expected graduation', highlight: true },
];

export function Education() {
  return (
    <section id="education" className="section-pad relative overflow-hidden">
      <div className="ambient-orb w-72 h-72 bg-violet-500 bottom-1/4 -left-20 animate-orb-float" />
      <div className="ambient-orb w-56 h-56 bg-coral-400 top-1/3 right-1/4 animate-orb-float" style={{ animationDelay: '3s' }} />

      <div className="container-mw relative z-10">
        <SectionHeading
          eyebrow="Education"
          title={<>Academic <span className="text-gradient-vc neon-text-glow">Journey</span></>}
          subtitle="Pursuing excellence in Computer Science and Artificial Intelligence at one of Egypt's leading tech faculties."
        />

        <div className="mt-16 grid lg:grid-cols-5 gap-6">
          <TiltCard className="lg:col-span-3 rounded-2xl glass-strong border border-violet-500/10 p-6 sm:p-8 group relative overflow-hidden">
            <div className="absolute -top-12 -right-12 h-40 w-40 rounded-full bg-violet-500/8 blur-2xl pointer-events-none group-hover:bg-violet-500/12 transition-all duration-500" />

            <div className="flex items-start gap-5 relative">
              <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-violet-400 to-violet-600 flex items-center justify-center shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-400">
                <GraduationCap className="h-8 w-8 text-white" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-display text-xl sm:text-2xl font-extrabold text-white-primary leading-tight">
                  Faculty of Computers & Artificial Intelligence
                </h3>
                <p className="mt-1.5 text-base text-violet-400 font-semibold">Capital University</p>
                <p className="text-sm text-slate-500">formerly Helwan University</p>
              </div>
            </div>

            <div className="mt-8 grid sm:grid-cols-2 gap-4">
              {[
                { icon: Calendar, label: 'Duration', value: '2025 — 2029' },
                { icon: Award, label: 'Cumulative GPA', value: '3.25 — Very Good' },
                { icon: MapPin, label: 'Location', value: 'Cairo, Egypt' },
                { icon: BookOpen, label: 'Expected Graduation', value: '2029' },
              ].map((info) => (
                <div key={info.label} className="rounded-xl glass border border-violet-500/10 p-4 flex items-center gap-3 hover:border-violet-500/30 transition-all duration-300">
                  <div className="h-10 w-10 rounded-lg bg-violet-500/10 border border-violet-500/20 flex items-center justify-center shrink-0">
                    <info.icon className="h-4 w-4 text-violet-400" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500">{info.label}</div>
                    <div className="text-sm font-semibold text-white-primary">{info.value}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6">
              <div className="flex items-center justify-between text-xs mb-2">
                <span className="text-slate-500 font-medium">Academic Performance</span>
                <span className="text-violet-400 font-bold">3.25 / 4.0</span>
              </div>
              <div className="h-2.5 rounded-full bg-obsidian-700/50 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: '81.25%' }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, ease: 'easeOut' }}
                  className="h-full rounded-full bg-gradient-to-r from-violet-400 to-coral-400 neon-glow"
                />
              </div>
            </div>
          </TiltCard>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 rounded-2xl glass border border-violet-500/10 p-6 sm:p-8"
          >
            <h3 className="font-display text-lg font-bold text-white-primary mb-6 flex items-center gap-2">
              <span className="h-px w-6 bg-violet-500" />
              Academic Timeline
            </h3>
            <div className="relative">
              <div className="absolute left-[15px] top-2 bottom-2 w-px bg-gradient-to-b from-violet-500/40 via-violet-500/20 to-transparent" />
              <ul className="space-y-5">
                {TIMELINE.map((item) => (
                  <li key={item.year} className="relative flex gap-4">
                    <div className={`h-8 w-8 rounded-full flex items-center justify-center shrink-0 z-10 ${item.highlight ? 'bg-violet-500 ring-4 ring-violet-500/15 neon-glow' : 'bg-obsidian-800 border-2 border-violet-500/20'}`}>
                      {item.highlight && <div className="h-2 w-2 rounded-full bg-white" />}
                    </div>
                    <div className="pt-1">
                      <div className="text-sm font-bold text-violet-400 font-mono">{item.year}</div>
                      <div className="text-sm text-slate-400 mt-0.5">{item.event}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
