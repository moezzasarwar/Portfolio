import React from 'react'
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './components/Home';
import Contact from './components/Contact';
import Skills from './components/Skills';
import About from './components/About';
import Projects from './components/Projects';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar/>
        <Home/>                   {/* Made a whole landin page */}
        <About/>
        <Skills/>
        <Projects/>
        <Contact/>
        <Routes>
          {/*<Route path='/home' element={<Home />} />          {Seprate Pages}
          <Route path='/contact' element={<Contact />} />
          <Route path='/about' element={<About />} />
          <Route path='/skills' element={<Skills />} />
          <Route path='/projects' element={<Projects />} />*/}
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App
