import React from 'react'
import SectionTitle from '../components/SectionTitle'
import FeatureCard from '../components/FeatureCard'

export default function EngineeringPortfolio() {
  return (
    <div className="container mx-auto px-6 py-12">
      <SectionTitle>Engineering Portfolio & AI</SectionTitle>
      <p className="text-muted mb-8 max-w-2xl">
        A curated space to showcase my AWS and AI certifications, architecture mentoring work, and the technical articles I’ve written.
      </p>

      <div className="grid gap-6 lg:grid-cols-2">
        <FeatureCard 
          title="AWS Cloude Practitioner"
          logo="/public/assets/logos/aws-practitioner.png"
        >
          Foundational certification covering core AWS services, cloud concepts, security, pricing, and architecture principles.
        </FeatureCard>

        <FeatureCard 
          title="Claude Code in Action"
          logo="/public/assets/logos/claude-code.png"
        >
          Hands-on learning focused on applying AI-assisted development in real technical workflows and problem-solving scenarios.
        </FeatureCard>

        <FeatureCard 
          title="Specialization in Software Technologies @ Escola Politécnica da USP"
          logo="/public/assets/logos/politecnica.png"
        >
          Focused on deepening my perspective on software technologies, engineering practices, and the strategic role of technology in business.
        </FeatureCard>

        <FeatureCard 
          title="Technical Mentor"
          logo="/public/assets/logos/mercado-libre.png"
        >
          Currently mentoring two professionals in software architecture, with a focus on building strong foundations in system design and technical decision-making.
          Topics include event-driven solutions, microservices, database design, and Domain-Driven Design (DDD).
        </FeatureCard>
      </div>
    </div>
  )
}
