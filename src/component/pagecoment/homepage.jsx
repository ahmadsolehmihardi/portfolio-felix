import React from 'react'
import Home from '../home/homes/home'
import Branding from '../home/branding'
import About from '../home/about/about'
import Services from '../home/servi/services';
import Galery from '../home/galery/galery';
import Skills from '../home/skills/skills';


const Homepage = () => {
  return (
    <>
      <Home/>
      <Branding/>
      <About/>
      <Services/>
      <Galery/>
      <Skills/>
     
    </>
  )
}

export default Homepage
