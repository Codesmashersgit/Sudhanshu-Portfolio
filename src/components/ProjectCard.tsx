import React, { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';
import { ProjectItem } from '../types';
import { LiveProjectButton } from './LiveProjectButton';

interface ProjectCardProps {
  project: ProjectItem;
  index: number;
  totalCards: number;
  progress: MotionValue<number>;
  range: [number, number];
  targetScale: number;
  onSelectProject: (project: ProjectItem) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  index,
  totalCards,
  progress,
  range,
  targetScale,
  onSelectProject,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Scale transforms from 1 down to targetScale over the card's scroll range
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      ref={containerRef}
      id={`project-card-container-${project.id}`}
      className="sticky top-20 sm:top-24 md:top-28 w-full flex items-center justify-center mb-16 sm:mb-20 md:mb-24"
      style={{
        top: `calc(5rem + ${index * 28}px)`,
      }}
    >
      <motion.div
        id={`project-card-${project.id}`}
        style={{
          scale,
          top: `${index * 28}px`,
        }}
        className="w-full max-w-6xl bg-[#0C0C0C] border-2 border-[#D7E2EA] rounded-[40px] sm:rounded-[50px] md:rounded-[60px] p-4 sm:p-6 md:p-8 flex flex-col gap-6 sm:gap-8 shadow-[0_20px_60px_rgba(0,0,0,0.8)] will-change-transform"
      >
        {/* Top Row: Number, category label, project name, Live Project button */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 w-full">
          <div className="flex items-center gap-4 sm:gap-6 md:gap-8 flex-wrap">
            {/* Number (huge font, like services) */}
            <span
              id={`project-num-${project.id}`}
              className="font-black text-[#D7E2EA] leading-none"
              style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}
            >
              {project.id}
            </span>

            {/* Category label & Project Name */}
            <div className="flex items-center gap-3 sm:gap-4 flex-wrap">
              <span
                id={`project-category-${project.id}`}
                className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-[#BBCCD7] px-3 py-1 rounded-full border border-[#D7E2EA]/30 bg-white/5"
              >
                {project.category}
              </span>
              <h3
                id={`project-name-${project.id}`}
                className="font-medium uppercase text-white tracking-tight leading-tight"
                style={{ fontSize: 'clamp(1.1rem, 2.4vw, 2.2rem)' }}
              >
                {project.name}
              </h3>
            </div>
          </div>

          {/* Ghost button: Live Project */}
          <div className="shrink-0">
            <LiveProjectButton
              id={`project-live-btn-${project.id}`}
              onClick={() => onSelectProject(project)}
              showIcon={true}
            />
          </div>
        </div>

        {/* Bottom Row: Two-column image grid (Left 40%, Right 60%) */}
        <div
          id={`project-grid-${project.id}`}
          className="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-6 w-full cursor-pointer"
          onClick={() => onSelectProject(project)}
        >
          {/* Left Column (40% width / 5 cols) - 2 stacked images */}
          <div className="md:col-span-5 flex flex-col gap-4 sm:gap-6">
            {/* Left Top Image */}
            <div
              className="w-full overflow-hidden rounded-[40px] sm:rounded-[50px] md:rounded-[60px] bg-[#141414] group"
              style={{
                height: 'clamp(130px, 16vw, 230px)',
              }}
            >
              <img
                src={project.col1TopImage}
                alt={`${project.name} asset 1`}
                loading="lazy"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover rounded-[40px] sm:rounded-[50px] md:rounded-[60px] transition-transform duration-700 group-hover:scale-105"
              />
            </div>

            {/* Left Bottom Image */}
            <div
              className="w-full overflow-hidden rounded-[40px] sm:rounded-[50px] md:rounded-[60px] bg-[#141414] group"
              style={{
                height: 'clamp(160px, 22vw, 340px)',
              }}
            >
              <img
                src={project.col1BottomImage}
                alt={`${project.name} asset 2`}
                loading="lazy"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover rounded-[40px] sm:rounded-[50px] md:rounded-[60px] transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </div>

          {/* Right Column (60% width / 7 cols) - 1 tall image */}
          <div className="md:col-span-7">
            <div className="w-full h-full min-h-[280px] sm:min-h-[360px] md:min-h-[460px] overflow-hidden rounded-[40px] sm:rounded-[50px] md:rounded-[60px] bg-[#141414] group">
              <img
                src={project.col2Image}
                alt={`${project.name} asset main`}
                loading="lazy"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover rounded-[40px] sm:rounded-[50px] md:rounded-[60px] transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
