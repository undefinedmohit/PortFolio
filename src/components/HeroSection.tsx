import React, { useState, useEffect } from 'react';
import { useTypewriter } from '../hooks/useTypewriter';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const HeroSection: React.FC = () => {
  const [showPills, setShowPills] = useState(false);
  const [copied, setCopied] = useState(false);

  const { displayed, done } = useTypewriter({
    text: "Backend Engineer with ~5 years experience building scalable Java & Spring Boot backends, Kafka NRT pipelines, and local AI tools. What are we architecting?",
    speed: 32,
    startDelay: 600,
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPills(true);
    }, 400);

    return () => clearTimeout(timer);
  }, []);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PORTFOLIO_DATA.profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy email: ', err);
    }
  };

  const handleScrollTo = (target: string) => {
    const element = document.querySelector(target);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative z-1 min-h-screen w-full flex flex-col justify-end pb-12 md:justify-center md:pb-0 px-5 sm:px-8 md:px-10 overflow-hidden">
      <div className="max-w-3xl relative z-10 pt-20">
        {/* Badges / Stats line */}
        <div className="flex flex-wrap items-center gap-2 mb-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-900 border border-emerald-500/20 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
            Senior SE @ LTIMindtree
          </span>
          <a
            href={PORTFOLIO_DATA.profile.leetcode}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/10 text-amber-900 border border-amber-500/20 backdrop-blur-sm hover:bg-amber-500/20 transition-colors"
          >
            ⚡ {PORTFOLIO_DATA.profile.leetcodeSolved} LeetCode Solved
          </a>
        </div>

        {/* 1. Blurred intro label */}
        <div
          className="pointer-events-none select-none mb-4 sm:mb-5 text-black font-normal text-[clamp(18px,4vw,26px)] leading-[1.3]"
          style={{ filter: 'blur(4px)' }}
        >
          Hey there, meet Mohit —<br />
          Senior Software Engineer specializing in Java, Spring Boot & Kafka
        </div>

        {/* 2. Typewriter text */}
        <p className="text-black mb-6 sm:mb-8 text-[clamp(18px,4vw,26px)] leading-[1.35] font-normal min-h-[70px]">
          {displayed}
          {!done && (
            <span className="inline-block w-[2px] h-[1.1em] bg-black align-middle ml-[2px] animate-blink" />
          )}
        </p>

        {/* 3. Action pill buttons */}
        <div
          className={`flex flex-wrap gap-y-1 transition-all duration-400 ease-out ${
            showPills
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-2 pointer-events-none'
          }`}
          style={{ transitionProperty: 'opacity, transform' }}
        >
          <button
            type="button"
            onClick={() => handleScrollTo('#projects')}
            className="inline-flex items-center justify-center bg-white text-black border border-black/10 rounded-full text-[13px] sm:text-[15px] px-4 sm:px-5 py-[0.35em] mx-[0.2em] mb-[0.4em] whitespace-nowrap hover:bg-black hover:text-white transition-colors duration-200 cursor-pointer font-normal focus:outline-none shadow-sm"
          >
            View 4 Projects
          </button>

          <button
            type="button"
            onClick={() => handleScrollTo('#experience')}
            className="inline-flex items-center justify-center bg-white text-black border border-black/10 rounded-full text-[13px] sm:text-[15px] px-4 sm:px-5 py-[0.35em] mx-[0.2em] mb-[0.4em] whitespace-nowrap hover:bg-black hover:text-white transition-colors duration-200 cursor-pointer font-normal focus:outline-none shadow-sm"
          >
            Work History
          </button>

          <button
            type="button"
            onClick={() => handleScrollTo('#skills')}
            className="inline-flex items-center justify-center bg-white text-black border border-black/10 rounded-full text-[13px] sm:text-[15px] px-4 sm:px-5 py-[0.35em] mx-[0.2em] mb-[0.4em] whitespace-nowrap hover:bg-black hover:text-white transition-colors duration-200 cursor-pointer font-normal focus:outline-none shadow-sm"
          >
            Core Tech Stack
          </button>

          <a
            href={PORTFOLIO_DATA.profile.leetcode}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-white text-black border border-black/10 rounded-full text-[13px] sm:text-[15px] px-4 sm:px-5 py-[0.35em] mx-[0.2em] mb-[0.4em] whitespace-nowrap hover:bg-black hover:text-white transition-colors duration-200 cursor-pointer font-normal focus:outline-none shadow-sm"
          >
            LeetCode (125+) ↗
          </a>

          {/* Outline pill button */}
          <button
            type="button"
            onClick={handleCopyEmail}
            className="relative inline-flex items-center justify-center text-white bg-transparent border border-white rounded-full text-[13px] sm:text-[15px] px-4 sm:px-5 py-[0.35em] mx-[0.2em] mb-[0.4em] whitespace-nowrap gap-2 sm:gap-3 hover:bg-white hover:text-black transition-colors duration-200 cursor-pointer font-normal focus:outline-none group shadow-sm"
          >
            <span>
              Reach out:{' '}
              <span className="underline underline-offset-1">
                {PORTFOLIO_DATA.profile.email}
              </span>
            </span>

            {/* Small copy icon */}
            <svg
              className="w-3 h-3 fill-current transition-colors duration-200"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="3.5"
                y="3.5"
                width="7"
                height="7"
                rx="1"
                stroke="currentColor"
                strokeWidth="1"
                fill="none"
              />
              <path
                d="M8.5 2.5V1.5C8.5 1.22386 8.27614 1 8 1H1.5C1.22386 1 1 1.22386 1 1.5V8C1 8.27614 1.22386 8.5 1.5 8.5H2.5"
                stroke="currentColor"
                strokeWidth="1"
                fill="none"
              />
            </svg>

            {copied && (
              <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-black text-white text-[11px] px-2.5 py-0.5 rounded shadow-lg">
                Copied!
              </span>
            )}
          </button>
        </div>
      </div>
    </section>
  );
};
