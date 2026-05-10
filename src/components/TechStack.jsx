import React, { useRef } from 'react'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import { 
  SiJavascript, SiReact, SiExpress, SiNodedotjs,
  SiJsonwebtokens, SiGit, SiHtml5, SiCss,
  SiTailwindcss, SiGreensock, SiFramer, SiMysql,
  SiMongodb, SiBootstrap, SiOpenai, SiAnthropic, SiHuggingface,
  SiVercel, SiNetlify, SiRender, SiTwilio, SiPostman, 
  SiVite, SiRedux, SiNpm, SiNodemon
} from 'react-icons/si'
import { TbBrandVscode } from 'react-icons/tb'
import { FiShield, FiMail, FiCpu } from 'react-icons/fi'

const techs = [
  { Icon: SiHtml5, color: "#E34F26" },
  { Icon: SiCss, color: "#1572B6" },
  { Icon: SiJavascript, color: "#F7DF1E" },
  { Icon: SiReact, color: "#61DAFB" },
  { Icon: SiNodedotjs, color: "#339933" },
  { Icon: SiExpress, color: "#ffffff" },
  { Icon: SiMongodb, color: "#47A248" },
  { Icon: SiMysql, color: "#4479A1" },
  { Icon: SiTailwindcss, color: "#06B6D4" },
  { Icon: SiBootstrap, color: "#7952B3" },
  { Icon: SiGit, color: "#F05032" },
  { Icon: SiFramer, color: "#0055FF" },
  { Icon: SiGreensock, color: "#88CE02" },
  { Icon: SiJsonwebtokens, color: "#D63AFF" },
  { Icon: FiShield, color: "#EB5424" },
  { Icon: TbBrandVscode, color: "#007ACC" },
  { Icon: SiOpenai, color: "#ffffff" },
  { Icon: SiAnthropic, color: "#D97757" },
  { Icon: SiHuggingface, color: "#FFD21E" },
  { Icon: SiVercel, color: "#ffffff" },
  { Icon: SiNetlify, color: "#00C7B7" },
  { Icon: SiRender, color: "#46E3B7" },
  { Icon: SiTwilio, color: "#F22F46" },
  { Icon: FiMail, color: "#EA4335" },
  { Icon: SiPostman, color: "#FF6C37" },
  { Icon: SiVite, color: "#646CFF" },
  { Icon: SiRedux, color: "#764ABC" },
  { Icon: FiCpu, color: "#61DAFB" },
  { Icon: SiNpm, color: "#CB3837" },
  { Icon: SiNodemon, color: "#76D04B" },
]

const TechIcon = ({ tech, index, total, scrollYProgress }) => {
  // strictly one-by-one exit
  const windowSize = 0.8 / total;
  const fadeStart = 0.1 + (index * windowSize);
  const fadeEnd = fadeStart + windowSize;

  const opacity = useTransform(scrollYProgress, [0, fadeStart, fadeEnd], [1, 1, 0])
  const scale = useTransform(scrollYProgress, [0, fadeStart, fadeEnd], [1, 1, 0.4])
  const y = useTransform(scrollYProgress, [fadeStart, fadeEnd], [0, -50])

  return (
    <motion.div
      style={{ 
        opacity, 
        scale, 
        y, 
        color: tech.color,
        filter: `drop-shadow(0 0 15px ${tech.color}30)`,
      }}
      whileHover={{ scale: 1.2, filter: `drop-shadow(0 0 25px ${tech.color}60)` }}
      className="flex items-center justify-center p-4"
    >
      <tech.Icon size={60} className="sm:w-20 sm:h-20 w-14 h-14" />
    </motion.div>
  )
}

const TechStack = () => {
  const containerRef = useRef(null)
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 50, damping: 20 });

  return (
    <section ref={containerRef} className="relative z-[100] bg-[#020202] h-[600vh]">
      
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center overflow-hidden">
        
        {/* Subtle Background Lighting */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-600/5 rounded-full blur-[150px]" />
        </div>

        <div className="relative max-w-6xl mx-auto px-6 w-full">
          <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 gap-8 sm:gap-12 justify-items-center items-center">
            {techs.map((tech, i) => (
              <TechIcon 
                key={i} 
                tech={tech} 
                index={i} 
                total={techs.length} 
                scrollYProgress={smoothProgress} 
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}

export default TechStack
