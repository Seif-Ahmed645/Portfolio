
import { motion } from 'framer-motion';
import {
  BriefcaseBusiness,
  Calendar,
  Database,
  Code2,
  Layers,
  Languages,
  FolderCode,
  Users,
  CheckCircle2,
  type LucideIcon,
} from 'lucide-react';

type Stage = {
  title: string;
  duration: string;
  description: string;
};

type Track = {
  title: string;
  description: string;
  icon: LucideIcon;
  details?: string[];
  stages?: Stage[];
};

type ExperienceItem = {
  role: string;
  org: string;
  period: string;
  type: string;
  overview: string;
  tracks: Track[];
  skills: string[];
  logo: string;
  ongoing: boolean;
};

const technicalTopics = [
  'Prompt Engineering',
  'Data Science Fundamentals',
  'Data Science Tools',
  'Data Science Methodology',
  'Python',
  'Python Projects',
  'SQL Server',
  'PostgreSQL',
  'Data Analysis',
  'Data Visualization',
  'Machine Learning',
  'MLOps',
  'MLflow',
  'Hugging Face',
  'Capstone Project',
];

const EXPERIENCES: ExperienceItem[] = [
  {
    role: 'Data Science & AI Intern',
    org: 'Digital Egypt Pioneers Initiative (DEPI) – MCIT',
    period: '07/2026 – Ongoing',
    type: 'Internship / Scholarship',
    overview:
      'Training in Data Science, AI, professional skills, freelancing, and Business English through practical learning and projects.',
    tracks: [
      {
        title: 'Technical Track',
        description:
          'Learning Data Science, Python, databases, data analysis, and Machine Learning through hands-on projects.',
        icon: Code2,
        details: technicalTopics,
      },
      {
        title: 'Non-Technical Track',
        description:
          'Developing communication, career preparation, and freelancing skills across three stages.',
        icon: Layers,
        stages: [
          {
            title: 'Soft Skills',
            duration: '1.5 Months',
            description:
              'Building communication and presentation skills, preparing a professional CV, and improving LinkedIn.',
          },
          {
            title: 'Freelancing',
            duration: '1.5 Months',
            description:
              'Learning about freelance platforms, finding clients, and building a professional portfolio.',
          },
          {
            title: 'Coaching',
            duration: '2 Months',
            description:
              'Practicing client communication, finding projects, and publishing freelance services.',
          },
        ],
      },
      {
        title: 'Bonus English Track',
        description:
          'Improving English for business and professional communication.',
        icon: Languages,
        details: [
          'Business English',
          'Professional Communication',
          'Confident Speaking',
          'Duration: 1.5 Months',
        ],
      },
    ],
    skills: [
      'Python',
      'Data Science',
      'SQL Server',
      'PostgreSQL',
      'Data Analysis',
      'Machine Learning',
      'Data Visualization',
      'MLOps',
    ],
    logo: '/Portfolio/Depi.jpg',
    ongoing: true,
  },
  {
    role: 'Programming Fundamentals Trainee',
    org: 'Route Training Center',
    period: '11/2025 – 03/2026',
    type: 'Training / Certification',
    overview:
      'Completed programming training in problem-solving, OOP, data structures, and databases, with practical projects.',
    tracks: [
      {
        title: 'Programming Fundamentals',
        description:
          'Learned programming basics and problem-solving and built a Library Management System.',
        icon: Code2,
      },
      {
        title: 'OOP & Data Structures',
        description:
          'Studied OOP and data structures and developed a Bank Management System.',
        icon: Layers,
      },
      {
        title: 'Database Fundamentals',
        description:
          'Learned SQL and database concepts for storing, organizing, and retrieving data.',
        icon: Database,
      },
      {
        title: 'Java Project',
        description:
          'Built a Tic-Tac-Toe (XO) game using Java.',
        icon: FolderCode,
      },
    ],
    skills: ['C++', 'Java', 'OOP', 'Data Structures', 'Databases'],
    logo: '/Portfolio/Route.jpg',
    ongoing: false,
  },
];

