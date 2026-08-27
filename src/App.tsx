import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { HeroSection } from './components/HeroSection';
import { MarqueeSection } from './components/MarqueeSection';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { VideoSection } from './components/VideoSection';

import { FoldcraftSection } from './components/FoldcraftSection';
import { ContactModal } from './components/ContactModal';
import { ProjectModal } from './components/ProjectModal';
import { ProjectItem } from './types';
import { Preloader } from './components/Preloader';

export default function App() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isContactOpen, setIsContactOpen] = useState<boolean>(false);
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const handleOpenContact = () => setIsContactOpen(true);
  const handleCloseContact = () => setIsContactOpen(false);

  const handleSelectProject = (project: ProjectItem) => setSelectedProject(project);
  const handleCloseProject = () => setSelectedProject(null);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && <Preloader onLoadingComplete={() => setIsLoading(false)} />}
      </AnimatePresence>

      <main
        id="portfolio-main-wrapper"
        className={`relative w-full min-h-screen bg-[#0C0C0C] text-[#D7E2EA] select-none ${isLoading ? 'h-screen overflow-hidden' : ''}`}
        style={{ overflowX: 'clip' }}
      >
      {/* 1. Hero Section */}
      <HeroSection onOpenContact={handleOpenContact} />

      {/* 2. Marquee Section */}
      <MarqueeSection />

      {/* 3. About Section */}
      <AboutSection onOpenContact={handleOpenContact} />

      {/* 4. Services Section */}
      <ServicesSection />

      {/* 5. Showcase Video Section */}
      <VideoSection />
      {/* 6. Foldcraft Landing Section */}
      <FoldcraftSection />

      {/* Interactive Contact Modal */}
      <ContactModal isOpen={isContactOpen} onClose={handleCloseContact} />

      {/* Interactive Project Details Lightbox Modal */}
      <ProjectModal project={selectedProject} onClose={handleCloseProject} />
    </main>
    </>
  );
}
