import React from 'react'
import { Sparkles, Code2, MapPin, Zap } from 'lucide-react'

export default function BentoSection() {
  const bentos = [
    {
      title: 'Current Focus',
      subtitle: 'AI & Web Design',
      icon: Sparkles,
      span: 'col-span-1',
    },
    {
      title: 'Location',
      subtitle: 'Coimbatore, India',
      icon: MapPin,
      span: 'col-span-1',
    },
    {
      title: 'Experience',
      subtitle: 'Building & Learning',
      icon: Zap,
      span: 'col-span-1',
    },
  ]

  return (
    <section className="py-32 px-6 bg-gradient-to-b from-obsidian via-obsidian to-obsidian/90">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <h2 className="heading-md mb-2">At a glance</h2>
          <p className="text-white/50">Quick snapshot of my current status and focus areas</p>
        </div>

        <div className="grid grid-cols-3 gap-4">
          {bentos.map((item, idx) => {
            const Icon = item.icon
            return (
              <div
                key={idx}
                className={`${item.span} glass-card p-8 flex flex-col justify-between min-h-48`}
              >
                <div className="space-y-4">
                  <div className="inline-block p-3 bg-accent/10 rounded-xl w-fit">
                    <Icon size={24} className="text-accent" />
                  </div>
                  <div>
                    <p className="text-white/50 text-sm mb-1">{item.title}</p>
                    <p className="heading-sm">{item.subtitle}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
