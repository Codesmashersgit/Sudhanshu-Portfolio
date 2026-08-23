import React from 'react';

export const FoldcraftSection: React.FC = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-black font-anton uppercase text-white">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover object-[70%_center]"
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260622_204221_5339e40b-e73d-4ab0-9c65-79c18c66fd50.mp4"
      />

      {/* Hero Content (z-10) */}
      <div className="relative z-10 flex h-screen flex-col justify-center px-6 md:px-12 lg:px-16">
        <div className="max-w-5xl">
          <div className="mb-4 sm:mb-6 text-sm sm:text-base text-white/80 animate-[fadeSlideUp_0.8s_ease_0.2s_both] tracking-widest">
            Brand & Visual Storytelling
          </div>
          <h1 className="leading-[1.05] tracking-tight text-white text-5xl sm:text-7xl md:text-8xl lg:text-[110px] animate-[fadeSlideUp_0.8s_ease_0.4s_both]">
            Shaping visual <br />
            narratives, <br />
            one pixel at a time.
          </h1>
        </div>
      </div>
    </section>
  );
};
