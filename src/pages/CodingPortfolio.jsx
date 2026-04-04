import React from 'react'
import SectionTitle from '../components/SectionTitle'
import FeatureCard from '../components/FeatureCard'

export default function CodingPortfolio() {
  return (
    <div className="container mx-auto px-6 py-12">
      <SectionTitle>Coding Portfolio</SectionTitle>
      <p className="text-muted mb-8 max-w-2xl text-justify">
        A curated collection of technical projects, featuring backend applications designed to be run through the command line or via cURL. Focused on technical tools that can support management (such as PERT and leadership katas) as well as command-line games.
      </p>

      <div className="grid gap-6 lg:grid-cols-2">
        <FeatureCard
          title="Engineering Management Katas"
          repoUrl="https://github.com/giovicente/engineering-management-katas-api"
        >
          A Spring Boot API designed to serve randomized behavioral questions, strategic cases, and reflection prompts for Engineering Managers.
          <div className="mt-3 text-xs text-muted">Java · Spring Boot · JUnit · Mockito · Maven · PostgreSQL · Docker · SonarLint</div>
        </FeatureCard>

        <FeatureCard
          title="PERT Estimates"
          repoUrl="https://github.com/giovicente/estimates-using-pert-method"     
        >
          This project is a command-line application written in Java that allows developers to perform PERT (Program Evaluation and Review Technique) estimates.
          <div className="mt-3 text-xs text-muted">Java · JUnit</div>
        </FeatureCard>

        <FeatureCard 
          title="The Vital Message"
          repoUrl="https://github.com/giovicente/the-vital-message"     
        >
          This program is a reproduction of the game "The Vital Message", published in the book "Computer Battlegames" by Usborne Computer Games in 1982.
          <div className="mt-3 text-xs text-muted">Python</div>
        </FeatureCard>

        <FeatureCard 
          title="Rock, Paper, Scissors, Lizard, Spock"
          repoUrl="https://github.com/giovicente/RockPaperScissorsLizardSpock"
        >
          A Java rendition of Sam Kass’s game, featured in and popularized by the sitcom The Big Bang Theory.
          <div className="mt-3 text-xs text-muted">Java · JUnit</div>
        </FeatureCard>

        <FeatureCard 
          title="Go • Learning Labs"
          repoUrl="https://github.com/giovicente/go-learning-labs"     
        >
          This project is my personal learning playground for the Go programming language.
          <div className="mt-3 text-xs text-muted">Go</div>
        </FeatureCard>
      </div>
    </div>
  )
}
