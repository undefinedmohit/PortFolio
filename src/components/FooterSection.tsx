import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { ContactForm } from './ContactForm';

export const FooterSection: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PORTFOLIO_DATA.profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy email: ', err);
    }
  };

  return (
    <footer id="contact" className="relative z-10 w-full py-20 px-5 sm:px-8 md:px-10 bg-black/90 text-white border-t border-white/10">
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
        {/* Logo Mark */}
        <span className="text-[36px] text-white mb-3 select-none">✳︎</span>

        <h2
          className="text-[36px] sm:text-[52px] font-normal text-white tracking-tight leading-tight mb-2"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          Let's Architect Together.
        </h2>

        <p className="text-[17px] sm:text-[20px] text-white/70 mt-1 mb-10 max-w-xl">
          Senior Software Engineer specializing in Java, Spring Boot microservices, Kafka data stream pipelines & system design.
        </p>

        {/* Contact Form Component */}
        <div className="w-full mb-12">
          <ContactForm />
        </div>

        {/* Direct Email Action Button */}
        <div className="relative inline-block mb-10">
          <button
            type="button"
            onClick={handleCopyEmail}
            className="inline-flex items-center gap-3 bg-white text-black px-6 sm:px-8 py-3 rounded-full text-[15px] sm:text-[16px] font-medium hover:bg-white/90 transition-all duration-200 cursor-pointer shadow-lg"
          >
            <span>Email Me: {PORTFOLIO_DATA.profile.email}</span>
            <svg
              className="w-4 h-4 fill-current"
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
          </button>
          {copied && (
            <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-white text-black text-xs px-3 py-1 rounded shadow-lg font-medium">
              Email Copied!
            </span>
          )}
        </div>

        {/* Official Social Links Badges */}
        <div className="flex flex-wrap justify-center items-center gap-4 text-[14px] sm:text-[15px] text-white/80">
          <a
            href={`mailto:${PORTFOLIO_DATA.profile.email}`}
            className="px-4 py-2 rounded-full bg-white/10 border border-white/20 hover:bg-white hover:text-black transition-all"
          >
            ✉️ Email
          </a>
          <a
            href={PORTFOLIO_DATA.profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-full bg-white/10 border border-white/20 hover:bg-white hover:text-black transition-all"
          >
            🐙 GitHub (undefinedmohit)
          </a>
          <a
            href={PORTFOLIO_DATA.profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-full bg-white/10 border border-white/20 hover:bg-white hover:text-black transition-all"
          >
            💼 LinkedIn (mohit-yadav-ji)
          </a>
          <a
            href={PORTFOLIO_DATA.profile.leetcode}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-full bg-white/10 border border-white/20 hover:bg-white hover:text-black transition-all"
          >
            ⚡ LeetCode (125+ Solved)
          </a>
        </div>

        {/* Copyright */}
        <div className="mt-14 text-xs text-white/40 font-mono">
          © {new Date().getFullYear()} Mohit®. Terminal & Dev-Tool Theme Portfolio.
        </div>
      </div>
    </footer>
  );
};
