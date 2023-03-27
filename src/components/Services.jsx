import React from 'react'
import ICT from './ICT'
import Marketing from './Marketing'

const Services = () => {
  return (
    <div className="mt-[50px] mb-[50px] font-serif flex flex-col justify-center items-center">
     <div className="flex flex-col justify-center items-center">
            <h1 className=" md:text-[62px] flex justify-center items-center flex-col "><h3 className="flex">Software <p className="text-blue-500 pl-3 pr-3">&</p> ICT</h3> Solutions</h1>
            <p className="md:text-[23px] italic text-gray-500 md:pl-[200px] md:pr-[200px] text-center">At Tujero Enterprises, we specialize in delivering innovative, cutting-edge software, apps and website development services that help businesses and organizations thrive in today's digital landscape.We understand the importance of staying ahead of the curve in terms of technology and design, which is why we use the latest tools and techniques to create custom software and web solutions that are tailored to your specific needs</p>
      </div>
      {/*ICT*/}
      <ICT />
      <Marketing />
    </div>
  )
}

export default Services
