import { motion } from 'framer-motion';
import { Briefcase, Calendar, Award, Database, Cpu, MapPin } from 'lucide-react';
import { SectionHeading } from '@/components/SectionHeading';
import { TiltCard } from '@/components/TiltCard';

const EXPERIENCES = [
  {
    role: 'Data Science & AI Intern',
    org: 'Digital Egypt Pioneers Initiative (DEPI) – MCIT',
    period: '07/2026 – Ongoing',
    type: 'Internship / Scholarship',
    description: 'Program Overview: Fully-funded national scholarship by MCIT targeting tech talents in AI and Data Science. Technical Track: Mastering Data Science, Python, SQL, Data Analysis, and Machine Learning algorithms through practical tasks. Non-Technical Track: Training in Freelancing, Career Coaching, Soft Skills, CV Writing, and LinkedIn Optimization. English Track: Enhancing professional English communication and technical reporting skills.',
    skills: ['Python', 'SQL', 'Data Analysis', 'Machine Learning'],
    icon: Database,
    accent: 'from-violet-400 to-violet-600',
    ongoing: true,
  },
  {
    role: 'Programming Fundamentals Trainee',
    org: 'Route Training Center',
    period: '11/2025 – 03/2026',
    type: 'Training / Certification',
    description: 'Mastered core programming concepts including C++, Java, Object-Oriented Programming, Data Structures, and Database fundamentals. Completed with a verified certificate of achievement.',
    skills: ['C++', 'Java', 'OOP', 'Data Structures', 'Databases'],
    icon: Cpu,
    accent: 'from-coral-400 to-coral-500',
    ongoing: false,
  },
];

export function Experience() {
  return (
    <section id="experience" className="section-pad relative overflow-hidden">
      <div className="ambient-orb w-72 h-72 bg-violet-500 top-1/4 -right-20 animate-orb-float" />
      <div className="ambient-orb w-56 h-56 bg-coral-400 bottom-1/3 -left-16 animate-orb-float" style={{ animationDelay: '4s' }} />

      <div className="container-mw relative z-10">
        <SectionHeading
          eyebrow="Experience"
          title={<>My <span className="text-gradient-vc neon-text-glow">Journey So Far</span></>}
          subtitle="Practical training, scholarships, and certifications building a strong foundation in data science and software engineering."
        />

        <div className="mt-16 space-y-6">
          {EXPERIENCES.map((exp) => (
            <TiltCard key={exp.role} className="rounded-2xl glass-strong border border-violet-500/10 p-6 sm:p-8 group relative overflow-hidden">
              <div className={`absolute top-0 left-0 h-full w-1 bg-gradient-to-b ${exp.accent}`} />
              <div className="grid lg:grid-cols-12 gap-6 lg:gap-8">
                <div className="lg:col-span-3 flex lg:flex-col items-center lg:items-start gap-4">
                  <div className={`h-14 w-14 rounded-2xl bg-gradient-to-br ${exp.accent} flex items-center justify-center shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-400`}>
                    <exp.icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="lg:mt-2">
                    <div className="flex items-center gap-1.5 text-xs text-slate-500 font-mono">
                      <Calendar className="h-3 w-3" />
                      {exp.period}
                    </div>
                    <div className="mt-1.5 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-xs font-semibold text-violet-400">
                      {exp.ongoing ? (
                        <span className="flex items-center gap-1.5">
                          <span className="h-1.5 w-1.5 rounded-full bg-green-400 animate-pulse" />
                          Ongoing
                        </span>
                      ) : (
                        <span className="flex items-center gap-1.5">
                          <Award className="h-3 w-3" />
                          Completed
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-9">
                  <div className="flex items-center gap-2 text-xs text-slate-500 mb-2 font-mono">
                    <Briefcase className="h-3.5 w-3.5" />
                    {exp.type}
                  </div>
                  <h3 className="font-display text-lg sm:text-xl font-bold text-white-primary leading-tight">{exp.role}</h3>
                  <p className="mt-1 text-sm font-semibold text-violet-400">{exp.org}</p>
                  <p className="mt-4 text-sm text-slate-400 leading-relaxed">{exp.description}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {exp.skills.map((skill) => (
                      <span key={skill} className="px-2.5 py-1 rounded-lg glass border border-violet-500/10 text-xs font-medium text-slate-400">{skill}</span>
                    ))}
                  </div>
                </div>
              </div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
}
