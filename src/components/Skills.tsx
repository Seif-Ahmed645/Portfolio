
import { motion } from 'framer-motion';
import { Code2, Users, Globe } from 'lucide-react';
import { SectionHeading } from '@/components/SectionHeading';

const ACCENT = '#D98A6D';

const TECH_SKILLS = [
  { name: 'Python', level: 'Intermediate', value: 60 },
  { name: 'SQL', level: 'Intermediate', value: 60 },
  { name: 'C++', level: 'Advanced', value: 85 },
  { name: 'Java', level: 'Beginner', value: 30 },
  { name: 'C', level: 'Advanced', value: 85 },
  { name: 'HTML', level: 'Advanced', value: 85 },
  { name: 'CSS', level: 'Advanced', value: 85 },
  { name: 'JavaScript', level: 'Beginner', value: 30 },
  { name: 'Git', level: 'Beginner', value: 30 },
  { name: 'GitHub', level: 'Intermediate', value: 60 },
  { name: 'OOP', level: 'Advanced', value: 85 },
  { name: 'Data Structures', level: 'Intermediate', value: 60 },
  { name: 'Databases', level: 'Intermediate', value: 60 },
];

const SOFT_SKILLS = [
  'Communication',
  'Teamwork',
  'Problem Solving',
  'Critical Thinking',
  'Analytical Thinking',
  'Time Management',
  'Adaptability',
  'Attention to Detail',
  'Presentation Skills',
  'Continuous Learning',
];

const LANGUAGES = [
  { name: 'Arabic', level: 'Native' },
  { name: 'English', level: 'B1' },
  { name: 'German', level: 'A1' },
];

function TechnicalSkillCard({
  name,
  level,
  value,
  index,
}: {
  name: string;
  level: string;
  value: number;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: (index % 8) * 0.05 }}
      className="group min-w-0 rounded-lg glass border border-white/10 p-3 hover:border-[#D98A6D]/40 hover:-translate-y-0.5 transition-all duration-300"
    >
      <div className="flex items-center justify-between gap-2 mb-3">
        <span className="text-sm font-semibold text-slate-300 group-hover:text-white transition-colors truncate">
          {name}
        </span>

        <span
          className="text-[10px] sm:text-xs font-semibold shrink-0 rounded-full px-2 py-0.5"
          style={{
            color: ACCENT,
            backgroundColor: `${ACCENT}18`,
            border: `1px solid ${ACCENT}25`,
          }}
        >
          {level}
        </span>
      </div>

      <div className="h-1 w-full rounded-full bg-white/10 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${value}%` }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            delay: (index % 8) * 0.05 + 0.1,
            ease: 'easeOut',
          }}
          className="h-full rounded-full"
          style={{ backgroundColor: ACCENT }}
        />
      </div>
    </motion.div>
  );
}

function SkillPill({
  name,
  index,
}: {
  name: string;
  index: number;
}) {
  return (
    <motion.span
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: (index % 10) * 0.025 }}
      className="inline-flex items-center gap-1.5 rounded-lg glass border border-white/10 px-2.5 py-1.5 text-xs font-medium text-slate-300 hover:text-white hover:border-[#D98A6D]/40 hover:-translate-y-0.5 transition-all duration-300"
    >
      <span
        className="h-1.5 w-1.5 rounded-full shrink-0"
        style={{ backgroundColor: ACCENT }}
      />
      {name}
    </motion.span>
  );
}

export function Skills() {
  return (
    <section id="skills" className="section-pad relative overflow-hidden">
      <div className="absolute inset-0 dot-overlay opacity-30 pointer-events-none" />

      <div className="ambient-orb w-80 h-80 bg-violet-500 top-1/3 right-1/4 animate-orb-float" />

      <div
        className="ambient-orb w-72 h-72 bg-coral-400 bottom-1/4 left-1/4 animate-orb-float"
        style={{ animationDelay: '3s' }}
      />

      <div className="container-mw relative z-10">
        <SectionHeading
          eyebrow="Skills & Expertise"
          title={
            <>
              Skills &{' '}
              <span className="text-gradient-vc neon-text-glow">
                Tech Matrix
              </span>
            </>
          }
          subtitle="A comprehensive toolkit spanning programming, data, and professional services — continuously growing."
        />

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2 min-w-0 rounded-xl glass-strong border border-white/10 p-4 sm:p-5"
          >
            <div className="flex items-center gap-3 mb-5">
              <div
                className="h-9 w-9 rounded-lg flex items-center justify-center shrink-0 border"
                style={{
                  backgroundColor: `${ACCENT}18`,
                  borderColor: `${ACCENT}30`,
                }}
              >
                <Code2 className="h-4 w-4" style={{ color: ACCENT }} />
              </div>

              <div>
                <h3 className="font-display text-lg font-bold text-white-primary">
                  Technical Stack
                </h3>
                <p className="text-xs text-slate-500 font-mono">
                  Programming, data & tools
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-2.5">
              {TECH_SKILLS.map((skill, index) => (
                <TechnicalSkillCard
                  key={skill.name}
                  name={skill.name}
                  level={skill.level}
                  value={skill.value}
                  index={index}
                />
              ))}
            </div>

            <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-white/10 pt-3">
              <span className="text-[11px] text-slate-500">Skill levels:</span>

              {['Beginner', 'Intermediate', 'Advanced'].map((level) => (
                <div key={level} className="flex items-center gap-1.5">
                  <span
                    className="h-1.5 w-1.5 rounded-full"
                    style={{ backgroundColor: ACCENT }}
                  />
                  <span className="text-[11px] text-slate-400">{level}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="flex flex-col gap-4">
            <motion.div
              initial={{ opacity: 0, x: 15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.1 }}
              className="rounded-xl glass-strong border border-white/10 p-4"
            >
              <div className="flex items-center gap-2.5 mb-4">
                <div
                  className="h-9 w-9 rounded-lg flex items-center justify-center shrink-0 border"
                  style={{
                    backgroundColor: `${ACCENT}18`,
                    borderColor: `${ACCENT}30`,
                  }}
                >
                  <Users className="h-4 w-4" style={{ color: ACCENT }} />
                </div>

                <div>
                  <h3 className="font-display text-base font-bold text-white-primary">
                    Soft Skills
                  </h3>
                  <p className="text-[11px] text-slate-500">
                    Personal strengths
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-1.5">
                {SOFT_SKILLS.map((skill, index) => (
                  <SkillPill key={skill} name={skill} index={index} />
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.2 }}
              className="rounded-xl glass-strong border border-white/10 p-4"
            >
              <div className="flex items-center gap-2.5 mb-4">
                <div
                  className="h-9 w-9 rounded-lg flex items-center justify-center shrink-0 border"
                  style={{
                    backgroundColor: `${ACCENT}18`,
                    borderColor: `${ACCENT}30`,
                  }}
                >
                  <Globe className="h-4 w-4" style={{ color: ACCENT }} />
                </div>

                <div>
                  <h3 className="font-display text-base font-bold text-white-primary">
                    Languages
                  </h3>
                  <p className="text-[11px] text-slate-500">
                    Spoken & written
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-1.5">
                {LANGUAGES.map((language, index) => (
                  <SkillPill
                    key={language.name}
                    name={`${language.name} (${language.level})`}
                    index={index}
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;