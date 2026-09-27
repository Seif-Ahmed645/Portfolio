import { type ReactNode } from 'react';
import { motion } from 'framer-motion';

type SectionHeadingProps = {
  eyebrow: string;
  title: ReactNode;
  subtitle?: string;
  center?: boolean;
};

export function SectionHeading({ eyebrow, title, subtitle, center = true }: SectionHeadingProps) {
  return (
    <div className={`${center ? 'text-center mx-auto' : 'text-left'} max-w-3xl`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="inline-flex items-center gap-2.5 mb-5"
      >
        <span className="h-px w-10 bg-gradient-to-r from-transparent to-violet-500/60" />
        <span className="text-violet-400 font-mono text-xs tracking-[0.2em] uppercase font-semibold neon-text-glow">
          {eyebrow}
        </span>
        <span className="h-px w-10 bg-gradient-to-l from-transparent to-violet-500/60" />
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white-primary tracking-tight leading-tight"
      >
        {title}
      </motion.h2>

      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-5 text-base sm:text-lg text-slate-400 leading-relaxed max-w-2xl mx-auto"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
