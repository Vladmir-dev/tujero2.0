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
import django from '../assets/django.png'
import node from '../assets/nodejs.png'
import Collections from './Collections'
import docker from '../assets/docker.png'
import kubernates from '../assets/kubernates.png'
import Pricing from './Pricing'
import codetunnel from '../assets/codetunnel.jpeg'
import marketingimage from '../assets/marketing.jpg'

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
      url:flutter
    },
    {
      url:django
    },
    {
      url:node
    },
    {
      url:docker
    },
    {
      url:kubernates
    }
  ]

  const packages = [
    {
      type: 'A',
      name: 'Static Website package',
      description: [
        {item:'This package offers a simple and basic website with up to 5 pages'}, 
        {item:'basic SEO, social media integration'}, 
        {item:'a free domain and hosting for one year'}, 
        {item:'3 months website support and maintenance from publication of the site'}
      ],
      price: 650000,
    },
    {
      type: 'B',
      name: 'Professional Website package',
      description: [
        {item:'A more advanced website with up to 10 pages'}, 
        {item:'A beautiful website interface'}, 
        {item:'A free CMS'},
        {item:'SEO'}, 
        {item:'A visitor or traffic counter'}, 
        {item:'A photo gallery'}, {item:'a feedback form'},
        {item:'A reservation form, and more.'}
      ],
      price: 950000,
    },
    {
      type: 'C',
      name: 'Corporate Website package',
      description: [
        {item:'A comprehensive website with up to 15 pages'},
        {item:'all in “Professional website package”'}, 
        {item:'A custom logo design if needed'},
        {item:'A blog and a YouTube video integration if required or needed'}, 
        {item:'An events calendar system'}, 
        {item:'A file upload system, and more.'}
      ],
      price: 1750000,
    },
    {
      type: 'D',
      name: 'E-commerce Website package',
      description: [
        {item:'A fully functional online store with unlimited products and categories'}, 
        {item:'All in “Corporate website package”'}, 
        {item:'A shopping cart system'}, 
        {item:'A payment gateway integration'}, 
        {item:'An inventory management system where required, and more.'}
      ],
      price: 3500000,
    },
  ];

const marketing = [
    
    {
      type: 'B',
      name: 'Graphic Design package',
      description: [
        {item:'Logo design and Business card design (100 Paper Business cards) 110,000 UGX'}, 
        {item:'Flyer and Social media banner design.The fee is 450,000 UGX depending on the complexity and number of designs.'},  
      ],
      price: 950000,
    },
    {
      type: 'A',
      name: 'Digital Marketing package',
      description: [
        {item:'basic digital marketing services'}, 
        {item:'Social media marketing'}, 
        {item:'Email marketing'}, 
        {item:'Content Creation and marketing'},
        {item:'SEO (search engine optimization)'}
      ],
      price: '500,000 to 1,000,000 ',
    }, 
  ];

  const bgImageStyle = {
    // backgroundImage: `url(${leaves})`,
    backgroundPosition: "center center",
    backgroundRepeat:'no-repeat',
    backgroundSize: "cover",
    // transition: "background 0.6s ease-in-out",
    backgroundAttachment:'fixed',
    backgroundImage: `url(${codetunnel})`,
  };

  const mImageStyle = {
    // backgroundImage: `url(${leaves})`,
    backgroundPosition: "center center",
    backgroundRepeat:'no-repeat',
    backgroundSize: "cover",
    // transition: "background 0.6s ease-in-out",
    backgroundAttachment:'fixed',
    backgroundImage: `url(${marketingimage})`,
  };

  return (
    <div id="services" className="mt-[50px] mb-[50px] font-serif flex flex-col justify-center items-center">
     <div className="flex flex-col justify-center items-center">
            <h1 className=" md:text-[62px] text-[35px] flex justify-center items-center flex-col "><h3 className="flex">Software <p className="text-blue-500 pl-3 pr-3">&</p> ICT</h3> Solutions</h1>
            <p className="md:text-[23px] italic text-gray-500 md:pl-[200px] md:pr-[200px] text-center">At Tujero Enterprises, we specialize in delivering innovative development services that help businesses and organizations thrive in today's digital landscape. We understand the importance of staying ahead of the curve in terms of technology and design, which is why we use the latest tools and techniques to create custom software and web solutions that are tailored to your specific needs</p>
      </div>
      {/*ICT*/}
      <ICT />
      <div className="mt-[100px] mb-[50px] flex flex-wrap p-12 pb-[150px] w-full flex justify-center items-center" style={bgImageStyle}>
        <Pricing packages={packages} pricetype={"ict"}/>
      </div>
      
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
      <div className="mt-[100px] mb-[50px] flex flex-wrap p-12 pb-[150px] w-full flex justify-center items-center" style={mImageStyle}>
        <Pricing packages={marketing} pricetype={"marketing"}/>
      </div>
    </div>
  )
}

export default Services
