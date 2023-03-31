import React from 'react'
import person from '../assets/person.png'
import Card from './Card'

const Marketing = () => {
  return (
    <div id="marketing" className="md:mt-[160px] mt-[50px] p-4 mb-[50px] flex gap-20 justify-center items-center">
      <div className="inline-block place-items-center">
        <h1 className="text-[57px] text-center md:text-start">SEO & Digital <br/> Marketing For Your<br/> Business</h1>
        <p className="text-[25px] text-center md:text-start md:w-[700px] italic">We at tujero know the hardles that many business face in trying to put themselves out there. 
        Tujero solves that for you by advertising for you on social media and other digital platforms. Just let us handle it.
        </p>
      </div>
      <div className="md:block hidden">
        <Card />
        <img src={person} alt="person"/>
      </div>
    </div>
  )
}

export default Marketing
