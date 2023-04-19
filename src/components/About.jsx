import React, {useState} from 'react'
import about1 from "../assets/we.jpg"
import about2 from "../assets/about2.jpeg"
import about3 from "../assets/woman.jpg"
import {AiOutlinePlus, AiOutlineMinus} from 'react-icons/ai'
import {IoIosArrowForward, IoIosArrowDown} from 'react-icons/io'

const About = () => {

  const [show, setShow] = useState("Customer Statisfaction")

  const values = [
    {
      name:"Customer Statisfaction",
      description:"We strive to exceed our customers' expectations and provide them with the best solutions for their goals"
    },
    {
      name:"Innovation",
      description:"We embrace new ideas and technologies and constantly seek to improve our products and services"
    },
    {
      name:"TeamWork",
      description:"We work together as a team and leverage our diverse skills and expertise to achieve our vision."
    },
    {
      name:"Integrity",
      description:"We act with honesty, transparency, and respect in all our interactions with our customers, partners, and stakeholders"
    },
    {
      name:"Quality",
      description:"We adhere to high standards of quality and excellence in everything we do"
    }
  ]

  
  return (
    <div id="about" className="flex flex-col justify-center font-serif items-center md:mt-[150px] mt-[50px] p-4 md:mb-[50px]">
      <h1 className="md:text-[57px] text-[40px] flex md:flex-row flex-col text-center gap-2">About <h1 className="text-blue-500">Tujero Enterprises</h1></h1>
      <div className="flex md:flex-row flex-col justify-center items-center mt-[50px] gap-20">
       
        <div className="md:w-[600px] flex flex-col gap-4">
          <h1 className="md:text-[35px] text-[30px] font-bold font-serif text-center text-blue-500">We Roar You Our Pride</h1>
          <h1 className="md:text-[37px] text-[30px] text-center">We're Most Proud Of Your Growth, Give us 1 year Working With You</h1>
          <p className="text-center md:text-[20px] font-serif">Established and incorporated in Uganda, TUJERO ENTERPRISES is a private limited company headquartered at Mukwano courts on Buganda Road, Kampala. 
TUJERO ENTERPRISES was incepted 2022, Our business interest are in Innovations and high Tech. We are currently venturing in Software, Website and App Development, Data Analysis, and advertising mainly in Branding, Social Media/Digital Marketing, Billboards, and production of Afri-Wine Production.
Note we are cooking something in Tech you should anticipate…</p>
          <div>
          <h2 className="text-[30px] text-center font-semibold">Our Mission</h2>
          <p className="text-center md:text-[20px] font-serif">To deliver, and create high-quality and value-added products and services that satisfy the needs and expectations of our customers and partners, using cutting-edge technologies and creative strategies</p>
          </div>

          <div>
          <h2  className="text-[30px] text-center font-semibold">Our Vision</h2>
          <p className="text-center md:text-[20px] font-serif">To be a trusted and preferred partner for delivering innovative and customized tech and marketing solutions for diverse industries and markets by 2025.</p>
          </div>

        </div>

        <div className="flex flex-col md:mt-[-130px] mt-[-60px] ml-[30px] font-serif gap-5">
          <h1 className="md:text-[35px] md:text-start text-center text-[30px] font-bold">Our Values</h1>
          <div className="md:mt-[40px] mt-[20px] justify-start items-start flex gap-5 flex-col">
            {values.map((item, index) => (
              <div key={index} className="flex flex-col justtify-start items-start">
             <div onClick={()=>setShow(item.name)}  className="flex gap-5 bg-blue-500 duration-500 rounded-full p-2 justify-start items-center">
                  {show === item.name ? <IoIosArrowDown style={{transition: 'opacity 0.5s ease-in-out'}} className="ml-[5px] text-[30px] duration-500 text-white"/>: <IoIosArrowForward style={{transition: 'opacity 0.5s ease-in-out'}}  className="ml-[5px] text-[30px] text-white"/> }
              <h1 className="md:text-[30px] text-[25px] px-[15px]">{item.name}</h1>
            </div>
                {show === item.name && (
                 <div style={{transition: 'opacity 0.8s ease-in-out'}} className="md:text-[20px]  w-[400px] flex-wrap duration-500">
                <p className="ml-[70px]">{item.description}</p>
              </div>
                )}
              
            </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
