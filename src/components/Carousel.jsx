import React, {useState, useEffect} from 'react'
// import imageSlide from "./data";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
// import logo from '../images/logo-.png'
// import { motion } from "framer-motion";

const Carousel = ({imageSlide, height, title}) => {
    const [currentState, setCurrentState] = useState(0);

    const bgImageStyle = {
      backgroundImage: `url(${imageSlide[currentState].url})`,
      backgroundPosition: "center",
      backgroundSize: "cover",
      height: height,
      transition: "background 0.6s ease-in-out",
    };
  
    const goNext = () => {
      let current = currentState + 1;
  
      if (current === 2) {
        current = 0;
      }
  
      setCurrentState(current);
    };
  
    const goPrev = () => {
      let current = currentState - 1;
  
      if (current === -1) {
        current = 1;
      }
      setCurrentState(current);
    };

    useEffect(() => {
        const timer = setTimeout(() => {
          let current = currentState + 1;
    
          if (current === 2) {
            current = 0;
          }
    
          setCurrentState(current);
        }, 5000);
    
        return () => clearTimeout(timer);
      }, [currentState]);

  return (
    <div id="home" style={bgImageStyle} className="flex w-full ">
      <div className="mt-[100px] md:p-10 text-white w-full flex flex-row justify-between items-center">
        <button className="hover:bg-white hover:text-black border-[2px] border-solid border-solid rounded-full" onClick={() => goPrev()}>
          <SlArrowLeft className="text-[40px] p-2" />
        </button>
        <div className="w-full flex justify-center items-center">
          <div className=" w-full md:m-[200px] flex flex-col justify-center flex-wrap">
            <h1 className="md:text-[45px]  text-[1.875rem] text-center text-blue-500 font-bold">
              Get Quality And Adorable Services
            </h1>
            <p className="text-center md:text-[25px] text-white font-serif">
              An Enterprise that brings you services in the area of Marketing
              and Sales, IT Consultance and Hub (Software, Website, Apps and
              System Development), Business Modeling and Planning, Auditing and
              Taxation consultance
            </p>
          </div>
        </div>
        <button className="hover:bg-white hover:text-black border-[2px] border-solid border-solid rounded-full" onClick={() => goNext()}>
          <SlArrowRight className="text-[40px] p-2" />
        </button>
      </div>
    </div>
  )
}

export default Carousel
