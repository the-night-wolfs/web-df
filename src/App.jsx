// import { useState } from 'react'
import {Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import JoinUs from './pages/JoinUs'
import DonateUs from './pages/Donate'
import Contact from './pages/Contact'
import OurWork from './pages/Work'
import Navbar from './components/NavBar'
import Donation from '../test/index'
function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<>
          <Navbar/><About /></>} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/donate" element={<>
        <Navbar/><DonateUs /></>} />
        <Route path="/ourwork" element={<OurWork />} />
        <Route path="/ourwork" element={<JoinUs />} />
      </Routes>
    </>
  )
}
// function App() {
//   return(

//     <Donation />
//   )
// }
export default App
