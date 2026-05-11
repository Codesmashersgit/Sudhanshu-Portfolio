import React, { useRef, useState } from 'react'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import { FiGithub, FiExternalLink } from 'react-icons/fi'

const projects = [
  {
    title: "Collaborative Task Management",
    description: "MERN task manager with JWT auth, role access and Socket.IO collaboration.",
    tags: ["MERN", "Socket.IO", "JWT", "React"],
    github: "https://github.com/Codesmashersgit/Collaborative-Task-Management",
    live: "https://github.com/Codesmashersgit/Collaborative-Task-Management",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "CodeSphere – Multi-language IDE",
    description: "Online IDE with Node/Express APIs and 2s code execution for hundreds of users.",
    tags: ["Node.js", "Express", "React", "Vercel"],
    github: "https://github.com/Codesmashersgit/Editor",
    live: "https://editor-two-omega.vercel.app/",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Movie Street",
    description: "React movie discovery app with search, listings, and API-powered details.",
    tags: ["React", "API", "Netlify"],
    github: "https://github.com/Codesmashersgit/Movie-app",
    live: "https://movieappwe.netlify.app/",
    image: "https://images.unsplash.com/photo-1516738901601-6818ecbad793?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Nexus - Peer to Peer Communication Platform",
    description: "Peer-to-peer chat and call app with WebRTC, secure messaging, and smooth UI.",
    tags: ["React", "WebRTC", "Socket.IO", "Netlify"],
    github: "https://github.com/Codesmashersgit/Nexus",
    live: "https://nexus1802.netlify.app/",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Melodify - Music Streaming App",
    description: "Music streaming UI with playlists, search, and responsive audio browsing.",
    tags: ["React", "Music API", "Netlify"],
    github: "https://github.com/Codesmashersgit/Melodify-app",
    live: "https://melodifynew.netlify.app/",
    image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Finance Project",
    description: "Finance dashboard with analytics, portfolio tracking, and insights.",
    tags: ["React", "Node.js", "Finance API"],
    github: "https://github.com/Codesmashersgit/Finance-Project",
    live: "#",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "BugBhai – Smart Error Helper for JS/TS",
    description: "VS Code extension that shows friendly JS/TS error messages in English and Hindi.",
    tags: ["VSCode Extension", "JavaScript", "TypeScript"],
    github: "https://github.com/Codesmashersgit/VsCode-Extension",
    live: "#",
    image: "https://images.unsplash.com/photo-1633356122544-f134324ef6db?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Celestial Archery",
    description: "Interactive canvas-based archery game with physics, power meter, and space theme.",
    tags: ["Canvas", "JavaScript", "Game Dev"],
    github: "#",
    live: "#archery-game",
    image: "https://images.unsplash.com/photo-1511078573293-423810aeaf01?auto=format&fit=crop&w=800&q=80"
  }
]

// Target destinations for the 7 cards when scrolling down (scattering effect)
const flyOutTargets = [
  { x: -1200, y: -800, rot: -60 }, // 0: Far top left
  { x: 1200,  y: -600, rot: 45 },  // 1: Far top right
  { x: -900,  y: 900,  rot: -90 }, // 2: Bottom left
  { x: 900,   y: 800,  rot: 70 },  // 3: Bottom right
  { x: -400,  y: -1200, rot: -30 },// 4: Straight up left
  { x: 1500,  y: 100,  rot: 120 }, // 5: Straight right
  { x: 0,     y: -1500, rot: 180 },// 6: Straight up spinning
  { x: -1500, y: 500,  rot: -120 },// 7: Far bottom left out
]

