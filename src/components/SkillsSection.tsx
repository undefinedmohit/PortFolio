import React from 'react';

const SKILL_ICONS: Record<string, { icon: React.ReactNode; color: string; bg: string }> = {
  Java: {
    color: '#ED8B00',
    bg: 'rgba(237, 139, 0, 0.1)',
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
        <path d="M8.85 16.85C8.85 16.85 9.77 17.5 11.85 17.5C14.07 17.5 15.65 16.35 15.65 14.85C15.65 12.8 13.5 12.1 11.95 11.65C10.45 11.2 9.5 10.75 9.5 9.85C9.5 8.95 10.5 8.35 11.75 8.35C13.25 8.35 14.45 8.95 14.45 8.95L15.1 7.25C15.1 7.25 13.8 6.55 11.8 6.55C9.5 6.55 7.6 7.8 7.6 9.85C7.6 11.9 9.95 12.55 11.45 13C12.95 13.45 13.75 14.05 13.75 14.9C13.75 15.85 12.5 16.5 11.25 16.5C9.45 16.5 8.2 15.6 8.2 15.6L8.85 16.85Z" fill="#ED8B00"/>
        <path d="M4 19.5C6.5 21 11.5 21.5 16.5 20.5C18.5 20.1 20.5 19.3 22 18.2M2 17C4.5 18.5 9.5 19.5 15 18.8M10 2C10 2 12 4 11 6M13 3C13 3 14.5 4.5 13.5 6" stroke="#ED8B00" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  'Spring Boot': {
    color: '#10B981',
    bg: 'rgba(16, 185, 129, 0.1)',
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
        <path d="M12 2L3 7v10l9 5 9-5V7l-9-5z" fill="#10B981" opacity="0.2"/>
        <path d="M12 3.5L4.5 7.66v8.68L12 20.5l7.5-4.16V7.66L12 3.5z" stroke="#10B981" strokeWidth="1.6" strokeLinejoin="round"/>
        <path d="M12 7c-2.76 0-5 2.24-5 5 0 2.22 1.45 4.1 3.5 4.72V14.5A3.001 3.001 0 0112 9c1.66 0 3 1.34 3 3 0 .83-.34 1.58-.88 2.12" stroke="#10B981" strokeWidth="1.6" strokeLinecap="round"/>
      </svg>
    ),
  },
  JavaScript: {
    color: '#D97706',
    bg: 'rgba(247, 223, 30, 0.15)',
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="4" fill="#F7DF1E"/>
        <path d="M11.5 17.5c.6.9 1.4 1.5 2.7 1.5 1.3 0 2.1-.6 2.1-1.6 0-1.1-.7-1.5-2.2-2.1l-.8-.3c-2.3-1-3.3-2.2-3.3-4.5 0-2.6 2-4.5 5.1-4.5 2.3 0 3.8.8 4.7 2.4l-2.1 1.3c-.5-.9-1.2-1.3-2.6-1.3-1.2 0-1.9.6-1.9 1.4 0 1 .6 1.4 2.2 2.1l.8.3c2.6 1.1 3.6 2.3 3.6 4.7 0 3-2.3 4.7-5.5 4.7-3.1 0-4.8-1.4-5.7-3.1l2.1-1zM5.5 18c.5.8 1.2 1.4 2.2 1.4 1.1 0 1.8-.7 1.8-2.3V6h3v11.2c0 3.2-1.9 4.8-4.8 4.8-2.6 0-4.3-1.4-5.1-3l2.9-1z" fill="#000"/>
      </svg>
    ),
  },
  'SQL / PostgreSQL': {
    color: '#00B4D8',
    bg: 'rgba(0, 180, 216, 0.1)',
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
        <ellipse cx="12" cy="6" rx="8" ry="3" stroke="#00B4D8" strokeWidth="1.8"/>
        <path d="M4 6v6c0 1.66 3.58 3 8 3s8-1.34 8-3V6" stroke="#00B4D8" strokeWidth="1.8"/>
        <path d="M4 12v6c0 1.66 3.58 3 8 3s8-1.34 8-3v-6" stroke="#00B4D8" strokeWidth="1.8"/>
      </svg>
    ),
  },
  'Apache Kafka': {
    color: '#6366F1',
    bg: 'rgba(99, 102, 241, 0.1)',
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="3" fill="#6366F1"/>
        <path d="M6 7l6 5M6 17l6-5M18 7l-6 5M18 17l-6-5" stroke="#6366F1" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="6" cy="7" r="2" fill="#818CF8"/>
        <circle cx="6" cy="17" r="2" fill="#818CF8"/>
        <circle cx="18" cy="7" r="2" fill="#818CF8"/>
        <circle cx="18" cy="17" r="2" fill="#818CF8"/>
      </svg>
    ),
  },
  'JWT & SSO Auth': {
    color: '#059669',
    bg: 'rgba(5, 150, 105, 0.1)',
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
        <path d="M12 2L4 5v6c0 5.55 3.84 10.74 8 12 4.16-1.26 8-6.45 8-12V5l-8-3z" fill="#059669" opacity="0.2"/>
        <path d="M12 2L4 5v6c0 5.55 3.84 10.74 8 12 4.16-1.26 8-6.45 8-12V5l-8-3z" stroke="#059669" strokeWidth="1.8" strokeLinejoin="round"/>
        <path d="M12 11a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm0 0v4" stroke="#059669" strokeWidth="1.8" strokeLinecap="round"/>
      </svg>
    ),
  },
  'Payment Gateways': {
    color: '#8B5CF6',
    bg: 'rgba(139, 92, 246, 0.1)',
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
        <rect x="2" y="5" width="20" height="14" rx="3" stroke="#8B5CF6" strokeWidth="1.8"/>
        <path d="M2 10h20" stroke="#8B5CF6" strokeWidth="1.8"/>
        <path d="M6 15h4" stroke="#8B5CF6" strokeWidth="1.8" strokeLinecap="round"/>
      </svg>
    ),
  },
  'RESTful APIs': {
    color: '#3B82F6',
    bg: 'rgba(59, 130, 246, 0.1)',
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
        <path d="M8 9l-3 3 3 3M16 9l3 3-3 3M14 7l-4 10" stroke="#3B82F6" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
};

