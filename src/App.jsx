import Navbar from './components/Navbar'
import slide1 from "./assets/slide1.jpg";
import slide from './assets/slide.jpg'
import slide2 from "./assets/slide2.jpg";
import slide3 from "./assets/slide4.jpg";
import dec from "./assets/decra-.jpg";
import Dec from "./assets/Dec.jpg"
import ZZH from "./assets/ZZH.jpg";
import Carousel from "./components/Carousel";
import Services from "./components/Services"
import About from "./components/About"
import Contact from './components/Contact'
import Footer from "./components/footer/Footer"
import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
//import './App.css'


function App() {
  //const [count, setCount] = useState(0)
  const slides = [
    {
      url: slide1,
    },
    {
      url: slide,
    },
  ];

  return (
    <div className="box-border flex flex-col bg-gray-100">
       <Navbar />
      <Carousel imageSlide={slides} height="100vh" />
      <Services />
      <About />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
