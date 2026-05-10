import React, { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { FaVolumeMute, FaVolumeUp } from 'react-icons/fa'

const SunsetBackground = () => {
  const [isMuted, setIsMuted] = useState(true);
  const audioRefBirds = useRef(null);
  const audioRefWind = useRef(null);

  // Generate random birds
  const birds = Array.from({ length: 15 }).map((_, i) => ({
    id: i,
    top: `${5 + Math.random() * 35}%`, // Upper portion of the sky
    duration: 25 + Math.random() * 25, // Slow, peaceful flying
    delay: Math.random() * 20,
    scale: 0.15 + Math.random() * 0.4
  }));

  // Generate wind lines/particles
  const windLines = Array.from({ length: 12 }).map((_, i) => ({
    id: i,
    top: `${10 + Math.random() * 80}%`,
    width: `${20 + Math.random() * 100}px`,
    duration: 8 + Math.random() * 10, // Slower, gentle wind
    delay: Math.random() * 5
  }));

  const toggleSound = () => {
    if (audioRefBirds.current && audioRefWind.current) {
      if (isMuted) {
        audioRefBirds.current.play().catch(e => console.error("Birds Audio blocked:", e));
        audioRefWind.current.play().catch(e => console.error("Wind Audio blocked:", e));
      } else {
        audioRefBirds.current.pause();
        audioRefWind.current.pause();
      }
      setIsMuted(!isMuted);
    }
  };

  // FarmerSilhouette moved to ForegroundMountains.jsx

  return (
    <>
      <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none bg-gradient-to-b from-[#2b1055] via-[#75225b] to-[#e49454]">
        
        {/* 1. The Sun (Glowing and Setting/Rising) */}
        <motion.div 
          initial={{ y: 400, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 5, ease: "easeOut" }}
          className="absolute bottom-[10%] left-[50%] -translate-x-1/2 w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] rounded-full bg-gradient-to-tr from-[#ffcc33] to-[#ffaa00]"
          style={{ 
            boxShadow: '0 0 150px 50px rgba(255, 204, 51, 0.4), inset 0 0 80px rgba(255,255,255,0.6)',
            filter: 'blur(2px)' 
          }}
        />

        {/* Foreground elements moved to ForegroundMountains.jsx to enable parallax depth */}

        {/* Slow Gentle Wind Lines */}
        {windLines.map(line => (
          <motion.div
            key={`wind-${line.id}`}
            className="absolute right-[-200px] h-[1px] bg-white/20 rounded-full blur-[1px]"
            style={{ top: line.top, width: line.width }}
            animate={{ x: ['10vw', '-120vw'] }}
            transition={{ duration: line.duration, repeat: Infinity, ease: "linear", delay: line.delay }}
          />
        ))}

        {/* 5. Birds Flying */}
        {birds.map((bird) => (
          <motion.div
            key={`bird-${bird.id}`}
            className="absolute left-[-10%]"
            style={{ top: bird.top, scale: bird.scale }}
            animate={{ x: ['-10vw', '110vw'], y: [0, -40 + Math.random() * 80, 0] }}
            transition={{ 
              x: { duration: bird.duration, repeat: Infinity, ease: "linear", delay: bird.delay },
              y: { duration: bird.duration / 2, repeat: Infinity, ease: "easeInOut", delay: bird.delay }
            }}
          >
            {/* Bird SVG (Flying V shape) */}
            <svg width="40" height="20" viewBox="0 0 40 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 10 Q10 -2 20 10 Q30 -2 40 10 Q30 5 20 15 Q10 5 0 10 Z" fill="#11051c" />
            </svg>
          </motion.div>
        ))}

        {/* Cinematic Vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.5)_100%)] mix-blend-multiply" />
        
        {/* Warmth Overlay */}
        <div className="absolute inset-0 bg-orange-500/10 mix-blend-overlay" />
        
        {/* Audio Element for Birds Chirping */}
        <audio ref={audioRefBirds} loop preload="auto">
          <source src="https://cdn.freesound.org/previews/416/416529_5121236-lq.mp3" type="audio/mpeg" />
          <source src="https://ia800508.us.archive.org/15/items/BirdsChirping/Birds_Chirping.mp3" type="audio/mpeg" />
          <source src="https://upload.wikimedia.org/wikipedia/commons/4/4e/Forest_ambience_-_birds_and_wind.ogg" type="audio/ogg" />
        </audio>

        {/* Audio Element for Strong Wind */}
        <audio ref={audioRefWind} loop preload="auto">
          {/* Intense/Strong wind sound from Freesound */}
          <source src="https://cdn.freesound.org/previews/208/208398_3702167-lq.mp3" type="audio/mpeg" />
          {/* Backup strong wind from Archive.org */}
          <source src="https://ia800108.us.archive.org/8/items/WindHowling/Wind%20Howling.mp3" type="audio/mpeg" />
        </audio>
      </div>

      {/* Minimalist Sound Toggle Button */}
      <div className="fixed bottom-8 left-8 z-50">
        <button 
          onClick={toggleSound}
          aria-label="Toggle Nature Sound"
          className={`w-12 h-12 flex items-center justify-center rounded-full backdrop-blur-md border transition-all duration-500 shadow-2xl cursor-pointer ${
            isMuted 
              ? 'bg-orange-500/20 border-orange-400/50 text-orange-200 hover:bg-orange-500/40 hover:scale-110 animate-pulse' 
              : 'bg-white/5 border-white/10 text-white/60 hover:bg-white/10 hover:text-white hover:scale-110'
          }`}
        >
          {isMuted ? <FaVolumeMute size={18} /> : <FaVolumeUp size={18} />}
        </button>
      </div>
    </>
  )
}

export default SunsetBackground
