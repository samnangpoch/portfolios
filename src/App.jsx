import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Skills from './components/Skills'
import WorkExperience from './components/WorkExperience'
import About from './components/About'
import Contact from './components/Contact'

import Bg_gradient from './assets/wave.jpg'
import Projects from './components/Projects'

const App = () => {
  return (
    <div className='bg-background'>
      <div 
        style={{
         backgroundImage: `url(${Bg_gradient})`,
          backgroundPosition: `50% 50%`,
        }}
      >
        <Navbar/>
        <Hero/>
      </div>
      
      <Skills/>
      <WorkExperience/>
      <About/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
