import React from 'react'
import about1 from "../assets/we.jpg"
import about2 from "../assets/about2.jpeg"
import about3 from "../assets/woman.jpg"
import {AiOutlinePlus} from 'react-icons/ai'

const About = () => {
  return (
    <div id="about" className="flex flex-col justify-center font-serif items-center md:mt-[150px] mt-[50px] p-4 md:mb-[50px]">
      <h1 className="md:text-[57px] text-[40px] flex md:flex-row flex-col text-center gap-2">About <h1 className="text-blue-500">Tujero Enterprises</h1></h1>
      <div className="flex justify-center items-center mt-[50px] gap-20">
       
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
        <div className="flex flex-col md:mt-[-130px] font-serif hidden md:block gap-5 ">
          <h1 className="md:text-[35px] font-bold">Our Values</h1>
          <div className="mt-[40px] justify-start items-start flex gap-5 flex-col">
            <div className="flex gap-5 bg-blue-500 rounded-full p-2 justify-center items-center">
              <AiOutlinePlus className="text-[35px] text-white"/>
              <h1 className="text-[30px] px-[15px]">Customer Satisfaction</h1>
            </div>
          <div className="flex gap-5 bg-blue-500 rounded-full p-2 justify-center items-center">
              <AiOutlinePlus className="text-[35px] text-white"/>
              <h1 className="text-[30px] px-[15px]">Innovation</h1>
          </div>
          <div className="flex gap-5 bg-blue-500 rounded-full p-2 justify-center items-center">
              <AiOutlinePlus className="text-[35px] text-white"/>
              <h1 className="text-[30px] px-[15px]">Teamwork</h1>
          </div>
          <div className="flex gap-5 bg-blue-500 rounded-full p-2 justify-center items-center">
              <AiOutlinePlus className="text-[35px] text-white"/>
              <h1 className="text-[30px] px-[15px]">Integrity</h1>
          </div>
          <div className="flex gap-5 bg-blue-500 rounded-full p-2 justify-center items-center">
              <AiOutlinePlus className="text-[35px] text-white"/>
              <h1 className="text-[30px] px-[15px]">Quality</h1>
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
