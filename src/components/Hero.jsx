import React, { useEffect, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { FaLinkedinIn, FaGithub, FaInstagram } from 'react-icons/fa'

const Hero = () => {
  const [displayText, setDisplayText] = useState('')
  const fullText = '"Nothing in life is truly easy or hard — only familiar or unfamiliar."'

  useEffect(() => {
    let i = 0
    const interval = setInterval(() => {
      if (i <= fullText.length) {
        setDisplayText(fullText.slice(0, i))
        i++
      } else {
        clearInterval(interval)
      }
    }, 30)
    return () => clearInterval(interval)
  }, [])

  const { scrollY } = useScroll()
  const opacity = useTransform(scrollY, [0, 300], [1, 0])
  const scale = useTransform(scrollY, [0, 300], [1, 1.1])
  const y = useTransform(scrollY, [0, 300], [0, -50])

  return (
    <section id="hero" className="sticky top-0 h-screen flex flex-col items-center justify-center px-6 overflow-hidden text-white">
      {/* Subtle Frame Removed */}

      <motion.div style={{ opacity, y }} className="relative w-full max-w-7xl min-h-screen flex flex-col items-center justify-center z-10 text-center pointer-events-none">

        <motion.div initial={{ opacity: 0, y: -40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: 'easeOut' }} className="flex flex-col items-center justify-center w-full">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="font-sans text-base sm:text-lg font-bold tracking-[0.25em] text-white/70 uppercase mb-8 drop-shadow-md">
            Creative Developer // 2026
          </motion.p>

          {/* Removed SUDHANSHU text as requested */}

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }} className="mt-6 w-full flex justify-center">
            <p className="text-sm sm:text-base md:text-lg text-white/80 font-medium inline-block max-w-2xl mx-auto leading-relaxed drop-shadow-md">
              {displayText}
              <span className="animate-pulse text-white font-normal ml-1">|</span>
            </p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.2, duration: 0.8 }} className="mt-16 sm:mt-24 w-full flex items-center justify-center gap-6 pointer-events-auto">
            <motion.a href="https://www.linkedin.com/in/sudhanshu-raj-45b205250" target="_blank" rel="noreferrer" whileHover={{ y: -5, scale: 1.1 }} whileTap={{ scale: 0.95 }} className="group flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white shadow-xl transition-all hover:bg-white/90 hover:border-white">
              <FaLinkedinIn size={20} className="transition-colors duration-300 group-hover:text-[#0a66c2]" />
            </motion.a>
            <motion.a href="https://github.com/Codesmashersgit" target="_blank" rel="noreferrer" whileHover={{ y: -5, scale: 1.1 }} whileTap={{ scale: 0.95 }} className="group flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white shadow-xl transition-all hover:bg-white/90 hover:border-white">
              <FaGithub size={22} className="transition-colors duration-300 group-hover:text-[#181717]" />
            </motion.a>
            <motion.a href="https://instagram.com" target="_blank" rel="noreferrer" whileHover={{ y: -5, scale: 1.1 }} whileTap={{ scale: 0.95 }} className="group flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white shadow-xl transition-all hover:bg-white/90 hover:border-white">
              <FaInstagram size={24} className="transition-colors duration-300 group-hover:text-[#E1306C]" />
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }} className="absolute bottom-8 sm:bottom-12 left-1/2 -translate-x-1/2">
          <div className="flex flex-col items-center gap-3">
            <span className="font-sans text-xs font-bold text-white/50 tracking-[0.2em] uppercase">Scroll</span>
            <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }} className="w-[2px] h-10 bg-gradient-to-b from-white/50 to-transparent rounded-full" />
          </div>
        </motion.div>

      </motion.div>
    </section>
  )
}

export default Hero
