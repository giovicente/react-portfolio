import React from 'react'
import AppRouter from './routes/AppRouter'
import Header from './components/Header'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-bg">
      <Header />
      <main className="flex-grow">
        <AppRouter />
      </main>
      <Footer />
    </div>
  )
}
