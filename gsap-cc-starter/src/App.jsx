import React from 'react'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import ImageGallery from './components/ImageGallery'

const App = () => {


  return (

    <main className="bg-black">
      <Navbar />
      <Hero />
      <ImageGallery />
    </main>

  )
}

export default App
