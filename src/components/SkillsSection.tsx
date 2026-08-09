import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="relative z-1 w-full py-20 px-5 sm:px-8 md:px-10">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="mb-12">
          <span className="text-[13px] font-medium tracking-widest text-black/60 uppercase">
            // Core Competencies
          </span>
          <h2
            className="text-[32px] sm:text-[42px] font-normal text-black tracking-tight mt-1"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Technical Stack
          </h2>
          <p className="text-[16px] sm:text-[18px] text-black/70 mt-2 max-w-2xl">
            Specialized backend toolkit honed over ~5 years of engineering high-availability services.
          </p>
        </div>

        {/* Skill Matrix Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PORTFOLIO_DATA.skillCategories.map((cat) => (
            <div
              key={cat.category}
              className="p-6 rounded-2xl bg-white/70 backdrop-blur-md border border-black/15 hover:bg-white/85 transition-all duration-300 shadow-sm"
            >
              <h3
                className="text-[20px] sm:text-[22px] font-medium text-black tracking-tight mb-4 flex items-center gap-2"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                <span className="w-2 h-2 rounded-full bg-black" />
                {cat.category}
              </h3>

              <div className="space-y-2.5">
                {cat.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center justify-between p-2.5 rounded-lg bg-black/5 hover:bg-black/10 transition-colors"
                  >
                    <span className="text-[15px] font-medium text-black">
                      {skill.name}
                    </span>
                    <span className="text-xs text-black/60 font-mono">
                      ✓ Proficient
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
