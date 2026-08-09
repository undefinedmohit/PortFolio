import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="relative z-1 w-full py-20 px-5 sm:px-8 md:px-10">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="mb-12">
          <span className="text-[13px] font-medium tracking-widest text-black/60 uppercase">
            // Engineering History
          </span>
          <h2
            className="text-[32px] sm:text-[42px] font-normal text-black tracking-tight mt-1"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Work Experience
          </h2>
          <p className="text-[16px] sm:text-[18px] text-black/70 mt-2 max-w-2xl">
            ~5 years architecting enterprise Java & Spring Boot backend systems, NRT data pipelines, and scalable security infrastructures.
          </p>
        </div>

        {/* Timeline */}
        <div className="space-y-6">
          {PORTFOLIO_DATA.experiences.map((exp, idx) => (
            <div
              key={`${exp.company}-${idx}`}
              className={`p-6 sm:p-8 rounded-2xl border transition-all duration-300 ${
                exp.isCurrent
                  ? 'bg-white/85 backdrop-blur-md border-black/20 shadow-lg'
                  : 'bg-white/60 backdrop-blur-sm border-black/10 hover:bg-white/80'
              }`}
            >
              {/* Header row */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-black/10">
                <div>
                  <div className="flex items-center gap-3">
                    <h3
                      className="text-[22px] sm:text-[26px] text-black font-medium tracking-tight"
                      style={{ fontFamily: 'var(--font-heading)' }}
                    >
                      {exp.company}
                    </h3>
                    {exp.isCurrent && (
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-black text-white">
                        Current Role
                      </span>
                    )}
                  </div>
                  <p className="text-[15px] sm:text-[17px] text-black/80 font-normal mt-0.5">
                    {exp.role}
                  </p>
                </div>
                <span className="text-[14px] text-black/60 font-medium whitespace-nowrap">
                  {exp.period}
                </span>
              </div>

              {/* Bullet points */}
              <ul className="mt-4 space-y-2.5">
                {exp.description.map((item, itemIdx) => (
                  <li key={itemIdx} className="flex items-start gap-3 text-[14px] sm:text-[16px] text-black/90 leading-relaxed">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-black mt-2 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              {/* Skills tags */}
              <div className="mt-6 flex flex-wrap gap-1.5 pt-4 border-t border-black/5">
                {exp.skills.map((skill) => (
                  <span
                    key={skill}
                    className="inline-block bg-black/5 text-black border border-black/10 rounded-full text-[12px] sm:text-[13px] px-3 py-1 font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
