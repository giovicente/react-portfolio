import React from 'react'

export default function SectionTitle({ children, subtle }) {
  return (
    <h2 className={`text-2xl font-semibold ${subtle ? 'text-text' : 'text-text'} mb-6`}>
      {children}
    </h2>
  )
}
