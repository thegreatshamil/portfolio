import React from 'react'
import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react'

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-32">
      <div className="max-w-4xl w-full space-y-8">
        {/* Heading */}
        <div className="space-y-4">
          <h1 className="heading-lg">
            Shamil <span className="text-accent">SJ</span>
          </h1>
          <p className="text-2xl text-white/60 font-light leading-relaxed max-w-2xl">
            Crafting intelligent interfaces where AI meets design. Building next-gen web experiences with a focus on precision and elegance.
          </p>
        </div>

        {/* Social Links */}
        <div className="flex gap-3 pt-8">
          <a
            href="https://linkedin.com/in/shamil-sj-bb9841384"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-glass"
          >
            <Linkedin size={18} />
            <span>LinkedIn</span>
          </a>
          <a
            href="mailto:shamil.sj2025aids@sece.ac.in"
            className="btn-glass"
          >
            <Mail size={18} />
            <span>Email</span>
          </a>
          <a
            href="#"
            className="btn-glass"
          >
            <Github size={18} />
            <span>GitHub</span>
          </a>
        </div>

        {/* CTA */}
        <div className="pt-8">
          <a
            href="#work"
            className="inline-block glass-card px-6 py-3 text-white/80 hover:text-accent transition-colors"
          >
            <div className="flex items-center gap-2">
              <span>Explore my work</span>
              <ExternalLink size={16} />
            </div>
          </a>
        </div>
      </div>
    </section>
  )
}
