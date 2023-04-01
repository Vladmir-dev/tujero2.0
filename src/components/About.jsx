import React, {useState} from 'react'
import about1 from "../assets/we.jpg"
import about2 from "../assets/about2.jpeg"
import about3 from "../assets/woman.jpg"
import {AiOutlinePlus, AiOutlineMinus} from 'react-icons/ai'

const About = () => {

  const [show, setShow] = useState("")

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
      description:"We adhere to high standards of quality and excellence in everything we do"
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
          <p className="text-center md:text-[20px] font-serif">Established and incorporated in Uganda, TUJERO ENTERPRISES is a private limited company headquartered at Mukwano courts on Buganda Road, Kampala. TUJERO ENTERPRISES was incepted 2022, our business interest have been in ICT Services. We are currently venturing in advertising mainly in Social Media/Digital Marketing, Billboards and Afri-Wine Production as well as provision of other services like Business/Tax consultancy, Ritz Beauty (Cosmetics), Auditing and Start-Ups</p>
          <div>
          <h2 className="text-[30px] text-center font-semibold">Our Mission</h2>
          <p className="text-center md:text-[20px] font-serif">To deliver, and create high-quality and value-added products and services that satisfy the needs and expectations of our customers and partners, using cutting-edge technologies and creative strategies</p>
          </div>

          <div>
          <h2  className="text-[30px] text-center font-semibold">Our Vision</h2>
          <p className="text-center md:text-[20px] font-serif">To be a trusted and preferred partner for delivering innovative and customized tech and marketing solutions for diverse industries and markets by 2025.</p>
          </div>

        </div>
        <div className="flex flex-col md:mt-[-130px] mt-[-60px] font-serif gap-5 ">
          <h1 className="md:text-[35px] md:text-start text-center text-[30px] font-bold">Our Values</h1>
          <div className="md:mt-[40px] mt-[20px] justify-start items-start flex gap-5 flex-col">
            {values.map((item, index) => (
              <div key={index} className="flex flex-col justtify-start items-start">
             <div onClick={()=>setShow(item.name)} className="flex gap-5 bg-blue-500 rounded-full p-2 justify-start items-center">
                  {show === item.name ? <AiOutlineMinus className="text-[30px] text-white"/>: <AiOutlinePlus className="text-[30px] text-white"/> }
              <h1 className="md:text-[30px] text-[25px] px-[15px]">{item.name}</h1>
            </div>
                {show === item.name && (
                 <div className="md:text-[20px]  w-[400px] flex-wrap">
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
