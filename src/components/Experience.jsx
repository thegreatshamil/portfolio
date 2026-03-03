import React from 'react'
import { ChevronRight } from 'lucide-react'

export default function Experience() {
  const experiences = [
    {
      title: 'AI & Web Design Enthusiast',
      company: 'Self-Driven Learning',
      period: '2025 - Present',
      description: 'Currently exploring the intersection of artificial intelligence and web design, focusing on creating intelligent, user-centric interfaces.',
      tags: ['React', 'AI Integration', 'Design'],
    },
    {
      title: 'BTech Student - AI Specialization',
      company: 'Sri Eshwar College of Engineering',
      period: '2025 - 2029',
      description: 'Pursuing Bachelor of Technology in Artificial Intelligence with a focus on practical applications in web and software development.',
      tags: ['AI', 'Software Development', 'Learning'],
    },
  ]

  return (
    <section id="work" className="py-32 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="mb-16">
          <h2 className="heading-md mb-2">Experience</h2>
          <p className="text-white/50">My journey and professional growth</p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, idx) => (
            <div key={idx} className="group relative">
              {/* Timeline line */}
              {idx !== experiences.length - 1 && (
                <div className="absolute left-8 top-20 w-0.5 h-24 bg-gradient-to-b from-accent/30 to-transparent" />
              )}

              <div className="flex gap-6">
                {/* Timeline dot */}
                <div className="flex flex-col items-center pt-1">
                  <div className="w-4 h-4 rounded-full bg-accent ring-4 ring-obsidian relative z-10" />
                </div>

                {/* Content */}
                <div className="glass-card p-6 flex-1">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="heading-sm">{exp.title}</h3>
                      <p className="text-accent text-sm font-medium">{exp.company}</p>
                    </div>
                    <span className="text-white/40 text-xs whitespace-nowrap ml-4">{exp.period}</span>
                  </div>
                  <p className="text-white/70 mb-4">{exp.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((tag, i) => (
                      <span key={i} className="accent-badge">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
