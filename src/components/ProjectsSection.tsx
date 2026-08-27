import React from 'react';
import { PROJECTS } from '../data/portfolioData';

export const ProjectsSection: React.FC = () => {
  return (
    <section id="projects" className="w-full bg-[#0C0C0C] py-24 sm:py-32 px-4 sm:px-8 flex flex-col items-center select-none">
      
      {/* Header */}
      <div className="w-full max-w-4xl text-center mb-16 sm:mb-24">
        <p className="text-[#FF5533] uppercase tracking-[0.2em] text-xs sm:text-sm font-semibold mb-6 flex items-center justify-center gap-2">
          <span>&rarr;</span> SELECTED WORKS
        </p>
        <h2 className="text-white text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight leading-tight mb-6">
          Design That <br className="hidden sm:block" /> Drives Results
        </h2>
        <p className="text-[#888888] text-base sm:text-lg max-w-2xl mx-auto">
          Hand-picked projects built for real brands, real goals, real growth.
        </p>
      </div>

      {/* Grid Container */}
      <div className="w-full max-w-6xl mx-auto">
        {/* We use a 1px gap with a white/15 background to create the inner border lines, 
            and an outer border to frame the entire grid. */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[1px] bg-white/15 border border-white/15">
          
          {PROJECTS.map((project, idx) => (
            <div 
              key={project.id || idx}
              className="bg-[#0C0C0C] p-6 sm:p-8 flex flex-col group cursor-pointer hover:bg-[#0f0f0f] transition-colors duration-300"
            >
              {/* Image Container */}
              <div className="w-full aspect-[4/3] bg-[#111] overflow-hidden mb-8 relative rounded-sm">
                <img 
                  src={project.col2Image || project.col1TopImage} 
                  alt={project.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100 grayscale-[0.2] group-hover:grayscale-0"
                />
              </div>

              {/* Text & Button Container */}
              <div className="flex justify-between items-end mt-auto">
                <div className="flex flex-col gap-1.5">
                  <h3 className="text-white text-lg sm:text-xl font-medium tracking-wide">
                    {project.name}
                  </h3>
                  <p className="text-[#888888] text-sm tracking-wide">
                    {project.category}
                  </p>
                </div>

                {/* Arrow Button */}
                <div className="w-10 h-10 min-w-[40px] rounded-full border border-white/20 flex items-center justify-center text-white transition-all duration-300 group-hover:bg-white group-hover:text-black group-hover:border-white">
                  <svg 
                    width="14" 
                    height="14" 
                    viewBox="0 0 14 14" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path 
                      d="M1 13L13 1M13 1H4M13 1V10" 
                      stroke="currentColor" 
                      strokeWidth="1.5" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
          ))}

        </div>
      </div>

    </section>
  );
};
