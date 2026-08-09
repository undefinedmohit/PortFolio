import React from 'react';
import { BackgroundVideo } from './components/BackgroundVideo';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ExperienceSection } from './components/ExperienceSection';
import { ProjectsSection } from './components/ProjectsSection';
import { SkillsSection } from './components/SkillsSection';
import { SharpeningSection } from './components/SharpeningSection';
import { FooterSection } from './components/FooterSection';

export const App: React.FC = () => {
  return (
    <div className="relative min-h-screen w-full overflow-x-hidden bg-white/20 select-none">
      {/* Mouse-scrub controlled background video */}
      <BackgroundVideo />

      {/* Header Navbar */}
      <Navbar />

      {/* Hero Section */}
      <HeroSection />

      {/* Content Sections */}
      <div className="relative z-10 space-y-8">
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
        <SharpeningSection />
      </div>

      {/* Footer / Contact with Contact Form & Social Links */}
      <FooterSection />
    </div>
  );
};

export default App;
