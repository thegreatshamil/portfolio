import React from 'react'
import { Palette, Code, Settings } from 'lucide-react'

export default function Skills() {
  const skills = [
    {
      category: 'Design',
      skills: ['UI/UX Design', 'Web Design', 'Design Systems', 'Figma'],
      icon: Palette,
      color: 'text-purple-400',
    },
    {
      category: 'Development',
      skills: ['React.js', 'JavaScript', 'Tailwind CSS', 'Modern Web APIs'],
      icon: Code,
      color: 'text-blue-400',
    },
    {
      category: 'Tools & Software',
      skills: ['Microsoft Ecosystem', 'Git', 'VS Code', 'Adobe Creative Suite'],
      icon: Settings,
      color: 'text-cyan-400',
    },
  ]

  return (
    <section id="skills" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <h2 className="heading-md mb-2">Skills & Expertise</h2>
          <p className="text-white/50">Areas where I focus my energy and continuous learning</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {skills.map((skill, idx) => {
            const Icon = skill.icon
            return (
              <div key={idx} className="glass-card p-8">
                <div className="mb-6 flex items-center gap-3">
                  <div className={`p-2 rounded-lg bg-white/5 ${skill.color}`}>
                    <Icon size={24} />
                  </div>
                  <h3 className="heading-sm">{skill.category}</h3>
                </div>
                <ul className="space-y-3">
                  {skill.skills.map((item, i) => (
                    <li key={i} className="text-white/70 text-sm flex items-start gap-2">
                      <span className="text-accent mt-1">→</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
