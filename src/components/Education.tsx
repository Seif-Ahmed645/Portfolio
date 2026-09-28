
import { motion } from 'framer-motion';
import {
  GraduationCap,
  Calendar,
  Award,
  MapPin,
  BookOpen,
  Database,
  BrainCircuit,
  BriefcaseBusiness,
  Flag,
  Sparkles,
} from 'lucide-react';
import { SectionHeading } from '@/components/SectionHeading';
import { TiltCard } from '@/components/TiltCard';

const CURRENT_YEAR = '2026';

const TIMELINE = [
  {
    year: '2025',
    title: 'University & Route Training',
    event:
      'Started my Computer Science journey at university and completed Programming Fundamentals training at Route Training Center.',
    skills: ['Computer Science', 'Programming Basics', 'C++'],
    icon: GraduationCap,
    status: 'Completed',
  },
  {
    year: '2026',
    title: 'Data Science & AI',
    event:
      'Joined the DEPI Data Science scholarship and pursued an IBM course to strengthen my technical and practical skills.',
    skills: ['DEPI', 'IBM', 'Python', 'SQL'],
    icon: Database,
    status: 'Currently Learning',
  },
  {
    year: '2027',
    title: 'Specialization & Projects',
    event:
      'Focus on my university specialization and build practical projects across the Data Science track.',
    skills: ['Data Science', 'Analysis', 'Projects'],
    icon: BrainCircuit,
    status: 'Upcoming',
  },
  {
    year: '2028',
    title: 'Internships & Advanced AI',
    event:
      'Seek internship opportunities and develop deeper skills in Machine Learning and Deep Learning.',
    skills: ['Internships', 'ML', 'Deep Learning'],
    icon: BriefcaseBusiness,
    status: 'Upcoming',
  },
  {
    year: '2029',
    title: 'Graduation & Career',
    event:
      'Complete my university degree, finalize my portfolio, and prepare for professional opportunities in Data Science and AI.',
    skills: ['Graduation', 'Portfolio', 'Career'],
    icon: Flag,
    status: 'Future Goal',
  },
];

