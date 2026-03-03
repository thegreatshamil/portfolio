import React from 'react'
import { ExternalLink, Github } from 'lucide-react'

export default function Projects() {
  const projects = [
    {
      title: 'AI Portfolio Website',
      description: 'Ultra-minimalist personal portfolio with glassmorphism design, built with React, Tailwind CSS, and integrated AI assistant.',
      tags: ['React', 'Tailwind CSS', 'AI Integration', 'Web Design'],
      links: [
        { label: 'Live', url: '#' },
        { label: 'GitHub', url: '#' }
      ]
    },
    {
      title: 'Self-E Hackathon Winner',
      description: 'Winning project from competitive coding hackathon. Built during 1st year with focus on rapid prototyping and scalable architecture.',
      tags: ['Problem-Solving', 'AI', 'Rapid Development'],
      links: [
        { label: 'Details', url: '#' }
      ]
    },
    {
      title: 'Codeathon Class Winner',
      description: 'Competitive programming project demonstrating optimization and algorithmic thinking at class level.',
      tags: ['Algorithms', 'Optimization', 'Competitive Programming'],
      links: [
        { label: 'Details', url: '#' }
      ]
    },
  ]

  return (
    <section id="projects" className="py-32 px-6 bg-gradient-to-b from-obsidian via-obsidian to-obsidian/90">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <h2 className="heading-md mb-2">Featured Projects</h2>
          <p className="text-white/50">Building intelligent solutions and winning competitions</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, idx) => (
            <div key={idx} className="glass-card p-8 flex flex-col">
              <h3 className="heading-sm mb-3">{project.title}</h3>
              <p className="text-white/70 mb-6 flex-grow">{project.description}</p>
              
              <div className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="accent-badge">{tag}</span>
                  ))}
                </div>
                
                <div className="flex gap-3 pt-4 border-t border-white/10">
                  {project.links.map((link, i) => (
                    <a
                      key={i}
                      href={link.url}
                      className="btn-glass text-xs"
                    >
                      {link.label}
                      <ExternalLink size={14} />
                    </a>
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
