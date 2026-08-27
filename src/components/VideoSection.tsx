import React, { useRef, useEffect } from 'react';

export const VideoSection: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.3, // Trigger play when at least 30% is visible
    };

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          videoRef.current?.play().catch(e => console.log('Autoplay prevented:', e));
        } else {
          videoRef.current?.pause();
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, options);

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <section 
      ref={containerRef}
      className="w-full bg-[#524F55] flex items-center justify-center py-20 px-4 sm:px-8 overflow-hidden select-none"
    >
      <div className="w-full max-w-5xl rounded-3xl overflow-hidden shadow-2xl relative">
        <video
          ref={videoRef}
          src="https://cdn.recent.design/items/d0zj0fm/0/1280x1280.mp4"
          className="w-full h-auto object-cover opacity-90 hover:opacity-100 transition-opacity duration-500"
          muted
          playsInline
          loop
          preload="metadata"
        />
      </div>
    </section>
  );
};
