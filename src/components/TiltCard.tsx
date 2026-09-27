import { type ReactNode } from 'react';
import { motion } from 'framer-motion';
import { useTilt } from '@/hooks/useTilt';

type TiltCardProps = {
  children: ReactNode;
  className?: string;
  glow?: boolean;
};

export function TiltCard({ children, className = '', glow = false }: TiltCardProps) {
  const { ref, handleMouseMove, handleMouseLeave } = useTilt<HTMLDivElement>();

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`card-tilt ${glow ? 'neon-glow' : ''} ${className}`}
    >
      {children}
    </motion.div>
  );
}
