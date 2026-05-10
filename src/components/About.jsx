import React, { useRef } from 'react'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'

const About = () => {
  const containerRef = useRef(null)
  
  // Track scroll progress through this 400vh container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })

  // Add buttery smooth spring physics to the scroll progress
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 70,
    damping: 20,
    restDelta: 0.001
  })

  // We map the smoothed scroll progress from 0 to 1 into 4 different text phases.
  // Phase 1: 0 to 0.2
  const t1Opacity = useTransform(smoothProgress, [0, 0.05, 0.15, 0.2], [0, 1, 1, 0])
  const t1Y = useTransform(smoothProgress, [0, 0.2], [300, -300])
  const t1Scale = useTransform(smoothProgress, [0, 0.2], [0.9, 1.1])

  // Phase 2: 0.25 to 0.45
  const t2Opacity = useTransform(smoothProgress, [0.25, 0.3, 0.4, 0.45], [0, 1, 1, 0])
  const t2Y = useTransform(smoothProgress, [0.25, 0.45], [300, -300])
  const t2Scale = useTransform(smoothProgress, [0.25, 0.45], [0.9, 1.1])

  // Phase 3: 0.5 to 0.7
  const t3Opacity = useTransform(smoothProgress, [0.5, 0.55, 0.65, 0.7], [0, 1, 1, 0])
  const t3Y = useTransform(smoothProgress, [0.5, 0.7], [300, -300])
  const t3Scale = useTransform(smoothProgress, [0.5, 0.7], [0.9, 1.1])

  // Phase 4: 0.75 to 1.0
  const t4Opacity = useTransform(smoothProgress, [0.75, 0.8, 0.95, 1], [0, 1, 1, 0])
  const t4Y = useTransform(smoothProgress, [0.75, 1], [300, -300])
  const t4Scale = useTransform(smoothProgress, [0.75, 1], [0.9, 1.1])

  // Dynamic background vignette that darkens the scene slightly so text pops
  const vignetteOpacity = useTransform(smoothProgress, [0, 0.2, 0.8, 1], [0, 0.5, 0.5, 0])

  return (
    <section ref={containerRef} className="relative h-[500vh] w-full z-20">
      <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden pointer-events-none px-4">
        
        {/* Subtle darkening overlay for text readability */}
        <motion.div 
          className="absolute inset-0 bg-black/60"
          style={{ opacity: vignetteOpacity }}
        />

        {/* --- TEXT 1 --- */}
        <motion.div 
          className="absolute top-[30%] w-full flex flex-col items-center"
          style={{ opacity: t1Opacity, y: t1Y, scale: t1Scale }}
        >
          <span className="text-white font-bold tracking-[0.4em] uppercase text-sm mb-4 drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]">
            Who I Am
          </span>
          <h2 className="text-6xl md:text-8xl font-black text-white text-center tracking-tighter drop-shadow-[0_0_20px_rgba(255,255,255,0.3)]">
            Hi, I'm Sudhanshu.
          </h2>
        </motion.div>

        {/* --- TEXT 2 --- */}
        <motion.div 
          className="absolute top-[30%] w-full flex flex-col items-center"
          style={{ opacity: t2Opacity, y: t2Y, scale: t2Scale }}
        >
          <span className="text-white font-bold tracking-[0.4em] uppercase text-sm mb-4 drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]">
            My Role
          </span>
          <h2 className="text-5xl md:text-7xl font-black text-white text-center leading-tight tracking-tight drop-shadow-[0_0_20px_rgba(255,255,255,0.3)] max-w-4xl">
            A Full Stack MERN Developer.
          </h2>
        </motion.div>

        {/* --- TEXT 3 --- */}
        <motion.div 
          className="absolute top-[30%] w-full flex flex-col items-center"
          style={{ opacity: t3Opacity, y: t3Y, scale: t3Scale }}
        >
          <span className="text-white font-bold tracking-[0.4em] uppercase text-sm mb-4 drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]">
            What I Do
          </span>
          <h2 className="text-5xl md:text-7xl font-black text-white text-center leading-snug tracking-tight drop-shadow-[0_0_20px_rgba(255,255,255,0.3)] max-w-4xl">
            I craft cinematic digital experiences.
          </h2>
        </motion.div>

        {/* --- TEXT 4 --- */}
        <motion.div 
          className="absolute top-[30%] w-full flex flex-col items-center"
          style={{ opacity: t4Opacity, y: t4Y, scale: t4Scale }}
        >
          <span className="text-white font-bold tracking-[0.4em] uppercase text-sm mb-4 drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]">
            My Vision
          </span>
          <h2 className="text-3xl md:text-6xl font-black text-white text-center leading-snug tracking-tight drop-shadow-[0_0_20px_rgba(255,255,255,0.3)] max-w-5xl">
            Bridging the gap between <br className="hidden md:block" /> 
            heavy engineering &amp; pure art.
          </h2>
        </motion.div>

      </div>
    </section>
  )
}

export default About
