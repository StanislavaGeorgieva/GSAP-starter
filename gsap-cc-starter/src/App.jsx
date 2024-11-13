import React from 'react'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import ImageGallery from './components/ImageGallery'
import About from './components/About'
import Highlights from './components/Highlights'


const App = () => {
  return (
    <main className="bg-black">
      <Navbar />
      <Hero />
      <About />
      <Highlights />
      <ImageGallery />
    </main>
  )
}

export default App
