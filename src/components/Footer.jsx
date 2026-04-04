import React from 'react'

export default function Footer() {
  return (
    <footer className="mt-12 border-t border-border bg-transparent">
      <div className="container mx-auto px-6 py-6 text-sm text-muted flex items-center justify-between">
        <div>© {new Date().getFullYear()} • giovicente</div>
        <div className="text-xs">React · Vite · Tailwind CSS · React Router · lucide-react · GitHub Pages</div>
      </div>
    </footer>
  )
}