function TopicTags({ items }: { items: string[] }) {
  return (
    <div className="mt-4 flex flex-wrap gap-2">
      {items.map((item) => (
        <span
          key={item}
          className="rounded-lg border border-[#D9886A]/15 bg-[#D9886A]/[0.06] px-2.5 py-1.5 text-[11px] font-medium text-slate-300 transition-all duration-300 hover:border-[#D9886A]/40 hover:text-[#D9886A]"
        >
          {item}
        </span>
      ))}
    </div>
  );
}

function TrackDetails({ track }: { track: Track }) {
  const isTechnical = track.title === 'Technical Track';

  if (track.stages) {
    return (
      <div className="mt-4 space-y-3">
        {track.stages.map((stage) => (
          <div
            key={stage.title}
            className="rounded-xl border border-white/[0.07] bg-black/20 p-3.5"
          >
            <div className="mb-2 flex flex-wrap items-center gap-2">
              <h5 className="text-sm font-semibold text-slate-200">
                {stage.title}
              </h5>
              <span className="rounded-full border border-[#D9886A]/20 bg-[#D9886A]/[0.07] px-2.5 py-1 text-[10px] font-medium text-[#D9886A]">
                {stage.duration}
              </span>
            </div>

            <p className="text-xs leading-6 text-slate-400 sm:text-sm">
              {stage.description}
            </p>
          </div>
        ))}

        <div className="flex items-center gap-2 pt-1 text-xs text-slate-400">
          <CheckCircle2 className="h-4 w-4 shrink-0 text-[#D9886A]" />
          Total duration: 5 months
        </div>
      </div>
    );
  }

  if (track.details) {
    return (
      <div className="mt-4">
        {isTechnical && (
          <div className="mb-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
            <div className="flex items-start gap-3 rounded-xl border border-white/[0.07] bg-black/20 p-3.5">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#D9886A]/10 text-[#D9886A]">
                <Calendar className="h-4 w-4" />
              </div>
              <div>
                <p className="text-xs font-semibold text-slate-200">
                  Duration
                </p>
                <p className="mt-1 text-xs leading-5 text-slate-400">
                  Throughout the initiative.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 rounded-xl border border-white/[0.07] bg-black/20 p-3.5">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#D9886A]/10 text-[#D9886A]">
                <Users className="h-4 w-4" />
              </div>
              <div>
                <p className="text-xs font-semibold text-slate-200">
                  Practical Projects
                </p>
                <p className="mt-1 text-xs leading-5 text-slate-400">
                  Hands-on projects and offline sessions.
                </p>
              </div>
            </div>
          </div>
        )}

        {isTechnical && (
          <p className="mb-2 text-xs font-semibold text-slate-300">
            Key Topics
          </p>
        )}

        <TopicTags items={track.details} />
      </div>
    );
  }

  return null;
}

