import React, { useState, useEffect } from 'react';
import { PORTFOLIO_DATA, DetailedProject } from '../data/portfolioData';

export const ProjectsSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<DetailedProject | null>(null);

  // Prevent background page scrolling when project modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedProject]);

  return (
    <section id="projects" className="relative z-1 w-full py-20 px-5 sm:px-8 md:px-10">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="mb-12">
          <span className="text-[13px] font-medium tracking-widest text-black/60 uppercase">
            // Engineering Portfolio
          </span>
          <h2
            className="text-[32px] sm:text-[42px] font-normal text-black tracking-tight mt-1"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Featured Projects
          </h2>
          <p className="text-[16px] sm:text-[18px] text-black/70 mt-2 max-w-2xl">
            High-concurrency data stream pipelines, local AI tools, SSO authentication systems, and automated CI/CD infrastructure.
          </p>
        </div>

        {/* 4 Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PORTFOLIO_DATA.projects.map((proj) => (
            <div
              key={proj.id}
              className="p-6 sm:p-8 rounded-2xl bg-white/80 backdrop-blur-md border border-black/15 hover:bg-white/95 transition-all duration-300 shadow-md flex flex-col justify-between group"
            >
              <div>
                {/* Header row */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-black text-white">
                    {proj.badge}
                  </span>
                  <span className="text-xs font-mono text-black/50">{proj.category}</span>
                </div>

                <h3
                  className="text-[22px] sm:text-[25px] font-medium text-black tracking-tight group-hover:text-black/80 transition-colors"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  {proj.title}
                </h3>

                <p className="text-[14px] sm:text-[15px] text-black/80 font-normal mt-2 leading-relaxed">
                  {proj.description}
                </p>

                {/* Tech Stack Tags */}
                <div className="mt-5 flex flex-wrap gap-1.5">
                  {proj.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="bg-black/5 text-black border border-black/10 rounded-md text-[11px] sm:text-[12px] px-2.5 py-0.5 font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* View Details CTA */}
              <div className="mt-6 pt-4 border-t border-black/10 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setSelectedProject(proj)}
                  className="text-[14px] font-medium text-black underline underline-offset-4 hover:opacity-60 transition-opacity cursor-pointer inline-flex items-center gap-1 bg-transparent border-none p-0"
                >
                  <span>View Details</span>
                  <span className="text-xs">→</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* High z-index Modal Dialog with Background Backdrop Click to Close */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              setSelectedProject(null);
            }
          }}
        >
          <div className="bg-white rounded-2xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-black/10 max-h-[85vh] overflow-y-auto relative z-[101]">
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setSelectedProject(null)}
              className="absolute top-6 right-6 w-8 h-8 rounded-full bg-black/5 hover:bg-black/10 flex items-center justify-center text-black font-bold cursor-pointer transition-colors border-none"
              aria-label="Close modal"
            >
              ✕
            </button>

            <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-black text-white inline-block mb-3">
              {selectedProject.badge}
            </span>

            <h3
              className="text-[26px] sm:text-[32px] font-medium text-black tracking-tight"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              {selectedProject.title}
            </h3>

            <p className="text-[16px] text-black/70 font-normal mt-1 mb-6">
              {selectedProject.subtitle}
            </p>

            <div className="p-4 rounded-xl bg-black/5 border border-black/10 mb-6">
              <h4 className="text-xs font-bold text-black/60 uppercase tracking-wider mb-2">
                Overview & Impact
              </h4>
              <p className="text-[15px] text-black/90 leading-relaxed">
                {selectedProject.description}
              </p>
            </div>

            <h4 className="text-sm font-bold text-black uppercase tracking-wider mb-3">
              Key Engineering Highlights
            </h4>
            <ul className="space-y-2.5 mb-6">
              {selectedProject.highlights.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-[14px] sm:text-[15px] text-black/90 leading-relaxed">
                  <span className="text-black font-bold">↳</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <h4 className="text-sm font-bold text-black uppercase tracking-wider mb-3">
              Tech Stack & Tools
            </h4>
            <div className="flex flex-wrap gap-2 mb-8">
              {selectedProject.techStack.map((tech) => (
                <span
                  key={tech}
                  className="bg-black text-white rounded-full text-[12px] px-3 py-1 font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="pt-4 border-t border-black/10 flex justify-end">
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                className="bg-black text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-black/80 transition-colors cursor-pointer border-none"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
