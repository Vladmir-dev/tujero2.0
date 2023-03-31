import React from 'react'
import about1 from "../assets/about1.jpeg"
import about2 from "../assets/about2.jpeg"
import about3 from "../assets/about4.jpeg"

const About = () => {
  return (
    <div className="flex flex-col justify-center font-serif items-center md:mt-[150px] mt-[50px] p-4 md:mb-[50px]">
      <h1 className="md:text-[57px] text-[40px] flex flex-col text-center gap-2">About <h1 className="text-blue-500">Tujero Enterprises</h1></h1>
      <div className="flex justify-center items-center mt-[50px] gap-20">
          <div className="flex flex-col hidden md:block gap-5 ">
          <img src={about2} alt="about" className="w-[250px] ml-[-100px]"/>
          <img src={about1} alt="about" className="w-[500px]"/>
          <img src={about3} alt="about" className="w-[300px] mt-[-50px] ml-[-150px]"/>
        </div>
        <div className="md:w-[600px] flex flex-col gap-4">
          <h1 className="md:text-[35px] text-[30px] font-bold font-serif text-center text-blue-500">We Roar You Our Pride</h1>
          <h1 className="md:text-[37px] text-[30px] text-center">We're Most Proud Of Your Growth, Give us 1 year Working With You</h1>
          <p className="text-center md:text-[20px] font-serif">Established and incorporated in Uganda, TUJERO ENTERPRISES is a private limited company headquartered at Mukwano courts on Buganda Road, Kampala. TUJERO ENTERPRISES inception in 20122 and Yet operated and planned way back for the past 5 years in production of Afri-Wine, our business interest has been Wine Production and ICT Services. We are currently venturing in advertising mainly in Social Media/Digital Marketing, Billboards and Afri-Wine Production as well as provision of other services like Business/Tax consultancy, Ritz Beauty (Cosmetics), Auditing and Start-Ups</p>
          <div>
          <h2 className="text-[30px] text-center font-semibold">Our Mission</h2>
          <p className="text-center md:text-[20px] font-serif">To Provide Quality Products and Services Of Value</p>
          </div>

          <div>
          <h2  className="text-[30px] text-center font-semibold">Our Vision</h2>
          <p className="text-center md:text-[20px] font-serif">To provide exceptional Customer Satisfaction through Quality Services, Production, Innovation and Advanced Technology</p>
          </div>

        </div>
      </div>
    </div>
  )
}

export default About
