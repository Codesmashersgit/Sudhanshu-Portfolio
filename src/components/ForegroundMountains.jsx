import React from 'react'
import { motion } from 'framer-motion'

const FarmerSilhouette = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className} xmlns="http://www.w3.org/2000/svg" fill="currentColor">
    <ellipse cx="10" cy="14" rx="3" ry="5" />
    <circle cx="10" cy="7" r="2.5" />
    <path d="M3 8 L10 2 L17 8 Z" />
    <path d="M9 18 V23 M11 18 V23" stroke="currentColor" strokeWidth="2" />
    <path d="M11 12 L16 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M14 3 L18 24" stroke="currentColor" strokeWidth="1.5" />
  </svg>
);

const ForegroundMountains = () => {
  return (
    <div className="fixed inset-0 z-30 pointer-events-none overflow-hidden">
      {/* 3. Mid-ground Hills (Layer 2) */}
      <div className="absolute bottom-0 right-0 w-[80%] h-[25%] bg-[#240b36] rounded-t-[100%] translate-x-[10%] blur-[1px] pointer-events-auto" />
      <div className="absolute bottom-0 left-[-20%] w-[70%] h-[20%] bg-[#1a0525] rounded-t-[100%] blur-[1px] pointer-events-auto" />

      {/* 4. Foreground Silhouette / Ground Area */}
      <div className="absolute bottom-0 left-0 w-full h-[12%] bg-[#08010f] border-t-2 border-orange-900/30 pointer-events-auto" />
      
      {/* Animated Farmers Walking Across Foreground */}
      <motion.div 
        className="absolute bottom-[11.5%] flex items-end gap-3 sm:gap-5 text-[#08010f] z-10"
        animate={{ x: ['110vw', '-40vw'] }}
        transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
      >
        <FarmerSilhouette className="w-10 h-10 sm:w-16 sm:h-16 -rotate-6" />
        <FarmerSilhouette className="w-8 h-8 sm:w-12 sm:h-12 scale-x-[-1] mb-1" />
        <FarmerSilhouette className="w-12 h-12 sm:w-20 sm:h-20 -rotate-3" />
        <FarmerSilhouette className="w-9 h-9 sm:w-14 sm:h-14 mb-1" />
      </motion.div>
      
      {/* Grass Silhouette overlay with Slower Swaying Wind Animation */}
      <motion.div 
        animate={{ skewX: [-2, 2, -2], x: [-5, 5, -5] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[11%] left-[-10%] w-[120%] h-[8%] opacity-100 origin-bottom"
        style={{ 
          backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 100 20\' xmlns=\'http://www.w3.org/2000/svg\' preserveAspectRatio=\'none\'%3E%3Cpath d=\'M0 20 Q 5 10 10 20 Q 15 5 20 20 Q 25 15 30 20 Q 35 2 40 20 Q 45 12 50 20 Q 55 8 60 20 Q 65 18 70 20 Q 75 4 80 20 Q 85 10 90 20 Q 95 6 100 20 L0 20 Z\' fill=\'%2308010f\'/%3E%3C/svg%3E")',
          backgroundSize: '100px 100%',
          backgroundRepeat: 'repeat-x',
          backgroundPosition: 'bottom'
        }}
      />
    </div>
  )
}

export default ForegroundMountains
