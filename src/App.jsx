import React from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import TechStack from './components/TechStack'
import Marquee from './components/Marquee'
import ContactSection from './components/ContactSection'
import SunsetBackground from './components/SunsetBackground'
import ForegroundMountains from './components/ForegroundMountains'
import ArcheryGame from './components/ArcheryGame'

function App() {
  return (
    <div className="relative min-h-screen noise-overlay">
      <SunsetBackground />
      <main className="relative z-40">
        <Hero />
        <About />
        <Projects />
        <TechStack />
        <section id="archery-game" className="relative h-screen w-full z-50 bg-[#0a0a1a] overflow-hidden">
          <ArcheryGame />
        </section>
        <Marquee />
        <ContactSection />
      </main>
      <ForegroundMountains />
    </div>
  )
}

export default App
