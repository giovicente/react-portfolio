import React from 'react'
import { Link } from 'react-router-dom'
import { Code, Layers } from 'lucide-react'

export default function Hero() {
  return (
    <section className="container mx-auto px-6 py-16 lg:py-24">
      <div className="grid items-center gap-12 lg:grid-cols-[320px_1fr]">
        <div className="flex justify-center lg:justify-start">
          <div className="w-56 lg:w-72 rounded-3xl overflow-hidden card-glass border border-border shadow-card bg-black/5">
            <img
              src="/assets/profile.jpg"
              alt="Foto de perfil — Seu Nome"
              className="block w-full h-auto"
              onError={(e) => {
                e.currentTarget.onerror = null
                e.currentTarget.src = '/profile.jpg'
              }}
            />
          </div>
        </div>

        <div className="max-w-2xl self-center">
          <span className="inline-flex items-center rounded-full border border-border bg-surface px-3 py-1 text-sm font-medium text-muted mb-5">
            Software Engineering • Leadership • Delivery
          </span>

          <h1 className="text-4xl lg:text-6xl font-extrabold leading-tight tracking-tight mb-5 text-text">
            Giovanni Gentile
            <span className="block text-accent">Engineering Leader</span>
          </h1>

          <p className="text-base lg:text-lg leading-8 text-muted mb-8 text-justify">
            Software engineer with experience in the industry since 2013, delivering production systems, architecture, technical execution, teaching programming, and engineering leadership. I work at the intersection of technical depth, organizational clarity, and building stronger teams. Outside of work, I’m an avid reader and retro gaming enthusiast.
          </p>

          <div className="flex flex-wrap gap-3">
            <Link
              to="/coding"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-accent text-white font-semibold shadow-sm transition hover:opacity-95"
            >
              <Code className="w-4 h-4" />
              Coding Portfolio
            </Link>

            <Link
              to="/engineering"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-surface text-text font-medium border border-border transition hover:bg-white"
            >
              <Layers className="w-4 h-4 text-accent" />
              Engineering Portfolio & AI
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}