export function Experience() {
  return (
    <section
      id="experience"
      className="section-pad relative overflow-hidden"
    >
      <div className="ambient-orb pointer-events-none absolute -left-20 top-1/4 h-72 w-72 bg-violet-500 opacity-20 blur-3xl" />

      <div className="ambient-orb pointer-events-none absolute -right-20 bottom-1/4 h-72 w-72 bg-coral-400 opacity-10 blur-3xl" />

      <div className="container-mw relative z-10">
        <div className="mb-12">
          <div className="mb-3 flex items-center gap-2">
            <span className="h-px w-8 bg-[#D9886A]" />
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#D9886A]">
              My Experience
            </span>
          </div>

          <h2 className="font-display text-3xl font-extrabold text-white-primary sm:text-4xl">
            Experience &amp;{' '}
            <span className="text-[#D9886A]">Training</span>
          </h2>

          <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
            My training and practical experience in programming, Data Science, and AI.
          </p>
        </div>

        <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-2">
          {EXPERIENCES.map((exp, index) => {
            const isRoute = exp.org === 'Route Training Center';

            return (
              <motion.article
                key={exp.org}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.12,
                }}
                className={`relative flex min-w-0 flex-col overflow-hidden rounded-2xl border bg-[#0b0d0e] p-5 transition-all duration-300 sm:p-7 ${
                  isRoute
                    ? 'border-[#D9886A]/20 hover:border-[#D9886A]/50'
                    : 'border-white/10 hover:border-[#D9886A]/30'
                }`}
              >
                <div className="pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full bg-[#D9886A]/[0.05] blur-3xl" />

                <div className="relative flex items-start gap-4">
                  <div
                    className={`flex h-[76px] w-[76px] shrink-0 items-center justify-center overflow-hidden rounded-2xl border p-1 transition-all duration-300 sm:h-[84px] sm:w-[84px] ${
                      isRoute
                        ? 'border-[#D9886A]/25 bg-[#0b0d0e]'
                        : 'border-white/10 bg-white'
                    }`}
                  >
                    <img
                      src={exp.logo}
                      alt={`${exp.org} logo`}
                      className={`h-full w-full ${
                        isRoute
                          ? 'scale-110 rounded-xl object-cover'
                          : 'rounded-xl object-contain'
                      }`}
                      onError={(event) => {
                        event.currentTarget.style.display = 'none';
                      }}
                    />
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="mb-2 flex flex-wrap items-center gap-2">
                      <span className="rounded-full border border-[#D9886A]/25 bg-[#D9886A]/[0.07] px-2.5 py-1 text-[10px] font-medium text-[#D9886A] sm:text-xs">
                        {exp.type}
                      </span>

                      {exp.ongoing && (
                        <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-2.5 py-1 text-[10px] font-medium text-emerald-400 sm:text-xs">
                          <span className="relative flex h-1.5 w-1.5">
                            <span className="absolute h-full w-full animate-ping rounded-full bg-emerald-400 opacity-70" />
                            <span className="relative h-1.5 w-1.5 rounded-full bg-emerald-400" />
                          </span>
                          Ongoing
                        </span>
                      )}
                    </div>

                    <h3 className="font-display text-lg font-bold leading-snug text-white-primary sm:text-xl">
                      {exp.role}
                    </h3>

                    <p className="mt-1.5 text-sm font-medium leading-6 text-[#D9886A]">
                      {exp.org}
                    </p>

                    <div className="mt-2 flex items-center gap-1.5 text-xs text-slate-500">
                      <Calendar className="h-3.5 w-3.5 shrink-0" />
                      <span>{exp.period}</span>
                    </div>
                  </div>
                </div>

                <div className="relative mt-7">
                  <h4 className="mb-2 flex items-center gap-2 text-sm font-bold text-slate-200">
                    <BriefcaseBusiness className="h-4 w-4 text-[#D9886A]" />
                    Overview
                  </h4>

                  <p className="text-sm leading-6 text-slate-400">
                    {exp.overview}
                  </p>
                </div>

                <div className="relative mt-5 space-y-3">
                  {exp.tracks.map((track) => {
                    const Icon = track.icon;

                    return (
                      <div
                        key={track.title}
                        className="rounded-xl border border-white/[0.09] bg-white/[0.015] p-3.5 transition-all duration-300 hover:border-[#D9886A]/25 hover:bg-[#D9886A]/[0.025] sm:p-4"
                      >
                        <div className="flex items-start gap-3">
                          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-[#D9886A]/20 bg-[#D9886A]/[0.08]">
                            <Icon className="h-4 w-4 text-[#D9886A]" />
                          </div>

                          <div className="min-w-0 flex-1">
                            <h4 className="text-sm font-semibold leading-5 text-slate-200">
                              {track.title}
                            </h4>

                            <p className="mt-2 text-xs leading-6 text-slate-400 sm:text-sm">
                              {track.description}
                            </p>
                          </div>
                        </div>

                        <TrackDetails track={track} />
                      </div>
                    );
                  })}
                </div>

                <div className="relative mt-6 flex flex-wrap gap-2 border-t border-white/[0.08] pt-5">
                  {exp.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-lg border border-white/10 bg-white/[0.03] px-3 py-1.5 text-[11px] font-medium text-slate-400 transition-colors hover:border-[#D9886A]/30 hover:text-[#D9886A]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Experience;