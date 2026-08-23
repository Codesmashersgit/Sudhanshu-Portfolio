import React, { useState, useEffect, useCallback, useRef } from 'react';
import { ArrowLeft, ArrowRight, Github, Linkedin } from 'lucide-react';

const IMAGES = [
  { src: 'https://fifth-gentle-45902158.figma.site/_components/v2/4de492f6d9cf8244ad5293233e5c6f52407d42fc/1.02464a56.png', bg: '#F4845F', panel: '#F79B7F' },
  { src: 'https://fifth-gentle-45902158.figma.site/_components/v2/4de492f6d9cf8244ad5293233e5c6f52407d42fc/2.b977faab.png', bg: '#6BBF7A', panel: '#85CC92' },
  { src: 'https://fifth-gentle-45902158.figma.site/_components/v2/4de492f6d9cf8244ad5293233e5c6f52407d42fc/3.4df853b4.png', bg: '#E882B4', panel: '#ED9DC4' },
  { src: 'https://fifth-gentle-45902158.figma.site/_components/v2/4de492f6d9cf8244ad5293233e5c6f52407d42fc/4.4457fbce.png', bg: '#6EB5FF', panel: '#8DC4FF' },
];

export const HeroSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Preload images
    IMAGES.forEach((item) => {
      const img = new Image();
      img.src = item.src;
    });

    const checkMobile = () => setIsMobile(window.innerWidth < 640);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const offsetTop = rect.top; 
      const totalScrollable = rect.height - window.innerHeight;
      
      if (offsetTop > 0) {
        if (activeIndex !== 0) setActiveIndex(0);
        return;
      }
      
      if (offsetTop < -totalScrollable) {
        if (activeIndex !== 3) setActiveIndex(3);
        return;
      }
      
      const scrolled = -offsetTop;
      const progress = scrolled / totalScrollable;
      const newIndex = Math.min(3, Math.floor(progress * 4));
      
      if (newIndex !== activeIndex) {
        setActiveIndex(newIndex);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeIndex]);

  const navigate = useCallback((direction: 'next' | 'prev') => {
    if (!containerRef.current) return;
    const nextIndex = direction === 'next' 
      ? (activeIndex + 1) % 4 
      : (activeIndex + 3) % 4;
      
    const rect = containerRef.current.getBoundingClientRect();
    const currentScrollY = window.scrollY;
    const offsetTop = rect.top + currentScrollY; 
    const totalScrollable = rect.height - window.innerHeight;
    const segmentHeight = totalScrollable / 4;
    
    // Smooth scroll to the target segment's middle
    const targetY = offsetTop + (nextIndex * segmentHeight) + (segmentHeight / 2);
    
    window.scrollTo({
      top: targetY,
      behavior: 'smooth'
    });
  }, [activeIndex]);

  const getRole = (idx: number) => {
    if (idx === activeIndex) return 'center';
    if (idx === (activeIndex + 3) % 4) return 'left';
    if (idx === (activeIndex + 1) % 4) return 'right';
    return 'back';
  };

  const getStyles = (role: string) => {
    const base = {
      transition: 'transform 650ms cubic-bezier(0.4,0,0.2,1), filter 650ms cubic-bezier(0.4,0,0.2,1), opacity 650ms cubic-bezier(0.4,0,0.2,1), left 650ms cubic-bezier(0.4,0,0.2,1), bottom 650ms cubic-bezier(0.4,0,0.2,1), height 650ms cubic-bezier(0.4,0,0.2,1)',
      willChange: 'transform, filter, opacity, left, bottom, height',
    };
    if (role === 'center') {
      return {
        ...base,
        transform: `translateX(-50%) scale(${isMobile ? 1.25 : 1.68})`,
        filter: 'blur(0px)',
        opacity: 1,
        zIndex: 20,
        left: '50%',
        height: isMobile ? '60%' : '92%',
        bottom: isMobile ? '22%' : '0%',
      };
    }
    if (role === 'left') {
      return {
        ...base,
        transform: 'translateX(-50%) scale(1)',
        filter: 'blur(2px)',
        opacity: 0.85,
        zIndex: 10,
        left: isMobile ? '20%' : '30%',
        height: isMobile ? '16%' : '28%',
        bottom: isMobile ? '32%' : '12%',
      };
    }
    if (role === 'right') {
      return {
        ...base,
        transform: 'translateX(-50%) scale(1)',
        filter: 'blur(2px)',
        opacity: 0.85,
        zIndex: 10,
        left: isMobile ? '80%' : '70%',
        height: isMobile ? '16%' : '28%',
        bottom: isMobile ? '32%' : '12%',
      };
    }
    // back
    return {
      ...base,
      transform: 'translateX(-50%) scale(1)',
      filter: 'blur(4px)',
      opacity: 1,
      zIndex: 5,
      left: '50%',
      height: isMobile ? '13%' : '22%',
      bottom: isMobile ? '32%' : '12%',
    };
  };

  const svgNoise = `data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.08'/%3E%3C/svg%3E`;

  return (
    <div ref={containerRef} className="relative w-full h-[400vh]">
      <div 
        className="sticky top-0 w-full overflow-hidden font-inter transition-colors duration-650 ease-[cubic-bezier(0.4,0,0.2,1)]"
        style={{ backgroundColor: IMAGES[activeIndex].bg }}
      >
        <div className="relative w-full h-[100vh] overflow-hidden">
        {/* Grain Overlay */}
        <div 
          className="absolute inset-0 pointer-events-none z-50 opacity-40"
          style={{ 
            backgroundImage: `url("${svgNoise}")`,
            backgroundSize: '200px 200px',
            backgroundRepeat: 'repeat'
          }}
        />

        {/* Giant Ghost Text */}
        <div 
          className="absolute inset-x-0 flex items-center justify-center pointer-events-none select-none z-2 font-anton uppercase text-white whitespace-nowrap"
          style={{ 
            top: '18%', 
            fontSize: 'clamp(90px, 28vw, 380px)', 
            fontWeight: 900, 
            lineHeight: 1, 
            letterSpacing: '-0.02em' 
          }}
        >
          PORTFOLIO
        </div>

        {/* Carousel */}
        <div className="absolute inset-0 z-3">
          {IMAGES.map((item, idx) => {
            const role = getRole(idx);
            return (
              <div 
                key={idx}
                className="absolute"
                style={{ 
                  aspectRatio: '0.6 / 1', 
                  ...getStyles(role) as React.CSSProperties
                }}
              >
                <img 
                  src={item.src} 
                  alt={`Toonhub Figurine ${idx + 1}`} 
                  draggable={false}
                  className="w-full h-full object-contain object-bottom pointer-events-none"
                />
              </div>
            );
          })}
        </div>

        {/* Bottom-Right Nav Buttons */}
        <div className="absolute bottom-20 right-4 sm:bottom-28 sm:right-10 z-60 flex gap-4">
          <button 
            onClick={() => navigate('prev')}
            className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-transparent border-2 border-white flex items-center justify-center text-white transition-all duration-150 hover:scale-108 hover:bg-white/12 cursor-pointer outline-none"
          >
            <ArrowLeft size={26} strokeWidth={2.25} />
          </button>
          <button 
            onClick={() => navigate('next')}
            className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-transparent border-2 border-white flex items-center justify-center text-white transition-all duration-150 hover:scale-108 hover:bg-white/12 cursor-pointer outline-none"
          >
            <ArrowRight size={26} strokeWidth={2.25} />
          </button>
        </div>

        {/* Bottom-Right Social Icons */}
        <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-10 z-60 flex gap-3">
          <a 
            href="https://github.com/Codesmashersgit" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="w-10 h-10 rounded-full border border-white/50 flex items-center justify-center text-white hover:bg-white/10 hover:border-white transition-all cursor-pointer"
          >
            <Github size={18} strokeWidth={2} />
          </a>
          <a 
            href="https://www.linkedin.com/in/sudhanshu-raj-45b205250" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="w-10 h-10 rounded-full border border-white/50 flex items-center justify-center text-white hover:bg-white/10 hover:border-white transition-all cursor-pointer"
          >
            <Linkedin size={18} strokeWidth={2} />
          </a>
        </div>

        </div>
      </div>
    </div>
  );
};