export function Education() {
  return (
    <section id="education" className="section-pad relative overflow-hidden">
      <div className="ambient-orb w-72 h-72 bg-violet-500 bottom-1/4 -left-20 animate-orb-float" />

      <div
        className="ambient-orb w-56 h-56 bg-coral-400 top-1/3 right-1/4 animate-orb-float"
        style={{ animationDelay: '3s' }}
      />

      <div className="container-mw relative z-10">
        <SectionHeading
          eyebrow="Education"
          title={
            <>
              Academic{' '}
              <span className="text-gradient-vc neon-text-glow">
                Journey
              </span>
            </>
          }
          subtitle="My academic journey and roadmap toward specialization in Data Science, Machine Learning, and Artificial Intelligence."
        />

        <div className="mt-12 space-y-8 sm:mt-16">
          <TiltCard className="group relative h-fit w-full overflow-hidden rounded-2xl border border-violet-500/10 p-6 glass-strong sm:p-8">
            <div className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-violet-500/10 blur-2xl transition-all duration-500 group-hover:bg-violet-500/15" />

            <div className="relative flex items-start gap-4 sm:gap-5">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-400 to-violet-600 shadow-lg transition-transform duration-300 group-hover:scale-105 sm:h-16 sm:w-16">
                <GraduationCap className="h-7 w-7 text-white sm:h-8 sm:w-8" />
              </div>

              <div className="min-w-0 flex-1">
                <h3 className="font-display text-xl font-extrabold leading-tight text-white-primary sm:text-2xl">
                  Faculty of Computers & Artificial Intelligence
                </h3>

                <p className="mt-1.5 text-base font-semibold text-violet-400">
                  Capital University
                </p>

                <p className="text-sm text-slate-500">
                  formerly Helwan University
                </p>
              </div>
            </div>

            <div className="mt-7 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
              {[
                {
                  icon: Calendar,
                  label: 'Duration',
                  value: '2025 — 2029',
                },
                {
                  icon: Award,
                  label: 'Cumulative GPA',
                  value: '3.25 — Very Good',
                },
                {
                  icon: MapPin,
                  label: 'Location',
                  value: 'Cairo, Egypt',
                },
                {
                  icon: BookOpen,
                  label: 'Expected Graduation',
                  value: '2029',
                },
              ].map((info) => (
                <div
                  key={info.label}
                  className="flex min-w-0 items-center gap-3 rounded-xl border border-violet-500/10 p-4 glass transition-all duration-300 hover:border-violet-500/30"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-violet-500/20 bg-violet-500/10">
                    <info.icon className="h-4 w-4 text-violet-400" />
                  </div>

                  <div className="min-w-0">
                    <div className="text-xs text-slate-500">
                      {info.label}
                    </div>
                    <div className="break-words text-sm font-semibold text-white-primary">
                      {info.value}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 max-w-2xl">
              <div className="mb-2 flex items-center justify-between gap-3 text-xs">
                <span className="font-medium text-slate-500">
                  Academic Performance
                </span>
                <span className="shrink-0 font-bold text-violet-400">
                  3.25 / 4.0
                </span>
              </div>

              <div className="h-2.5 overflow-hidden rounded-full bg-obsidian-700/50">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: '81.25%' }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, ease: 'easeOut' }}
                  className="neon-glow h-full rounded-full bg-gradient-to-r from-violet-400 to-coral-400"
                />
              </div>
            </div>
          </TiltCard>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative w-full overflow-hidden rounded-2xl border border-violet-500/10 p-5 glass sm:p-8"
          >
            <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-[#D9886A]/[0.06] blur-3xl" />

            <div className="relative mb-8">
              <div className="mb-3 flex items-center gap-2">
                <span className="h-px w-7 bg-[#D9886A]" />
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#D9886A]">
                  My Roadmap
                </span>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-3">
                <h3 className="font-display text-xl font-bold text-white-primary sm:text-2xl">
                  Academic Timeline
                </h3>

                <div className="flex items-center gap-2 text-xs text-slate-400">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#D9886A] opacity-70" />
                    <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#D9886A]" />
                  </span>
                  Current Stage
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute left-0 right-0 top-5 hidden h-px bg-gradient-to-r from-white/10 via-[#D9886A]/40 to-white/10 xl:block" />

              <div className="grid items-stretch gap-4 sm:grid-cols-2 xl:grid-cols-5">
                {TIMELINE.map((item, index) => {
                  const isCurrent = item.year === CURRENT_YEAR;
                  const Icon = item.icon;

                  return (
                    <motion.div
                      key={item.year}
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.15 }}
                      transition={{
                        duration: 0.45,
                        delay: index * 0.08,
                      }}
                      className="relative flex min-w-0 flex-col"
                    >
                      <div className="relative z-10 mb-4 flex h-10 items-center">
                        <div
                          className={`relative flex h-10 w-10 items-center justify-center rounded-full border transition-all duration-300 ${
                            isCurrent
                              ? 'border-[#D9886A]/70 bg-[#D9886A]/20 shadow-[0_0_14px_#D9886A66,0_0_30px_#D9886A22]'
                              : 'border-white/10 bg-[#202b2d]'
                          }`}
                        >
                          {isCurrent && (
                            <span className="absolute inset-0 animate-ping rounded-full border border-[#D9886A]/50" />
                          )}

                          <Icon
                            className={`relative z-10 h-4 w-4 ${
                              isCurrent
                                ? 'text-[#D9886A]'
                                : 'text-slate-400'
                            }`}
                          />

                          {isCurrent && (
                            <span className="absolute -right-0.5 -top-0.5 h-3 w-3 animate-pulse rounded-full border-2 border-[#111a1a] bg-[#D9886A] shadow-[0_0_10px_#D9886A]" />
                          )}
                        </div>
                      </div>

                      <div
                        className={`flex h-full flex-col rounded-xl border p-4 transition-all duration-300 ${
                          isCurrent
                            ? 'border-[#D9886A]/35 bg-[#D9886A]/[0.06] shadow-[0_0_24px_#D9886A12]'
                            : 'border-white/[0.07] bg-white/[0.02] hover:border-white/15'
                        }`}
                      >
                        <div className="mb-3 flex flex-wrap items-center gap-2">
                          <span
                            className={`font-mono text-lg font-bold ${
                              isCurrent
                                ? 'text-[#D9886A]'
                                : 'text-white-primary'
                            }`}
                          >
                            {item.year}
                          </span>

                          {isCurrent && (
                            <span className="rounded-full border border-[#D9886A]/30 bg-[#D9886A]/10 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-[#D9886A]">
                              Now
                            </span>
                          )}
                        </div>

                        <h4
                          className={`text-sm font-bold leading-5 ${
                            isCurrent
                              ? 'text-white'
                              : 'text-slate-200'
                          }`}
                        >
                          {item.title}
                        </h4>

                        <p className="mt-3 flex-1 text-xs leading-5 text-slate-400">
                          {item.event}
                        </p>

                        <div className="mt-4 flex flex-wrap gap-1.5">
                          {item.skills.map((skill) => (
                            <span
                              key={skill}
                              className={`rounded-md border px-2 py-1 text-[10px] ${
                                isCurrent
                                  ? 'border-[#D9886A]/20 bg-[#D9886A]/[0.06] text-[#DCA08A]'
                                  : 'border-white/[0.07] bg-white/[0.03] text-slate-500'
                              }`}
                            >
                              {skill}
                            </span>
                          ))}
                        </div>

                        {isCurrent && (
                          <div className="mt-4 flex items-center gap-1.5 border-t border-[#D9886A]/15 pt-3 text-[10px] font-medium text-[#D9886A]">
                            <Sparkles className="h-3.5 w-3.5 shrink-0" />
                            Currently learning
                          </div>
                        )}

                        {!isCurrent && (
                          <div className="mt-4 border-t border-white/[0.06] pt-3 text-[10px] text-slate-500">
                            {item.status}
                          </div>
                        )}
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Education;