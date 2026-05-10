import React from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import WhiteScreen from './components/WhiteScreen'
import TechStack from './components/TechStack'
import Marquee from './components/Marquee'
import ContactSection from './components/ContactSection'
import SunsetBackground from './components/SunsetBackground'
import ForegroundMountains from './components/ForegroundMountains'

function App() {
  return (
    <div className="relative min-h-screen noise-overlay">
      <SunsetBackground />
      <main className="relative z-40">
        <Hero />
        <About />
        <Projects />
        <WhiteScreen />
        <TechStack />
        <Marquee />
        <ContactSection />
      </main>
      <ForegroundMountains />
    </div>
  )
}

export default App
