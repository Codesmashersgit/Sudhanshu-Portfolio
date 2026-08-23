import React, { useRef, useState, useEffect } from 'react';
import { MARQUEE_ROW_1, MARQUEE_ROW_2 } from '../data/portfolioData';

export const MarqueeSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [offset, setOffset] = useState<number>(0);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (sectionRef.current) {
            const rect = sectionRef.current.getBoundingClientRect();
            const sectionTop = rect.top + window.scrollY;
            const currentOffset = (window.scrollY - sectionTop + window.innerHeight) * 0.3;
            setOffset(currentOffset);
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Initial call
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Triple arrays for seamless rendering
  const row1Tripled = [...MARQUEE_ROW_1, ...MARQUEE_ROW_1, ...MARQUEE_ROW_1];
  const row2Tripled = [...MARQUEE_ROW_2, ...MARQUEE_ROW_2, ...MARQUEE_ROW_2];

  const row1Translate = offset - 200;
  const row2Translate = -(offset - 200);

  return (
    <section
      ref={sectionRef}
      id="marquee-section"
      className="w-full bg-[#0C0C0C] pt-24 sm:pt-32 md:pt-40 pb-10 overflow-hidden select-none"
    >
      <div className="flex flex-col gap-3 w-full">
        {/* Row 1: Moves RIGHT on scroll */}
        <div className="overflow-hidden w-full">
          <div
            id="marquee-row-1"
            className="flex gap-3 w-max"
            style={{
              transform: `translateX(${row1Translate}px)`,
              willChange: 'transform',
              transition: 'transform 0.05s linear',
            }}
          >
            {row1Tripled.map((imgSrc, idx) => (
              <div
                key={`row1-${idx}`}
                id={`marquee-tile-r1-${idx}`}
                className="w-[300px] h-[190px] sm:w-[360px] sm:h-[230px] md:w-[420px] md:h-[270px] shrink-0 rounded-2xl overflow-hidden bg-[#161616] border border-white/5 shadow-lg"
              >
                <img
                  src={imgSrc}
                  alt={`Motion 3D showcase ${idx + 1}`}
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover select-none pointer-events-none"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Row 2: Moves LEFT on scroll */}
        <div className="overflow-hidden w-full">
          <div
            id="marquee-row-2"
            className="flex gap-3 w-max"
            style={{
              transform: `translateX(${row2Translate}px)`,
              willChange: 'transform',
              transition: 'transform 0.05s linear',
            }}
          >
            {row2Tripled.map((imgSrc, idx) => (
              <div
                key={`row2-${idx}`}
                id={`marquee-tile-r2-${idx}`}
                className="w-[300px] h-[190px] sm:w-[360px] sm:h-[230px] md:w-[420px] md:h-[270px] shrink-0 rounded-2xl overflow-hidden bg-[#161616] border border-white/5 shadow-lg"
              >
                <img
                  src={imgSrc}
                  alt={`Motion 3D showcase second ${idx + 1}`}
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover select-none pointer-events-none"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
