import { useState } from 'react';
import { motion } from 'framer-motion';
import { Award, Eye, GraduationCap, Database, Globe, Calendar } from 'lucide-react';
import { SectionHeading } from '@/components/SectionHeading';
import { TiltCard } from '@/components/TiltCard';
import { Lightbox } from '@/components/Lightbox';

const BASE_URL = import.meta.env.BASE_URL;

const CERTIFICATES = [
  {
    title: 'Programming Fundamentals Diploma',
    org: 'Route Training Center',
    period: 'Nov 2025 — Mar 2026',
    description: 'C++, Java, OOP, Data Structures, SQL',
    image: `${BASE_URL}route_certificate.jpg`,
    icon: GraduationCap,
    accent: 'from-violet-400 to-violet-600',
    glow: 'rgba(139,92,246,0.15)',
  },
  {
    title: 'IBM Data Science Professional',
    org: 'Coursera / IBM',
    period: '2026',
    description: 'Python, SQL, Data Analysis, Machine Learning, Jupyter',
    image: `${BASE_URL}ibm_certificate.jpg`,
    icon: Database,
    accent: 'from-blue-400 to-indigo-600',
    glow: 'rgba(59,130,246,0.15)',
  },
  {
    title: 'Start Deutsch 1 (A1)',
    org: 'Goethe-Institut',
    period: 'German Language Certificate',
    description: 'A1 level German language proficiency',
    image: `${BASE_URL}german_a1_certificate.jpg`,
    icon: Globe,
    accent: 'from-coral-400 to-coral-500',
    glow: 'rgba(251,146,60,0.15)',
  },
  {
    title: 'Data Science & AI Track',
    org: 'DEPI Scholarship',
    period: 'Jul 2026 — Ongoing',
    description: 'Python, SQL, Data Analysis, Machine Learning',
    image: `${BASE_URL}depi_certificate.jpg`,
    icon: Database,
    accent: 'from-violet-400 to-violet-600',
    glow: 'rgba(139,92,246,0.15)',
  },
];

export function Certificates() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const activeCert = openIndex !== null ? CERTIFICATES[openIndex] : null;

  return (
    <section id="certificates" className="section-pad relative overflow-hidden">
      <div className="absolute inset-0 dot-overlay opacity-30 pointer-events-none" />

      <div className="ambient-orb w-80 h-80 bg-violet-500 top-1/3 left-1/4 animate-orb-float" />

      <div
        className="ambient-orb w-72 h-72 bg-coral-400 bottom-1/4 right-1/4 animate-orb-float"
        style={{ animationDelay: '4s' }}
      />

      <div className="container-mw relative z-10">
        <SectionHeading
          eyebrow="Certificates & Credentials"
          title={
            <>
              Verified{' '}
              <span className="text-gradient-vc neon-text-glow">
                Achievements
              </span>
            </>
          }
          subtitle="Official certifications and diplomas showcasing technical expertise and language proficiency."
        />

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {CERTIFICATES.map((cert, i) => (
            <TiltCard
              key={cert.title}
              className="group rounded-2xl glass-strong border border-violet-500/10 overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(i)}
                className="w-full text-left"
              >
                <div className="relative h-48 bg-gradient-to-br from-obsidian-800 to-obsidian-850 overflow-hidden">
                  <div className="absolute inset-0 dot-overlay opacity-30 pointer-events-none" />

                  <div
                    className="absolute -top-8 -right-8 h-24 w-24 rounded-full blur-2xl pointer-events-none"
                    style={{ background: cert.glow }}
                  />

                  <div className="absolute inset-0 flex items-center justify-center bg-obsidian-900/50">
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                      }}
                    />
                  </div>

                  <div className="absolute inset-0 bg-obsidian-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-xl glass-strong border border-violet-500/20 text-sm font-semibold text-violet-400">
                      <Eye className="h-4 w-4" />
                      View Certificate
                    </span>
                  </div>
                </div>

                <div className="p-5">
                  <div className="flex items-center gap-2 text-xs text-slate-500 mb-2 font-mono">
                    <Calendar className="h-3 w-3" />
                    {cert.period}
                  </div>

                  <h3 className="font-display text-base font-bold text-white-primary leading-snug mb-1">
                    {cert.title}
                  </h3>

                  <p className="text-sm text-violet-400 font-medium">
                    {cert.org}
                  </p>

                  <p className="text-xs text-slate-500 mt-1">
                    {cert.description}
                  </p>
                </div>
              </button>
            </TiltCard>
          ))}
        </div>
      </div>

      <Lightbox
        open={openIndex !== null}
        onClose={() => setOpenIndex(null)}
      >
        {activeCert && (
          <div className="p-6 sm:p-8">
            <div className="flex items-center gap-3 mb-4">
              <div
                className={`h-10 w-10 rounded-xl bg-gradient-to-br ${activeCert.accent} flex items-center justify-center`}
              >
                <activeCert.icon className="h-5 w-5 text-white" />
              </div>

              <div>
                <h3 className="font-display text-lg font-bold text-white-primary">
                  {activeCert.title}
                </h3>

                <p className="text-xs text-slate-500 font-mono">
                  // {activeCert.org}
                </p>
              </div>
            </div>

            <div className="rounded-xl glass border border-violet-500/10 overflow-hidden relative max-h-[70vh] flex items-center justify-center bg-obsidian-900/80">
              <img
                src={activeCert.image}
                alt={activeCert.title}
                className="w-full h-auto max-h-[65vh] object-contain"
              />
            </div>
          </div>
        )}
      </Lightbox>
    </section>
  );
}