import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import CodingPortfolio from '../pages/CodingPortfolio'
import EngineeringPortfolio from '../pages/EngineeringPortfolio'

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/coding" element={<CodingPortfolio />} />
      <Route path="/engineering" element={<EngineeringPortfolio />} />
    </Routes>
  )
}
