import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Sparkles, Layers, CheckCircle } from 'lucide-react';
import { ProjectItem } from '../types';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div
        id="project-modal-overlay"
        className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6 md:p-10 bg-black/85 backdrop-blur-md overflow-y-auto"
        onClick={onClose}
      >
        <motion.div
          id="project-modal-dialog"
          initial={{ opacity: 0, scale: 0.93, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.93, y: 30 }}
          transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          className="relative w-full max-w-5xl bg-[#111111] border-2 border-[#D7E2EA]/30 rounded-[32px] sm:rounded-[48px] p-5 sm:p-8 md:p-10 text-[#D7E2EA] shadow-2xl my-auto"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close button */}
          <button
            id="close-project-modal"
            type="button"
            onClick={onClose}
            className="absolute top-6 right-6 w-11 h-11 rounded-full border border-[#D7E2EA]/30 bg-[#1A1A1A] flex items-center justify-center text-[#D7E2EA] hover:bg-[#D7E2EA]/20 transition-all cursor-pointer z-20"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Header info */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pr-12">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="text-sm font-semibold tracking-widest text-[#BBCCD7] uppercase bg-white/10 px-3 py-1 rounded-full">
                  {project.category} Case Study
                </span>
                <span className="text-sm text-gray-400 font-mono">#{project.id}</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-white">
                {project.name}
              </h2>
            </div>

            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border-2 border-[#D7E2EA] text-[#D7E2EA] font-medium uppercase tracking-widest px-6 py-2.5 text-xs sm:text-sm hover:bg-[#D7E2EA]/10 transition-colors"
              >
                <span>Visit Case</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>

          {/* Project Details */}
          {project.tagline && (
            <p className="text-base sm:text-lg text-gray-300 mb-6 font-light max-w-3xl">
              {project.tagline}
            </p>
          )}

          {project.tools && project.tools.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-8">
              {project.tools.map((tool) => (
                <span
                  key={tool}
                  className="px-3 py-1 text-xs rounded-full bg-[#202020] border border-white/10 text-gray-300 flex items-center gap-1.5"
                >
                  <Sparkles className="w-3 h-3 text-purple-400" />
                  {tool}
                </span>
              ))}
            </div>
          )}

          {/* Bento Gallery Collage */}
          <div className="grid grid-cols-1 md:grid-cols-12 auto-rows-fr gap-4 sm:gap-6">
            
            {/* Top Wide */}
            <div className="md:col-span-8 overflow-hidden rounded-[28px] sm:rounded-[36px] border border-white/10 bg-[#161616] group min-h-[250px] sm:min-h-[320px]">
              <img
                src={project.col1TopImage}
                alt={`${project.name} preview 1`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
            </div>
            
            {/* Top Small/Tall */}
            <div className="md:col-span-4 overflow-hidden rounded-[28px] sm:rounded-[36px] border border-white/10 bg-[#161616] group min-h-[250px] sm:min-h-[320px]">
              <img
                src={project.col1BottomImage}
                alt={`${project.name} preview 2`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Bottom Row */}
            {project.col2BottomImage ? (
              <>
                {/* Bottom Small/Tall */}
                <div className="md:col-span-4 overflow-hidden rounded-[28px] sm:rounded-[36px] border border-white/10 bg-[#161616] group min-h-[250px] sm:min-h-[320px]">
                  <img
                    src={project.col2BottomImage}
                    alt={`${project.name} preview 3`}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                </div>
                {/* Bottom Wide */}
                <div className="md:col-span-8 overflow-hidden rounded-[28px] sm:rounded-[36px] border border-white/10 bg-[#161616] group min-h-[250px] sm:min-h-[320px]">
                  <img
                    src={project.col2Image}
                    alt={`${project.name} preview 4`}
                    className="w-full h-full object-cover object-left-top transition-transform duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </>
            ) : (
              <div className="md:col-span-12 overflow-hidden rounded-[28px] sm:rounded-[36px] border border-white/10 bg-[#161616] group min-h-[300px] sm:min-h-[400px]">
                <img
                  src={project.col2Image}
                  alt={`${project.name} preview hero`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