const SKILL_CATEGORIES = [
  {
    category: 'Core Languages & Frameworks',
    skills: [
      { name: 'Java', level: 'Senior / Production Core' },
      { name: 'Spring Boot', level: 'Microservices & Enterprise' },
      { name: 'JavaScript', level: 'Full-Stack Modern JS' },
      { name: 'SQL / PostgreSQL', level: 'RDBMS Optimization' },
    ],
  },
  {
    category: 'Streaming, Auth & Integration',
    skills: [
      { name: 'Apache Kafka', level: 'Near Real-Time Data Stream' },
      { name: 'JWT & SSO Auth', level: 'Enterprise Security' },
      { name: 'Payment Gateways', level: 'Financial Integration' },
      { name: 'RESTful APIs', level: 'High-Concurrency Services' },
    ],
  },
];

export const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="relative z-1 w-full py-20 px-5 sm:px-8 md:px-10">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="mb-12">
          <span className="text-[13px] font-medium tracking-widest text-black/60 uppercase">
            // Technical Proficiency
          </span>
          <h2
            className="text-[32px] sm:text-[42px] font-normal text-black tracking-tight mt-1"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Technical Stack & Core Skills
          </h2>
          <p className="text-[16px] sm:text-[18px] text-black/70 mt-2 max-w-2xl">
            Specialized backend toolkit honed over ~5 years of engineering high-availability Java, Spring Boot, & Kafka services.
          </p>
        </div>

        {/* Skill Matrix Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SKILL_CATEGORIES.map((cat) => (
            <div
              key={cat.category}
              className="p-6 rounded-2xl bg-white/80 backdrop-blur-md border border-black/15 hover:bg-white/95 transition-all duration-300 shadow-md"
            >
              <h3
                className="text-[19px] sm:text-[21px] font-medium text-black tracking-tight mb-4 flex items-center gap-2.5 pb-3 border-b border-black/10"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                {cat.category}
              </h3>

              <div className="space-y-3">
                {cat.skills.map((skill) => {
                  const meta = SKILL_ICONS[skill.name] || {
                    color: '#10B981',
                    bg: 'rgba(16, 185, 129, 0.1)',
                    icon: <span className="w-2 h-2 rounded-full bg-emerald-500" />,
                  };

                  return (
                    <div
                      key={skill.name}
                      className="flex items-center justify-between p-3 rounded-xl bg-black/5 hover:bg-black/10 transition-colors border border-black/5"
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
                          style={{ backgroundColor: meta.bg }}
                        >
                          {meta.icon}
                        </div>
                        <div>
                          <span className="text-[15px] font-semibold text-black block leading-snug">
                            {skill.name}
                          </span>
                          <span className="text-[11px] text-black/60 font-mono block">
                            {skill.level}
                          </span>
                        </div>
                      </div>

                      <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-700 border border-emerald-500/20 font-mono">
                        ✓ Production
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
