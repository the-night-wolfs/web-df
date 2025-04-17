// import { useState } from 'react'
import {Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import JoinUs from './pages/JoinUs'
import DonateUs from './pages/Donate'
import Contact from './pages/Contact'
import OurWork from './pages/Work'
function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/donate" element={<DonateUs />} />
        <Route path="/ourwork" element={<OurWork />} />
        <Route path="/ourwork" element={<JoinUs />} />
      </Routes>
    </>
  )
}

export default App
