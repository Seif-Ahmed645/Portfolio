
import {
  Clock,
  MessageCircle,
  Zap,
  Shield,
  Brain,
  Database,
  TrendingUp,
  Target,
} from 'lucide-react';
import { SectionHeading } from '@/components/SectionHeading';
import { TiltCard } from '@/components/TiltCard';

const PILLARS = [
  {
    icon: Clock,
    title: '100% On-Time Delivery',
    description:
      'Zero deadline compromise. Every milestone is met with precision and punctuality — no exceptions.',
    accent: 'from-violet-400 to-violet-600',
    glow: 'rgba(139,92,246,0.25)',
    borderGlow: 'rgba(139,92,246,0.15)',
  },
  {
    icon: Zap,
    title: '24/7 Availability',
    description:
      'Real-time updates & continuous support. Your project gets attention whenever it needs it, day or night.',
    accent: 'from-coral-400 to-coral-500',
    glow: 'rgba(251,146,60,0.25)',
    borderGlow: 'rgba(251,146,60,0.15)',
  },
  {
    icon: MessageCircle,
    title: 'Effective Communication',
    description:
      'Transparent reporting & active listening at every step. You always know exactly where things stand.',
    accent: 'from-violet-400 to-violet-600',
    glow: 'rgba(139,92,246,0.25)',
    borderGlow: 'rgba(139,92,246,0.15)',
  },
  {
    icon: Shield,
    title: 'Hard-Working Ethic',
    description:
      'Relentless commitment to top quality. I go the extra mile to ensure every deliverable exceeds expectations.',
    accent: 'from-coral-400 to-coral-500',
    glow: 'rgba(251,146,60,0.25)',
    borderGlow: 'rgba(251,146,60,0.15)',
  },
  {
    icon: Brain,
    title: 'Analytical Thinking',
    description:
      'Breaking complex problems into manageable steps and using logical reasoning to find practical solutions.',
    accent: 'from-violet-400 to-violet-600',
    glow: 'rgba(139,92,246,0.25)',
    borderGlow: 'rgba(139,92,246,0.15)',
  },
  {
    icon: Database,
    title: 'Data-Driven Mindset',
    description:
      'Exploring data, identifying patterns, and turning information into meaningful insights that support decisions.',
    accent: 'from-coral-400 to-coral-500',
    glow: 'rgba(251,146,60,0.25)',
    borderGlow: 'rgba(251,146,60,0.15)',
  },
  {
    icon: TrendingUp,
    title: 'Continuous Learning',
    description:
      'Constantly developing my skills and exploring new tools, technologies, and approaches in data science.',
    accent: 'from-violet-400 to-violet-600',
    glow: 'rgba(139,92,246,0.25)',
    borderGlow: 'rgba(139,92,246,0.15)',
  },
  {
    icon: Target,
    title: 'Attention to Detail',
    description:
      'Carefully reviewing data, code, and results to improve accuracy, consistency, and overall quality.',
    accent: 'from-coral-400 to-coral-500',
    glow: 'rgba(251,146,60,0.25)',
    borderGlow: 'rgba(251,146,60,0.15)',
  },
];

export function USP() {
  return (
    <section id="usp" className="section-pad relative overflow-hidden">
      <div className="absolute inset-0 dot-overlay opacity-30 pointer-events-none" />

      <div className="ambient-orb w-80 h-80 bg-violet-500 top-1/4 left-1/4 animate-orb-float" />

      <div
        className="ambient-orb w-72 h-72 bg-coral-400 bottom-1/4 right-1/4 animate-orb-float"
        style={{ animationDelay: '4s' }}
      />

      <div className="container-mw relative z-10">
        <SectionHeading
          eyebrow="Why Work With Me"
          title={
            <>
              My{' '}
              <span className="text-gradient-vc neon-text-glow">
                Value Proposition
              </span>
            </>
          }
          subtitle="The principles, mindset, and work ethic I bring to every project and collaboration."
        />

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PILLARS.map((pillar, index) => (
            <TiltCard
              key={pillar.title}
              className="group relative rounded-2xl glass-strong border border-violet-500/10 p-6 overflow-hidden"
            >
              <span className="absolute -top-2 -right-2 font-display text-7xl font-extrabold text-violet-500/5 select-none pointer-events-none">
                {String(index + 1).padStart(2, '0')}
              </span>

              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  boxShadow: `inset 0 0 40px ${pillar.glow}`,
                }}
              />

              <div className="relative">
                <div
                  className={`h-14 w-14 rounded-2xl bg-gradient-to-br ${pillar.accent} flex items-center justify-center mb-5 group-hover:scale-110 group-hover:rotate-6 transition-all duration-400 shadow-lg`}
                >
                  <pillar.icon className="h-6 w-6 text-white" />
                </div>

                <h3 className="font-display text-base font-bold text-white-primary leading-snug mb-3">
                  {pillar.title}
                </h3>

                <p className="text-sm text-slate-400 leading-relaxed">
                  {pillar.description}
                </p>

                <div className="mt-5 h-0.5 w-full rounded-full bg-obsidian-700/50 overflow-hidden">
                  <div
                    className={`h-full w-0 group-hover:w-full bg-gradient-to-r ${pillar.accent} transition-all duration-500`}
                  />
                </div>
              </div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
}

export default USP;