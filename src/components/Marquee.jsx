import React from 'react';
import { motion } from 'framer-motion';

const Marquee = () => {
  const words = ["STAY ICONIC", "BUILD BOLD", "DESIGN DIFFERENT", "CODE CRAFT", "MOTION MAGIC"];
  
  return (
    <div className="relative py-10 bg-[#020202] overflow-hidden flex flex-col gap-4 z-[90]">
      
      {/* Top Row - Forward */}
      <div className="flex whitespace-nowrap overflow-hidden border-y border-white/5 py-6">
        <motion.div 
          animate={{ x: [0, -1000] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="flex gap-20 items-center px-10"
        >
          {[...Array(6)].map((_, i) => (
            <div key={i} className="flex gap-20">
              {words.map((word, idx) => (
                <span 
                  key={idx} 
                  className="text-7xl sm:text-9xl font-black font-syne text-transparent border-text stroke-white/20 select-none"
                  style={{ WebkitTextStroke: "1px rgba(255,255,255,0.1)" }}
                >
                  {word}
                </span>
              ))}
            </div>
          ))}
        </motion.div>
      </div>

      {/* Bottom Row - Reverse */}
      <div className="flex whitespace-nowrap overflow-hidden border-b border-white/5 pb-6">
        <motion.div 
          animate={{ x: [-1000, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="flex gap-20 items-center px-10"
        >
          {[...Array(6)].map((_, i) => (
            <div key={i} className="flex gap-20">
              {words.map((word, idx) => (
                <span 
                  key={idx} 
                  className="text-7xl sm:text-9xl font-black font-syne text-white/5 select-none"
                >
                  {word}
                </span>
              ))}
            </div>
          ))}
        </motion.div>
      </div>

      {/* Decorative Overlay */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-[#020202] via-transparent to-[#020202] z-10" />
    </div>
  );
};

export default Marquee;
