import React, { useRef } from 'react'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import ArcheryGame from './ArcheryGame'

const WhiteScreen = () => {
  const containerRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"]
  })

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 40, damping: 25 })

  // Dark curtain slides UP from the bottom
  const curtainY = useTransform(smoothProgress, [0.2, 0.9], ["100%", "0%"])

  return (
    <section ref={containerRef} className="relative h-[200vh] z-40">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        
        {/* The Dark Space Curtain with Archery Game inside */}
        <motion.div 
          className="absolute left-0 right-0 bottom-0 w-full h-full bg-[#0a0a1a] pointer-events-auto"
          style={{ y: curtainY }}
        >
          {/* Soft top edge blur */}
          <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-[#0a0a1a] -translate-y-full pointer-events-none" />
          
          {/* Archery Game */}
          <div className="w-full h-full">
            <ArcheryGame />
          </div>
        </motion.div>

      </div>
    </section>
  )
}

export default WhiteScreen
