import React, {useState, useEffect} from 'react'
import logo from '../assets/logo.png'
import logo2 from '../assets/logo2.png'
import { AiOutlineMenu,AiOutlineClose, AiOutlinePlus } from 'react-icons/ai'
import {Link} from 'react-scroll'
const Navbar = () => {
const [show, setShow] = useState(false);
const [drop, setDrop] = useState(false);

useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 10) {
        setShow(true);
      } else {
        setShow(false);
      }
    });
    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);


  return (
    <div className={`${
        show
          ? "md:fixed fixed z-20 w-screen bg-white drop-shadow-lg duration-500 h-auto "
          : "fixed z-20 w-screen"
      }`}>
      {/*destop view*/}
      <div className="flex md:justify-around justify-between items-center p-4">
          <Link 
              to='home'
              smooth={true} 
              duration={700}
            ><div className="md:w-[70px] w-[50px] h-[50px] md:h-[70px] ">
         {show ? <img src={logo} alt="logo" /> : <img src={logo2} alt="logo" />}
      </div>
        </Link>
        {/*mobile*/}
        <button onClick={()=> {setShow(true);setDrop(!drop)}} className={show ? "md:hidden text-black text-[37px]" : "text-white text-[37px] md:hidden "}>
          {drop ? <AiOutlineClose/> : <AiOutlineMenu />}
        </button>
        
        {/* desktop*/}
      <div className="flex justify-center font-serif items-center hidden md:block">
        <ul className={show ? "flex text-black hover:text-blue-500 font-bold gap-10 justify-between items-center": "flex text-black hover:text-blue-500 text-white font-bold gap-10 justify-between items-center"}>
          
            <Link 
              to='home'
              smooth={true} 
              duration={700}
            >
              <li
                className="pl-4 pr-4 text-[25px]  duration-500 hover:bg-blue-400 hover:text-white rounded-md"
              >
                Home
              </li>
            </Link>
          <Link to='services' smooth={true} duration={700}><li className="pl-4 pr-4 text-[25px] duration-500 hover:bg-blue-400 hover:text-white rounded-md">Services</li></Link>
          <Link to='about' smooth={true} duration={700}><li className="pl-4 pr-4 text-[25px] duration-500 hover:bg-blue-400 hover:text-white rounded-md">About Us</li></Link>
          <Link to='contact' smooth={true} duration={700}><li className="pl-4 pr-4 text-[25px] duration-500 hover:bg-blue-400 hover:text-white rounded-md">Contact</li></Link>
        </ul>
      </div>
      
      {/*Mobile drop down*/}
      </div>
      {drop && (
      <div className="w-full flex md:hidden justify-center font-serif p-4 items-center">
        <ul className="flex flex-col gap-5 text-[25px] w-full">
        <Link 
              to='home'
              smooth={true} 
              duration={700}
            >
        <li className="w-full flex justify-between">Home <AiOutlinePlus /></li>
        </Link>
        <Link 
              to="services"
              smooth={true} 
              duration={700}
            >
        <li className="w-full flex justify-between">Services < AiOutlinePlus /></li>
        </Link>
        <Link 
              to='about'
              smooth={true} 
              duration={700}
            >
        <li className="w-full flex justify-between">About Us <AiOutlinePlus /></li>
        </Link>
         <Link 
              to='contact'
              smooth={true} 
              duration={700}
            >
        <li className="w-full flex justify-between">Contact <AiOutlinePlus /> </li>
        </Link>
        </ul>
      </div>
      )}
    </div>
  )
}

export default Navbar
