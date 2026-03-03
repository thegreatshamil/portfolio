import React, { useEffect } from 'react'
import Hero from './components/Hero'
import BentoSection from './components/BentoSection'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Achievements from './components/Achievements'
import Experience from './components/Experience'
import DigitalTwin from './components/DigitalTwin'
import Education from './components/Education'
import Footer from './components/Footer'

function App() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen bg-obsidian text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-md border-b border-white/10 bg-obsidian/50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="heading-sm text-accent">S.SJ</div>
          <div className="flex gap-6 overflow-x-auto">
            <a href="#work" className="text-sm text-white/60 hover:text-accent transition-colors whitespace-nowrap">Work</a>
            <a href="#skills" className="text-sm text-white/60 hover:text-accent transition-colors whitespace-nowrap">Skills</a>
            <a href="#twin" className="text-sm text-white/60 hover:text-accent transition-colors whitespace-nowrap">AI Twin</a>
            <a href="#contact" className="text-sm text-white/60 hover:text-accent transition-colors whitespace-nowrap">Contact</a>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-20">
        <Hero />
        <BentoSection />
        <Skills />
        <Projects />
        <Achievements />
        <Experience />
        <DigitalTwin />
        <Education />
        <Footer />
      </main>
    </div>
  )
}

export default App
