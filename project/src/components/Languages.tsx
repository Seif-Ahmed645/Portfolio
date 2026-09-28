import { motion } from 'framer-motion';
import { Globe } from 'lucide-react';
import { SectionHeading } from '@/components/SectionHeading';

const LANGUAGES = [
  { name: 'Arabic', level: 'Native', desc: 'Mother tongue' },
  { name: 'English', level: 'B1', desc: 'Intermediate professional proficiency' },
  { name: 'German', level: 'A1', desc: 'Goethe-Institut certified' },
];

export function Languages() {
  return (
    <section id="languages" className="section-pad relative overflow-hidden">
      <div className="absolute inset-0 dot-overlay opacity-30 pointer-events-none" />
      <div className="ambient-orb w-72 h-72 bg-blue-500 top-1/4 right-1/3 animate-orb-float" />

      <div className="container-mw relative z-10">
        <SectionHeading
          eyebrow="Spoken Languages"
          title={<>Language <span className="text-gradient-vc neon-text-glow">Proficiency</span></>}
          subtitle="Multilingual communication capabilities to collaborate in diverse, global environments."
        />

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {LANGUAGES.map((lang, i) => (
            <motion.div
              key={lang.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-2xl glass-strong border border-blue-500/10 p-6 sm:p-8 flex flex-col justify-between hover:border-blue-500/30 transition-all duration-300"
            >
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-11 w-11 rounded-xl bg-blue-400/10 border border-blue-400/20 flex items-center justify-center">
                    <Globe className="h-5 w-5 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-bold text-white-primary">{lang.name}</h3>
                    <span className="inline-block px-2.5 py-0.5 rounded-full text-xs font-mono bg-blue-500/10 text-blue-400 border border-blue-500/20 mt-1">
                      {lang.level}
                    </span>
                  </div>
                </div>
                <p className="text-sm text-slate-400 mt-2">{lang.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}