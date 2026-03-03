import React from 'react'
import { BookOpen, Award } from 'lucide-react'

export default function Education() {
  const education = [
    {
      degree: 'Bachelor of Technology',
      field: 'Artificial Intelligence',
      school: 'Sri Eshwar College of Engineering',
      period: '2025 - 2029',
      location: 'Coimbatore, Tamil Nadu, India',
      highlights: ['AI Specialization', 'Advanced Development', 'Full-Stack Training'],
    },
  ]

  return (
    <section className="py-32 px-6 bg-gradient-to-b from-obsidian via-obsidian to-obsidian/90">
      <div className="max-w-3xl mx-auto">
        <div className="mb-16">
          <h2 className="heading-md mb-2">Education</h2>
          <p className="text-white/50">Academic foundation and specializations</p>
        </div>

        <div className="space-y-6">
          {education.map((edu, idx) => (
            <div key={idx} className="glass-card p-8">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-accent/10 rounded-xl">
                  <BookOpen size={24} className="text-accent" />
                </div>
                <div className="flex-1">
                  <h3 className="heading-sm mb-1">{edu.degree}</h3>
                  <p className="text-accent font-medium mb-1">{edu.field}</p>
                  <p className="text-white/60 text-sm">{edu.school}</p>
                </div>
                <span className="text-white/40 text-sm whitespace-nowrap">{edu.period}</span>
              </div>

              <div className="ml-14 space-y-3">
                <p className="text-white/70 text-sm">{edu.location}</p>
                <div className="flex flex-wrap gap-2">
                  {edu.highlights.map((item, i) => (
                    <span key={i} className="accent-badge">{item}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
