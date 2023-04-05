import React from 'react'
import ICT from './ICT'
import Marketing from './Marketing'
import python from '../assets/python.png'
import javascript  from '../assets/js.png'
import html from '../assets/html.png'
import css from '../assets/css.png'
import react from '../assets/react.png'
import react_native from '../assets/rn.png'
import flutter from '../assets/flutter.png'
import Collections from './Collections'

const Services = () => {
  const langs = [
    {
      url:python
    },
    {
      url:javascript
    },
    {
      url:html
    },
    {
      url:css
    },
    {
      url:react
    },
    {
      url:react_native
    },
    {
      url:flutter
    }
  ]

  return (
    <div id="services" className="mt-[50px] mb-[50px] font-serif flex flex-col justify-center items-center">
     <div className="flex flex-col justify-center items-center">
            <h1 className=" md:text-[62px] text-[35px] flex justify-center items-center flex-col "><h3 className="flex">Software <p className="text-blue-500 pl-3 pr-3">&</p> ICT</h3> Solutions</h1>
            <p className="md:text-[23px] italic text-gray-500 md:pl-[200px] md:pr-[200px] text-center">At Tujero Enterprises, we specialize in delivering innovative development services that help businesses and organizations thrive in today's digital landscape. We understand the importance of staying ahead of the curve in terms of technology and design, which is why we use the latest tools and techniques to create custom software and web solutions that are tailored to your specific needs</p>
      </div>
      {/*ICT*/}
      <ICT />
      <div className="hidden md:block">
      <div className="flex mt-[100px] gap-16">
      {langs.map((item, index)=> (
        <img key={index} src={item.url} alt="logos" className="w-[100px] h-[100px]"/>
      ))}  
      </div>
      </div>
      <div className="w-full md:hidden p-4">
      <Collections items={langs} />
      </div>
      <Marketing />
    </div>
  )
}

export default Services
