import React from 'react';
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Homepage from './components/Homepage'
import Events from './components/Events'
import Gallery from './components/Gallery'
import Schedule from './components/Schedule'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/events" element={<Events />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/schedule" element={<Schedule />} />
    </Routes>
  )
}

export default App