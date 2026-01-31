import React from 'react'
import NavBar from './components/NavBar.jsx';
import Hero from './components/Hero.jsx';
import ProductViewer from './components/ProductViewer.jsx';
import Showcase from './components/Showcase.jsx';
import Perfomance from './components/Perfomance.jsx';
import Feature from './components/Feature.jsx';
import Highlights from './components/Highlights.jsx';
import Footer from './components/Footer.jsx';
import gsap from 'gsap';
import { ScrollTrigger, SplitText } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger)

const App = () => {
  return (
    <main>
      <NavBar />
      <Hero />
      <ProductViewer />
      <Showcase />
      <Perfomance />
      <Feature />
      <Highlights/>
      <Footer />
    </main>
  )
}

export default App