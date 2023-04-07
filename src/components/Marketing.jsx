import React from 'react'
import person from '../assets/person.png'
import Card from './Card'
import Pricing from './Pricing'

const Marketing = () => {

 const packages = [
    
    {
      type: 'B',
      name: 'Graphic design package',
      description: [
        {item:'Logo design and Business card design (100 Paper Business cards) 110,000 UGX'}, 
        {item:'Flyer and Social media banner design.The fee is 450,000 UGX depending on the complexity and number of designs.'},  
      ],
      price: 950000,
    },
    {
      type: 'A',
      name: 'Digital marketing package',
      description: [
        {item:'basic digital marketing services'}, 
        {item:'Social media marketing'}, 
        {item:'Email marketing'}, 
        {item:'Content Creation and marketing'},
        {item:'SEO (search engine optimization)'}
      ],
      price: 'The Fee ranges from 500,000 to 1,000,000 UGX per month depending on the scope and duration of the campaign',
    }, 
  ];

  return (
    <div id="marketing" className="md:mt-[160px] mt-[50px] p-4 mb-[50px] flex gap-20 justify-center items-start">
      <div className="inline-block place-items-center">
        <h1 className="text-[57px] text-center md:text-start">SEO & Digital <br/> Marketing For Your<br/> Business</h1>
        <p className="text-[25px] text-center md:text-start md:w-[700px] italic">We at Tujero know the hardles that many business face in trying to put themselves out there. 
        Tujero solves that for you by advertising for you on social media and other digital platforms. Just let us handle it.
        </p>
      </div>
      <div className="md:block hidden md:w-[500px]">
        <Pricing packages={packages}/> 
      </div>
    </div>
  )
}

export default Marketing
