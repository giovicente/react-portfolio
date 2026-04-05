import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Code, Layers } from 'lucide-react'

export default function Header() {
  const homeImage = `${import.meta.env.BASE_URL}assets/home.png`
    
  return (
    <header className="w-full sticky top-0 z-30 bg-white/60 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-md bg-surface flex items-center justify-center shadow-card border border-border">
            <img src={homeImage} alt="Home" className="w-6 h-6 object-contain" />
          </div>
          <div className="text-sm">
            <div className="font-semibold text-text">Giovanni Gentile</div>
            <div className="text-xs text-muted">Engineering Leader</div>
          </div>
        </Link> 

        <nav className="flex items-center gap-3">
          <NavLink
            to="/coding"
            className={({isActive}) =>
              `px-3 py-2 rounded-md text-sm flex items-center gap-2 ${isActive ? 'bg-surface text-text shadow-card' : 'text-muted hover:text-text hover:bg-white/50'}`
            }
          >
            <Code className="w-4 h-4 text-accent" />
            Coding
          </NavLink>

          <NavLink
            to="/engineering"
            className={({isActive}) =>
              `px-3 py-2 rounded-md text-sm flex items-center gap-2 ${isActive ? 'bg-surface text-text shadow-card' : 'text-muted hover:text-text hover:bg-white/50'}`
            }
          >
            <Layers className="w-4 h-4 text-accent" />
            Engineering & AI
          </NavLink>
        </nav>
      </div>
    </header>
  )
}
