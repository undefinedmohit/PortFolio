import React from 'react';

export const BackgroundSkillLogos: React.FC = () => {
  return (
    <div className="fixed inset-0 z-[2] pointer-events-none overflow-hidden select-none">
      {/* 1. JAVA Logo - Top Left */}
      <div className="absolute top-[18%] left-[3%] sm:left-[5%] md:left-[8%] animate-float-slow">
        <div className="flex items-center gap-2.5 px-3.5 py-2 rounded-2xl bg-black/60 backdrop-blur-md border border-amber-500/30 shadow-[0_0_20px_rgba(245,158,11,0.15)] hover:border-amber-500/60 transition-colors pointer-events-auto group cursor-default">
          <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none">
            <path d="M8.85 16.85C8.85 16.85 9.77 17.5 11.85 17.5C14.07 17.5 15.65 16.35 15.65 14.85C15.65 12.8 13.5 12.1 11.95 11.65C10.45 11.2 9.5 10.75 9.5 9.85C9.5 8.95 10.5 8.35 11.75 8.35C13.25 8.35 14.45 8.95 14.45 8.95L15.1 7.25C15.1 7.25 13.8 6.55 11.8 6.55C9.5 6.55 7.6 7.8 7.6 9.85C7.6 11.9 9.95 12.55 11.45 13C12.95 13.45 13.75 14.05 13.75 14.9C13.75 15.85 12.5 16.5 11.25 16.5C9.45 16.5 8.2 15.6 8.2 15.6L8.85 16.85Z" fill="#F59E0B"/>
            <path d="M4 19.5C6.5 21 11.5 21.5 16.5 20.5C18.5 20.1 20.5 19.3 22 18.2M2 17C4.5 18.5 9.5 19.5 15 18.8M10 2C10 2 12 4 11 6M13 3C13 3 14.5 4.5 13.5 6" stroke="#F59E0B" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
          <span className="text-xs font-bold font-mono tracking-wider text-amber-300">
            JAVA
          </span>
        </div>
      </div>

      {/* 2. SPRING BOOT Logo - Top Right */}
      <div className="absolute top-[22%] right-[3%] sm:right-[5%] md:right-[8%] animate-float-reverse">
        <div className="flex items-center gap-2.5 px-3.5 py-2 rounded-2xl bg-black/60 backdrop-blur-md border border-emerald-500/30 shadow-[0_0_20px_rgba(16,185,129,0.15)] hover:border-emerald-500/60 transition-colors pointer-events-auto group cursor-default">
          <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none">
            <path d="M12 2L3 7v10l9 5 9-5V7l-9-5z" fill="#10B981" opacity="0.2"/>
            <path d="M12 3.5L4.5 7.66v8.68L12 20.5l7.5-4.16V7.66L12 3.5z" stroke="#10B981" strokeWidth="1.6" strokeLinejoin="round"/>
            <path d="M12 7c-2.76 0-5 2.24-5 5 0 2.22 1.45 4.1 3.5 4.72V14.5A3.001 3.001 0 0112 9c1.66 0 3 1.34 3 3 0 .83-.34 1.58-.88 2.12" stroke="#10B981" strokeWidth="1.6" strokeLinecap="round"/>
          </svg>
          <span className="text-xs font-bold font-mono tracking-wider text-emerald-400">
            SPRING BOOT
          </span>
        </div>
      </div>

      {/* 3. JAVASCRIPT Logo - Mid Left */}
      <div className="absolute top-[52%] left-[2%] sm:left-[4%] md:left-[6%] animate-float-reverse">
        <div className="flex items-center gap-2.5 px-3.5 py-2 rounded-2xl bg-black/60 backdrop-blur-md border border-yellow-400/30 shadow-[0_0_20px_rgba(247,223,30,0.15)] hover:border-yellow-400/60 transition-colors pointer-events-auto group cursor-default">
          <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none">
            <rect width="24" height="24" rx="4" fill="#F7DF1E"/>
            <path d="M11.5 17.5c.6.9 1.4 1.5 2.7 1.5 1.3 0 2.1-.6 2.1-1.6 0-1.1-.7-1.5-2.2-2.1l-.8-.3c-2.3-1-3.3-2.2-3.3-4.5 0-2.6 2-4.5 5.1-4.5 2.3 0 3.8.8 4.7 2.4l-2.1 1.3c-.5-.9-1.2-1.3-2.6-1.3-1.2 0-1.9.6-1.9 1.4 0 1 .6 1.4 2.2 2.1l.8.3c2.6 1.1 3.6 2.3 3.6 4.7 0 3-2.3 4.7-5.5 4.7-3.1 0-4.8-1.4-5.7-3.1l2.1-1zM5.5 18c.5.8 1.2 1.4 2.2 1.4 1.1 0 1.8-.7 1.8-2.3V6h3v11.2c0 3.2-1.9 4.8-4.8 4.8-2.6 0-4.3-1.4-5.1-3l2.9-1z" fill="#000"/>
          </svg>
          <span className="text-xs font-bold font-mono tracking-wider text-yellow-300">
            JAVASCRIPT
          </span>
        </div>
      </div>

      {/* 4. SQL / DATABASE Logo - Mid Right */}
      <div className="absolute top-[48%] right-[2%] sm:right-[4%] md:right-[6%] animate-float-slow">
        <div className="flex items-center gap-2.5 px-3.5 py-2 rounded-2xl bg-black/60 backdrop-blur-md border border-cyan-400/30 shadow-[0_0_20px_rgba(0,180,216,0.15)] hover:border-cyan-400/60 transition-colors pointer-events-auto group cursor-default">
          <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none">
            <ellipse cx="12" cy="6" rx="8" ry="3" stroke="#00B4D8" strokeWidth="1.8"/>
            <path d="M4 6v6c0 1.66 3.58 3 8 3s8-1.34 8-3V6" stroke="#00B4D8" strokeWidth="1.8"/>
            <path d="M4 12v6c0 1.66 3.58 3 8 3s8-1.34 8-3v-6" stroke="#00B4D8" strokeWidth="1.8"/>
          </svg>
          <span className="text-xs font-bold font-mono tracking-wider text-cyan-300">
            SQL / RDBMS
          </span>
        </div>
      </div>

      {/* 5. APACHE KAFKA Logo - Lower Left */}
      <div className="absolute top-[80%] left-[4%] sm:left-[7%] md:left-[10%] animate-float-slow">
        <div className="flex items-center gap-2.5 px-3.5 py-2 rounded-2xl bg-black/60 backdrop-blur-md border border-indigo-400/30 shadow-[0_0_20px_rgba(129,140,248,0.15)] hover:border-indigo-400/60 transition-colors pointer-events-auto group cursor-default">
          <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="3" fill="#E0E7FF"/>
            <path d="M6 7l6 5M6 17l6-5M18 7l-6 5M18 17l-6-5" stroke="#6366F1" strokeWidth="2" strokeLinecap="round"/>
            <circle cx="6" cy="7" r="2" fill="#818CF8"/>
            <circle cx="6" cy="17" r="2" fill="#818CF8"/>
            <circle cx="18" cy="7" r="2" fill="#818CF8"/>
            <circle cx="18" cy="17" r="2" fill="#818CF8"/>
          </svg>
          <span className="text-xs font-bold font-mono tracking-wider text-indigo-300">
            KAFKA PIPELINES
          </span>
        </div>
      </div>

      {/* 6. REDIS / DOCKER Logo - Lower Right */}
      <div className="absolute top-[78%] right-[4%] sm:right-[7%] md:right-[10%] animate-float-reverse">
        <div className="flex items-center gap-2.5 px-3.5 py-2 rounded-2xl bg-black/60 backdrop-blur-md border border-red-500/30 shadow-[0_0_20px_rgba(220,56,45,0.15)] hover:border-red-500/60 transition-colors pointer-events-auto group cursor-default">
          <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none">
            <path d="M12 3L3 7.5L12 12L21 7.5L12 3Z" fill="#DC382D"/>
            <path d="M3 12L12 16.5L21 12" stroke="#DC382D" strokeWidth="1.8" strokeLinejoin="round"/>
            <path d="M3 16.5L12 21L21 16.5" stroke="#DC382D" strokeWidth="1.8" strokeLinejoin="round"/>
          </svg>
          <span className="text-xs font-bold font-mono tracking-wider text-red-300">
            REDIS CACHE
          </span>
        </div>
      </div>
    </div>
  );
};
