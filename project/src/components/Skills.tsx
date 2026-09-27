import { motion } from 'framer-motion';
import { Code2, Users } from 'lucide-react';
import { SectionHeading } from '@/components/SectionHeading';

const TECH_SKILLS = ['Python', 'SQL', 'C++', 'Java', 'C', 'HTML', 'CSS', 'JavaScript', 'Git', 'GitHub', 'OOP', 'Data Structures', 'Databases'];
const SOFT_SKILLS = ['Teamwork', 'Problem Solving', 'Time Management', 'Communication', 'CV Writing', 'LinkedIn Optimization', 'Arabic (Native)', 'English (B1)', 'German (A1)'];

function SkillPill({ name, index, isCoral }: { name: string; index: number; isCoral?: boolean }) {
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="group relative inline-flex items-center gap-2 px-4 py-2.5 rounded-xl glass border border-violet-500/10 text-sm font-medium text-slate-400 hover:scale-105 hover:shadow-lg transition-all duration-300 cursor-default"
      style={isCoral ? { borderColor: 'rgba(251,146,60,0.1)' } : undefined}
    >
      <span className={`h-1.5 w-1.5 rounded-full ${isCoral ? 'bg-coral-400/50 group-hover:bg-coral-400' : 'bg-violet-500/40 group-hover:bg-violet-400'} transition-colors duration-300`} />
      <span className={`group-hover:${isCoral ? 'text-coral-400' : 'text-violet-400'} transition-colors duration-300`}>{name}</span>
    </motion.span>
  );
}

export function Skills() {
  return (
    <section id="skills" className="section-pad relative overflow-hidden">
      <div className="absolute inset-0 dot-overlay opacity-30 pointer-events-none" />
      <div className="ambient-orb w-80 h-80 bg-violet-500 top-1/3 right-1/4 animate-orb-float" />
      <div className="ambient-orb w-72 h-72 bg-coral-400 bottom-1/4 left-1/4 animate-orb-float" style={{ animationDelay: '3s' }} />

      <div className="container-mw relative z-10">
        <SectionHeading
          eyebrow="Skills & Expertise"
          title={<>Skills & <span className="text-gradient-vc neon-text-glow">Tech Matrix</span></>}
          subtitle="A comprehensive toolkit spanning programming, data, and professional services — continuously growing."
        />

        <div className="mt-16 grid lg:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl glass-strong border border-violet-500/10 p-6 sm:p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="h-11 w-11 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center">
                <Code2 className="h-5 w-5 text-violet-400" />
              </div>
              <div>
                <h3 className="font-display text-lg font-bold text-white-primary">Technical Stack</h3>
                <p className="text-xs text-slate-500 font-mono">// programming, data & tools</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2.5">
              {TECH_SKILLS.map((skill, i) => <SkillPill key={skill} name={skill} index={i} />)}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-2xl glass-strong border border-violet-500/10 p-6 sm:p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="h-11 w-11 rounded-xl bg-coral-400/10 border border-coral-400/20 flex items-center justify-center">
                <Users className="h-5 w-5 text-coral-400" />
              </div>
              <div>
                <h3 className="font-display text-lg font-bold text-white-primary">Soft & Professional Capabilities</h3>
                <p className="text-xs text-slate-500 font-mono">// communication & professional services</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2.5">
              {SOFT_SKILLS.map((skill, i) => <SkillPill key={skill} name={skill} index={i} isCoral />)}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
