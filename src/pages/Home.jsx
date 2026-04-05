import React from 'react'
import Hero from '../components/Hero'
import SectionTitle from '../components/SectionTitle'
import FeatureCard from '../components/FeatureCard'

export default function Home() {
  const itauLogo = `${import.meta.env.BASE_URL}logos/itau.png`
  const meliLogo = `${import.meta.env.BASE_URL}logos/mercado-libre.png`
  const adaLogo = `${import.meta.env.BASE_URL}logos/ada.png`

  return (
    <div>
      <Hero />

      <section className="container mx-auto grid gap-8 px-6 py-10 lg:grid-cols-2">
        <div>
          <SectionTitle>Two professional tracks</SectionTitle>
          <p className="text-muted mb-8 max-w-2xl text-justify">
            Two strategic tracks: building high-quality software and driving
            technical leadership and engineering execution. Each path is designed
            to expand both technical and business impact.
          </p>

          <div className="grid gap-4">
            <FeatureCard
              title="Coding Portfolio"
              stack={['Java', 'Go', 'Python', 'Postgres', 'Docker']}
              stackLabel="Main stack"
            >
              Personal projects involving APIs, command-line applications, and games. Many of them built for learning and to challenge myself technically, or simply because I found the projects interesting and fun.
            </FeatureCard>

            <FeatureCard
              title="Engineering Portfolio & AI"
              stack={['Cloud', 'System Design', 'Coding Assistants', 'Agents']}
              stackLabel="Main stack"
            >
              A curated view of my engineering background, including technical qualifications, cloud expertise, AWS certifications, AI specialization, and technical writing. It reflects both my hands-on technical foundation and my ongoing focus on applying emerging technologies with clarity and purpose.
            </FeatureCard>
          </div>
        </div>

        <aside>
          <SectionTitle subtle>Highlights</SectionTitle>

          <div className="grid gap-4">
            <FeatureCard
              title="Instant Payments / Pix"
              logo={itauLogo}
            >
              Helped deliver key capabilities for Brazil’s instant payments ecosystem, with a focus on payment proof and auditability.
              <span slot="footer" />
            </FeatureCard>

            <FeatureCard
              title="Cash Management Platform"
              logo={itauLogo}
            >
              Contributed to a highly recognized Cash Management platform awarded across Brazil, Latin America, and globally.
            </FeatureCard>

            <FeatureCard 
              title="Mercado Libre" 
              logo={meliLogo}
            >
              Leading software projects in global e-commerce, focused on systems that improve the seller experience.
            </FeatureCard>

            <FeatureCard 
              title="Teaching @ Ada" 
              logo={adaLogo}
            >
              Experienced in teaching programming and making complex technical concepts practical, clear, and accessible.
            </FeatureCard>
          </div>
        </aside>
      </section>
    </div>
  )
}