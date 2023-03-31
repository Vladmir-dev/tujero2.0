import React, {useState, useEffect} from 'react'
// import imageSlide from "./data";
import { SlArrowLeft, SlArrowRight,SlArrowDown } from "react-icons/sl";
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
    <div id="home" style={bgImageStyle} className="flex w-full flex-col justify-center items-center">
      <div className="mt-[100px] md:p-10 text-white w-full flex flex-row justify-between items-center">
        <button className="hover:bg-white hover:text-black border-[2px] border-solid border-solid rounded-full" onClick={() => goPrev()}>
          <SlArrowLeft className="text-[40px] p-2" />
        </button>
        <div className="w-full flex-col ml-[100px] flex justify-center items-center">
        <div className=" w-full md:m-[200px] flex flex-col justify-center flex-wrap">
          <div className="flex gap-[70px] font-serif">
           <div className="font-bold text-[47px] flex justify-center items-center flex-col">
               <h1>20 +</h1>
               <h1>Products</h1>
           </div>
           <div className="font-bold text-[47px] flex justify-center items-center flex-col" >
               <h1>15 +</h1>
               <h1>MVPs</h1>
           </div>
          <div className="font-bold text-[47px] flex justify-center items-center flex-col" >
               <h1>10 +</h1>
               <h1>Clients</h1>
           </div>
        </div>       
      </div>   
      </div>
        <button className="hover:bg-white hover:text-black border-[2px] border-solid border-solid rounded-full" onClick={() => goNext()}>
          <SlArrowRight className="text-[40px] p-2" />
        </button>
      </div>
     <div className="w-full justify-center items-center flex mt-[150px] font-bold text-[56px] text-white bottom-0">
          < SlArrowDown className="text-center"/>
     </div>
    </div>
  )
}

export default Carousel
