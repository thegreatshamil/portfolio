import React from 'react'
import { Mail, Linkedin, Github, ExternalLink, ArrowRight } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer id="contact" className="py-32 px-6 border-t border-white/10">
      <div className="max-w-4xl mx-auto">
        {/* CTA Section */}
        <div className="mb-20">
          <h2 className="heading-md mb-4">Let's create something extraordinary</h2>
          <p className="text-white/60 mb-8 max-w-2xl">
            Whether you're looking to build an AI-powered application, design a stunning web experience, or collaborate on an innovative project, I'm ready to bring your vision to life.
          </p>
          <a
            href="mailto:shamil.sj2025aids@sece.ac.in"
            className="inline-flex items-center gap-2 glass-card px-6 py-3 group"
          >
            <span>Get in touch</span>
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* Contact Links */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 pb-12 border-b border-white/10">
          <a
            href="mailto:shamil.sj2025aids@sece.ac.in"
            className="glass-card p-4 flex items-center gap-3 group"
          >
            <Mail size={20} className="text-accent" />
            <div className="flex-1 min-w-0">
              <p className="text-xs text-white/50">Email</p>
              <p className="text-sm truncate group-hover:text-accent transition-colors">shamil.sj2025aids@sece.ac.in</p>
            </div>
          </a>

          <a
            href="https://linkedin.com/in/shamil-sj-bb9841384"
            target="_blank"
            rel="noopener noreferrer"
            className="glass-card p-4 flex items-center gap-3 group"
          >
            <Linkedin size={20} className="text-accent" />
            <div className="flex-1 min-w-0">
              <p className="text-xs text-white/50">LinkedIn</p>
              <p className="text-sm group-hover:text-accent transition-colors">shamil-sj</p>
            </div>
          </a>

          <a
            href="#"
            className="glass-card p-4 flex items-center gap-3 group"
          >
            <Github size={20} className="text-accent" />
            <div className="flex-1 min-w-0">
              <p className="text-xs text-white/50">GitHub</p>
              <p className="text-sm group-hover:text-accent transition-colors">Coming soon</p>
            </div>
          </a>
        </div>

        {/* Footer Info */}
        <div className="flex flex-col md:flex-row items-center justify-between">
          <p className="text-white/40 text-sm">
            © {currentYear} Shamil SJ. Crafted with precision.
          </p>
          <div className="flex gap-1 mt-4 md:mt-0 text-white/40 text-xs">
            <span>Coimbatore, India</span>
            <span>•</span>
            <span>AI & Web Design</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