const Projects = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const containerRef = useRef(null);

  // Track scrolling as the section leaves the viewport to trigger the scatter
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"] // Track the full 400vh scroll
  });

  const smoothFly = useSpring(scrollYProgress, { stiffness: 60, damping: 20 });

  return (
    <section id="projects" ref={containerRef} className="relative h-[400vh] z-5">
      
      {/* Sticky container so the fan stays in place while scattering over 400vh */}
      <div className="sticky top-0 w-full h-screen flex flex-col items-center justify-center overflow-hidden">
        {/* Header - Fades out early in the scroll */}
        <motion.div 
          style={{ opacity: useTransform(smoothFly, [0, 0.15], [1, 0]) }}
          className="absolute top-[10%] mb-4 sm:mb-8 flex flex-col items-center justify-center w-full text-center z-30"
        >
          <h2 className="text-4xl md:text-5xl font-black text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]">
            What I've Worked On
          </h2>
        </motion.div>

        {/* Playing Cards Deck Container */}
        <div className="relative w-full flex-1 flex items-center justify-center mt-20">
          {projects.map((project, i) => {
            const centerIndex = 3; // Middle card of 7
            const offset = i - centerIndex; // -3 to 3
            const isHovered = hoveredIndex === i;
            const isAnyHovered = hoveredIndex !== null;
            const isDimmed = isAnyHovered && !isHovered;
            
            // The math for a perfect playing card fan (Taash ke patte)
            const xOffset = offset * 80; // 80px horizontal spread per card
            const yOffset = Math.abs(offset) * 25; // 25px drop per step away from center
            const rot = offset * 5; // 5 degrees rotation per step
            
            const baseZIndex = 8 - Math.abs(offset);
            const zIndex = isHovered ? 10 : baseZIndex;

            // The highest z-index card (center, index 3 & 4) MUST go first, 
            // then alternating the next highest cards (2, 5), (1, 6), then (0, 7).
            const orderMap = { 3:0, 4:1, 2:2, 5:3, 1:4, 6:5, 0:6, 7:7 };
            const order = orderMap[i];
            
            // Divide the scroll space from 0.15 to 0.95 into 8 sequential steps
            const step = 0.8 / 8; 
            const startScroll = 0.15 + (order * step);
            const endScroll = startScroll + step;

            // Scroll-driven scatter values for this specific card mapped to its specific time window
            const target = flyOutTargets[i];
            const flyX = useTransform(smoothFly, [startScroll, endScroll], [0, target.x]);
            const flyY = useTransform(smoothFly, [startScroll, endScroll], [0, target.y]);
            const flyRot = useTransform(smoothFly, [startScroll, endScroll], [0, target.rot]);
            const flyScale = useTransform(smoothFly, [startScroll, endScroll], [1, 0.2]); // Shrink as it flies
            const flyOpacity = useTransform(smoothFly, [startScroll + (step*0.5), endScroll], [1, 0]); // Fade out

            return (
              <motion.div
                key={i}
                style={{ 
                  x: flyX, 
                  y: flyY, 
                  rotate: flyRot, 
                  scale: flyScale, 
                  opacity: flyOpacity,
                  zIndex: isHovered ? 100 : (10 - Math.abs(offset))
                }}
                className="absolute"
              >
                <motion.div
                  onMouseEnter={() => setHoveredIndex(i)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  initial={{ opacity: 0, y: 200 }}
                  whileInView={{ opacity: 1, y: yOffset }}
                  viewport={{ once: true }}
                  drag
                  whileDrag={{ scale: 1.15, zIndex: 100 }}
                  animate={{
                    rotate: isHovered ? 0 : rot,
                    x: xOffset,
                    y: isHovered ? yOffset - 100 : yOffset, // Pull card UP and OUT of the deck
                    scale: isHovered ? 1.05 : (isDimmed ? 0.95 : 1),
                    filter: isDimmed ? "grayscale(100%) blur(2px)" : "grayscale(0%) blur(0px)"
                  }}
                  transition={{ type: "spring", stiffness: 260, damping: 20 }}
                  className="w-[300px] sm:w-[360px] h-[420px] sm:h-[460px] origin-bottom cursor-grab active:cursor-grabbing flex-shrink-0 rounded-[2.5rem] overflow-hidden group shadow-[0_30px_90px_-30px_rgba(139,92,246,0.55)] flex flex-col border border-white/10 bg-[radial-gradient(circle_at_top,_rgba(139,92,246,0.18),transparent_35%),linear-gradient(180deg,rgba(15,23,42,0.95),rgba(7,10,17,0.98))]"
                >
                  {/* Full Height Background Image */}
                  <div className="absolute inset-0 w-full h-full pointer-events-none">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    {/* Uniform Dark Overlay for Centered Text Readability */}
                    <div className="absolute inset-0 bg-black/50 group-hover:bg-black/60 transition-colors duration-500" />
                  </div>

                  {/* Card Content - Centered vertically and horizontally */}
                  <div className="absolute inset-0 p-6 sm:p-8 flex flex-col justify-center items-center text-center">
                    <h3 className="text-2xl sm:text-3xl font-black text-white mb-2 drop-shadow-lg opacity-100">
                      {project.title}
                    </h3>
                    
                    <p className="text-sm text-white/95 font-semibold leading-relaxed mb-8 drop-shadow-md">
                      {project.description}
                    </p>

                    {/* Links */}
                    <div className="flex items-center justify-center gap-10 w-full mt-6">
                      <a href={project.github} className="flex items-center justify-center gap-3 text-base sm:text-lg text-white/90 hover:text-white transition-colors font-black drop-shadow-md tracking-wider">
                        <FiGithub size={24} />
                        <span>CODE</span>
                      </a>
                      {project.live !== "#" && (
                        <a href={project.live} className="flex items-center justify-center gap-3 text-base sm:text-lg text-white/90 hover:text-white transition-colors font-black drop-shadow-md tracking-wider">
                          <span>LIVE</span>
                          <FiExternalLink size={24} />
                        </a>
                      )}
                    </div>

                  </div>
                </motion.div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Projects
