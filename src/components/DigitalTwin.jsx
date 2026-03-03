import React, { useState, useRef, useEffect } from 'react'
import { Send, Bot, Loader, AlertCircle } from 'lucide-react'
import { askDigitalTwin } from '../lib/openrouter'

export default function DigitalTwin() {
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'bot',
      content: "Hey! I'm Shamil's digital twin. Ask me anything about AI, web design, competitive programming, or my journey at SECE. I'm here to clarify doubts and share my perspective on building intelligent systems."
    }
  ])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const messagesEndRef = useRef(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSend = async () => {
    if (!input.trim() || loading) return

    const userMessage = input.trim()
    setInput('')
    setError(null)

    // Add user message
    const userMsgId = Date.now()
    setMessages(prev => [...prev, {
      id: userMsgId,
      type: 'user',
      content: userMessage
    }])

    setLoading(true)

    try {
      const response = await askDigitalTwin(userMessage)
      
      setMessages(prev => [...prev, {
        id: userMsgId + 1,
        type: 'bot',
        content: response
      }])
    } catch (err) {
      setError(err.message || 'Failed to get response. Please try again.')
      console.error('Chat error:', err)
    } finally {
      setLoading(false)
    }
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  return (
    <section id="twin" className="py-32 px-6 bg-gradient-to-b from-obsidian/90 via-obsidian to-obsidian">
      <div className="max-w-3xl mx-auto">
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 bg-accent/20 rounded-xl">
              <Bot size={28} className="text-accent" />
            </div>
            <div>
              <h2 className="heading-md">Digital Twin</h2>
              <p className="text-white/50 text-sm">Ask Shamil's AI twin anything</p>
            </div>
          </div>
          <p className="text-white/60 text-sm">
            Interact with my digital twin to understand my approach to AI, competitive programming, and system design. I'm analytical, ambitious, and systems-driven.
          </p>
        </div>

        {/* Chat Container */}
        <div className="glass-card p-6 flex flex-col h-96 md:h-[500px]">
          {/* Messages */}
          <div className="flex-1 overflow-y-auto space-y-4 mb-6 pr-2">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-xs md:max-w-sm px-4 py-3 rounded-2xl ${
                    msg.type === 'user'
                      ? 'bg-accent/20 border border-accent/30 text-white'
                      : 'bg-white/5 border border-white/10 text-white/90'
                  }`}
                >
                  <p className="text-sm leading-relaxed">{msg.content}</p>
                </div>
              </div>
            ))}

            {loading && (
              <div className="flex justify-start">
                <div className="bg-white/5 border border-white/10 px-4 py-3 rounded-2xl">
                  <div className="flex items-center gap-2">
                    <Loader size={16} className="animate-spin text-accent" />
                    <span className="text-sm text-white/60">Thinking...</span>
                  </div>
                </div>
              </div>
            )}

            {error && (
              <div className="flex justify-start">
                <div className="bg-red-500/10 border border-red-500/30 px-4 py-3 rounded-2xl flex items-start gap-2">
                  <AlertCircle size={16} className="text-red-400 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-red-300">{error}</span>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="flex gap-3">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Ask me anything..."
              className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/40 focus:outline-none focus:border-accent/50"
              disabled={loading}
            />
            <button
              onClick={handleSend}
              disabled={loading || !input.trim()}
              className="glass-card px-4 py-3 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Send size={18} />
            </button>
          </div>
        </div>

        {/* Info Box */}
        <div className="mt-6 p-4 glass-card">
          <p className="text-xs text-white/60">
            💡 <strong>Pro tip:</strong> Ask about my approach to AI systems, hackathon strategies, competitive programming, or how I approach complex technical problems.
          </p>
        </div>
      </div>
    </section>
  )
}
