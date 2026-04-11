import React, { useState } from 'react'
import { ArrowRight, Github } from 'lucide-react'

export default function FeatureCard({ title, children, footer, stack = [], stackLabel, logo, repoUrl, siteUrl }) {
  const hasStack = Array.isArray(stack) && stack.length > 0

  // small helper component to try multiple candidate paths for the logo gracefully
  function LogoImg({ logoProp }) {
    if (!logoProp) return null

    // build candidate paths: allow full paths or common public folders
    const candidates = []
    if (logoProp.startsWith('/')) {
      // if user provided an absolute-like path, try it first and also try common fallbacks
      candidates.push(logoProp)
      // if it looks like /assets/... and fails, also try /logos and /assets root and / root
      const name = logoProp.split('/').pop()
      candidates.push(`/assets/logos/${name}`, `/logos/${name}`, `/assets/${name}`, `/${name}`)
    } else {
      // if just filename or relative, try several public locations
      candidates.push(logoProp, `/assets/logos/${logoProp}`, `/logos/${logoProp}`, `/assets/${logoProp}`, `/${logoProp}`)
    }

    const [idx, setIdx] = useState(0)
    const [failed, setFailed] = useState(false)
    const src = candidates[idx]

    if (failed) return null

    return (
      <img
        src={src}
        alt=""
        aria-hidden="true"
        className="w-full h-full object-contain"
        onError={() => {
          const next = idx + 1
          if (next < candidates.length) {
            setIdx(next)
          } else {
            setFailed(true)
          }
        }}
      />
    )
  }

  return (
    <div className="card-glass p-5 rounded-xl border border-border shadow-card">
      {/* Title row: optional small logo (discrete) + title */}
      <h3 className="text-lg font-semibold text-text mb-2">
        <div className="flex items-center gap-3">
          {logo ? (
            <div className="w-6 h-6 flex-shrink-0 rounded-sm overflow-hidden bg-surface border border-border flex items-center justify-center">
              <LogoImg logoProp={logo} />
            </div>
          ) : null}
          <span>{title}</span>
        </div>
      </h3>

      <div className="text-muted mb-4">{children}</div>

      {hasStack && (
        <div className="mt-4 pt-3 border-t border-border">
          {stackLabel ? <div className="text-xs text-muted mb-2">{stackLabel}</div> : null}

          <div className="flex flex-wrap items-center gap-2 text-sm text-text">
            {stack.map((tech, i) => (
              <span key={tech} className="inline-flex items-center gap-2">
                <span className="leading-none">{tech}</span>
                {i < stack.length - 1 && <span className="text-muted mx-1">•</span>}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* repo link and site link: subtle, only when provided */}
      {repoUrl || siteUrl ? (
        <div className="mt-4 flex items-center gap-4 text-sm">
          {repoUrl && (
            <a
              href={repoUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-muted hover:text-text hover:underline"
            >
              <Github className="w-4 h-4 text-muted" />
              <span>View on GitHub</span>
            </a>
          )}
          {siteUrl && (
            <a
              href={siteUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-muted hover:text-text hover:underline"
            >
              <ArrowRight className="w-4 h-4 text-muted" />
              <span>View site</span>
            </a>
          )}
        </div>
      ) : null}

      {footer ? (
        <div
          className={`pt-3 flex items-center justify-end text-sm text-muted gap-2 ${
            hasStack ? '' : 'border-t border-border'
          }`}
        >
          <span>{footer}</span>
          <ArrowRight className="w-4 h-4 text-accent" />
        </div>
      ) : null}
    </div>
  )
}
