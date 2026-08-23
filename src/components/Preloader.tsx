import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface PreloaderProps {
  onLoadingComplete: () => void;
}

export const Preloader: React.FC<PreloaderProps> = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate asset loading with a randomized interval
    let current = 0;
    const interval = setInterval(() => {
      // jump by random amount
      current += Math.floor(Math.random() * 15) + 5;
      
      if (current >= 100) {
        current = 100;
        clearInterval(interval);
        setTimeout(() => {
          onLoadingComplete();
        }, 500); // Wait a half second at 100%
      }
      setProgress(current);
    }, 150);

    return () => clearInterval(interval);
  }, [onLoadingComplete]);

  return (
    <motion.div
      initial={{ y: 0 }}
      exit={{ y: '-100%', transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#0C0C0C] text-[#D7E2EA]"
    >
      {/* Percentage Display */}
      <div className="flex flex-col items-center overflow-hidden">
        <motion.div 
          className="text-[4rem] md:text-[8rem] font-bold tracking-tighter tabular-nums leading-none"
        >
          {progress}%
        </motion.div>
        
        {/* Loading text / bar */}
        <div className="w-[200px] h-[2px] bg-white/20 mt-8 rounded-full overflow-hidden">
          <motion.div 
            className="h-full bg-[#D7E2EA]"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ ease: "linear", duration: 0.2 }}
          />
        </div>
        <motion.div 
          className="uppercase tracking-[0.3em] text-xs font-semibold mt-6 text-white/50"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          Loading assets
        </motion.div>
      </div>
    </motion.div>
  );
};
