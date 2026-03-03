import React from 'react'
import { Trophy, Star, Zap } from 'lucide-react'

export default function Achievements() {
  const achievements = [
    {
      icon: Trophy,
      title: 'Codeathon Winner',
      subtitle: 'Class Level Competition',
      description: 'Competitive programming victory demonstrating algorithmic optimization and structured problem-solving under pressure.',
      color: 'text-yellow-400'
    },
    {
      icon: Star,
      title: 'Self-E Hackathon Winner',
      subtitle: '1st Year Level',
      description: 'Winning hackathon project showcasing rapid prototyping, system architecture design, and innovation in first year.',
      color: 'text-purple-400'
    },
    {
      icon: Zap,
      title: 'AI Systems Focus',
      subtitle: 'Emerging Specialization',
      description: 'Specialized in building scalable AI solutions, intelligent automation, and data-driven product architectures.',
      color: 'text-cyan-400'
    },
  ]

  return (
    <section className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <h2 className="heading-md mb-2">Achievements & Milestones</h2>
          <p className="text-white/50">Recognition of competitive thinking and technical excellence</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {achievements.map((achievement, idx) => {
            const Icon = achievement.icon
            return (
              <div key={idx} className="glass-card p-8 flex flex-col">
                <div className={`inline-flex mb-4 p-3 bg-white/5 rounded-xl w-fit ${achievement.color}`}>
                  <Icon size={28} />
                </div>
                
                <h3 className="heading-sm mb-1">{achievement.title}</h3>
                <p className="text-accent text-sm font-medium mb-4">{achievement.subtitle}</p>
                <p className="text-white/70">{achievement.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
