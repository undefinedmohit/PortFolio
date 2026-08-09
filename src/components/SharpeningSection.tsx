import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const SharpeningSection: React.FC = () => {
  return (
    <section id="sharpening" className="relative z-1 w-full py-20 px-5 sm:px-8 md:px-10">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="mb-12">
          <span className="text-[13px] font-medium tracking-widest text-black/60 uppercase">
            // Continuous Growth & DSA
          </span>
          <h2
            className="text-[32px] sm:text-[42px] font-normal text-black tracking-tight mt-1"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Currently Sharpening
          </h2>
          <p className="text-[16px] sm:text-[18px] text-black/70 mt-2 max-w-2xl">
            Active daily practice focusing on advanced algorithms, LeetCode problem solving in Java, and distributed system design.
          </p>
        </div>

        {/* LeetCode Solved Highlight Banner */}
        <div className="mb-8 p-6 rounded-2xl bg-amber-500/10 border border-amber-500/30 backdrop-blur-md flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <span className="text-3xl">⚡</span>
            <div>
              <h3 className="text-lg font-bold text-black flex items-center gap-2">
                LeetCode Profile — {PORTFOLIO_DATA.profile.leetcodeSolved} Problems Solved
              </h3>
              <p className="text-sm text-black/70">
                Consistent practice with Striver's SDE Sheet in Java (Binary Trees, BSTs, Heaps, Priority Queues).
              </p>
            </div>
          </div>

          <a
            href={PORTFOLIO_DATA.profile.leetcode}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-full bg-black text-white text-xs font-semibold hover:bg-black/80 transition-colors shrink-0"
          >
            View LeetCode Profile (leetcode.com/u/mohity) ↗
          </a>
        </div>

        {/* Focus Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 sm:p-8 rounded-2xl bg-white/80 backdrop-blur-md border border-black/15 shadow-md flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-black text-white">
                  Active Prep
                </span>
                <span className="text-xs font-mono text-black/50">Daily Discipline</span>
              </div>

              <h3
                className="text-[22px] sm:text-[25px] font-medium text-black tracking-tight"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                Data Structures & Algorithms
              </h3>
              <p className="text-[15px] font-medium text-black/70 mt-1 mb-5">
                Striver's SDE Sheet in Java
              </p>

              <ul className="space-y-3 text-[14px] sm:text-[15px] text-black/90">
                <li className="flex items-start gap-2.5">
                  <span className="text-black font-bold">•</span>
                  <span>Deep-diving Binary Trees & Binary Search Trees (BSTs)</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-black font-bold">•</span>
                  <span>Mastering Heaps & Priority Queues implementations in Java</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-black font-bold">•</span>
                  <span>125+ solved LeetCode problems preparing for top product company standards</span>
                </li>
              </ul>
            </div>

            <div className="mt-8 pt-4 border-t border-black/10 flex items-center justify-between text-xs text-black/60">
              <span>Language: Java</span>
              <span>125+ LeetCode Solved</span>
            </div>
          </div>

          <div className="p-6 sm:p-8 rounded-2xl bg-white/80 backdrop-blur-md border border-black/15 shadow-md flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-black text-white">
                  Architecture
                </span>
                <span className="text-xs font-mono text-black/50">System Design</span>
              </div>

              <h3
                className="text-[22px] sm:text-[25px] font-medium text-black tracking-tight"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                High-Scale System Design
              </h3>
              <p className="text-[15px] font-medium text-black/70 mt-1 mb-5">
                Backend Infrastructure Fundamentals
              </p>

              <ul className="space-y-3 text-[14px] sm:text-[15px] text-black/90">
                <li className="flex items-start gap-2.5">
                  <span className="text-black font-bold">•</span>
                  <span>Client-Server paradigms, DNS resolution, & HTTP/2 protocol internals</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-black font-bold">•</span>
                  <span>High-throughput database indexing, caching (Redis), & load balancing</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-black font-bold">•</span>
                  <span>Architecting fault-tolerant Apache Kafka NRT data streams</span>
                </li>
              </ul>
            </div>

            <div className="mt-8 pt-4 border-t border-black/10 flex items-center justify-between text-xs text-black/60">
              <span>Domain: Distributed Systems</span>
              <span>Production Scale</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
