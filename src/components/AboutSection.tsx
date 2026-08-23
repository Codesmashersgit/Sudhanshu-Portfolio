import React from 'react';
import { FadeIn } from './FadeIn';
import { AnimatedText } from './AnimatedText';
import { ContactButton } from './ContactButton';
import { ABOUT_DECORATIONS, ABOUT_BIO_TEXT } from '../data/portfolioData';

interface AboutSectionProps {
  onOpenContact: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenContact }) => {
  return (
    <section
      id="about"
      className="relative min-h-screen w-full bg-[#0C0C0C] flex flex-col items-center justify-center px-5 sm:px-8 md:px-10 py-20 overflow-hidden select-none"
    >
      {/* Corner 1: Top-Left Moon Icon */}
      <FadeIn
        id="about-deco-moon"
        delay={0.1}
        x={-80}
        y={0}
        duration={0.9}
        className="absolute top-[4%] left-[1%] sm:left-[2%] md:left-[4%] z-10 pointer-events-none"
      >
        <img
          src={ABOUT_DECORATIONS.moon}
          alt="3D Moon Icon"
          referrerPolicy="no-referrer"
          className="w-[120px] sm:w-[160px] md:w-[210px] object-contain drop-shadow-[0_10px_30px_rgba(0,0,0,0.6)]"
        />
      </FadeIn>

      {/* Corner 2: Bottom-Left 3D Object */}
      <FadeIn
        id="about-deco-object"
        delay={0.25}
        x={-80}
        y={0}
        duration={0.9}
        className="absolute bottom-[8%] left-[3%] sm:left-[6%] md:left-[10%] z-10 pointer-events-none"
      >
        <img
          src={ABOUT_DECORATIONS.object3d}
          alt="3D Geometric Element"
          referrerPolicy="no-referrer"
          className="w-[100px] sm:w-[140px] md:w-[180px] object-contain drop-shadow-[0_10px_30px_rgba(0,0,0,0.6)]"
        />
      </FadeIn>

      {/* Corner 3: Top-Right Lego Icon */}
      <FadeIn
        id="about-deco-lego"
        delay={0.15}
        x={80}
        y={0}
        duration={0.9}
        className="absolute top-[4%] right-[1%] sm:right-[2%] md:right-[4%] z-10 pointer-events-none"
      >
        <img
          src={ABOUT_DECORATIONS.lego}
          alt="3D Lego Icon"
          referrerPolicy="no-referrer"
          className="w-[120px] sm:w-[160px] md:w-[210px] object-contain drop-shadow-[0_10px_30px_rgba(0,0,0,0.6)]"
        />
      </FadeIn>

      {/* Corner 4: Bottom-Right 3D Group */}
      <FadeIn
        id="about-deco-group"
        delay={0.3}
        x={80}
        y={0}
        duration={0.9}
        className="absolute bottom-[8%] right-[3%] sm:right-[6%] md:right-[10%] z-10 pointer-events-none"
      >
        <img
          src={ABOUT_DECORATIONS.group3d}
          alt="3D Group Icon"
          referrerPolicy="no-referrer"
          className="w-[130px] sm:w-[170px] md:w-[220px] object-contain drop-shadow-[0_10px_30px_rgba(0,0,0,0.6)]"
        />
      </FadeIn>

      {/* Main Centered Content */}
      <div className="relative z-20 flex flex-col items-center text-center max-w-4xl mx-auto w-full">
        {/* Heading: About me */}
        <FadeIn id="about-heading-fade" delay={0} y={40} className="w-full mb-10 sm:mb-14 md:mb-16">
          <h2
            id="about-heading"
            className="hero-heading font-black uppercase leading-none tracking-tight text-center"
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
          >
            About me
          </h2>
        </FadeIn>

        {/* Animated paragraph */}
        <div id="about-text-container" className="w-full flex justify-center">
          <AnimatedText
            id="about-animated-bio"
            text={ABOUT_BIO_TEXT}
            className="text-[#D7E2EA] font-medium text-center leading-relaxed max-w-3xl"
          />
        </div>

        {/* Contact button below */}
        <div className="mt-16 sm:mt-20 md:mt-24">
          <FadeIn id="about-contact-btn-fade" delay={0.2} y={20}>
            <ContactButton id="about-contact-btn" onClick={onOpenContact} />
          </FadeIn>
        </div>
      </div>
    </section>
  );
};
