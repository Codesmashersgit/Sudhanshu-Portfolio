import React from 'react';
import { FadeIn } from './FadeIn';
import { SERVICES } from '../data/portfolioData';

export const ServicesSection: React.FC = () => {
  return (
    <section
      id="services"
      className="relative w-full bg-[#FFFFFF] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 z-0 select-none text-[#0C0C0C]"
    >
      <div className="max-w-5xl mx-auto w-full">
        {/* Heading: Services */}
        <FadeIn id="services-heading-fade" delay={0} y={30} className="w-full text-center mb-16 sm:mb-20 md:mb-28">
          <h2
            id="services-heading"
            className="text-[#0C0C0C] font-black uppercase leading-none text-center"
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
          >
            Services
          </h2>
        </FadeIn>

        {/* 5 Service items list */}
        <div id="services-list" className="w-full flex flex-col border-t border-[rgba(12,12,12,0.15)]">
          {SERVICES.map((service, index) => (
            <FadeIn
              key={service.id}
              id={`service-item-fade-${service.id}`}
              delay={index * 0.1}
              y={25}
              className="w-full"
            >
              <div
                id={`service-item-${service.id}`}
                className="w-full py-8 sm:py-10 md:py-12 border-b border-[rgba(12,12,12,0.15)] flex flex-col md:flex-row md:items-center justify-between gap-6 md:gap-12 group transition-colors duration-300 hover:bg-black/[0.02] px-2 sm:px-4 rounded-2xl"
              >
                {/* Left: Number */}
                <div
                  id={`service-num-${service.id}`}
                  className="font-black text-[#0C0C0C] leading-none shrink-0"
                  style={{ fontSize: 'clamp(3rem, 10vw, 140px)' }}
                >
                  {service.id}
                </div>

                {/* Right: Name + Description stacked vertically */}
                <div id={`service-content-${service.id}`} className="flex flex-col gap-2 md:gap-3 flex-1 md:max-w-2xl">
                  <h3
                    id={`service-name-${service.id}`}
                    className="font-medium uppercase text-[#0C0C0C] leading-tight tracking-tight"
                    style={{ fontSize: 'clamp(1rem, 2.2vw, 2.1rem)' }}
                  >
                    {service.name}
                  </h3>
                  <p
                    id={`service-desc-${service.id}`}
                    className="font-light leading-relaxed text-[#0C0C0C] opacity-60 max-w-2xl"
                    style={{ fontSize: 'clamp(0.85rem, 1.6vw, 1.25rem)' }}
                  >
                    {service.description}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};
