import React from 'react'
import bperson from '../assets/bperson.jpeg'
import stars from "../assets/stars.png"

const Card = () => {
  return (
    <div className="md:w-[260px] mt-[100px] ml-[-100px] rounded-md shadow-2xl bg-white md:h-[150px] gap-4 absolute border-[2px] border-solid p-2 flex justify-center items-start">
      <div>
        <img src={bperson} alt="person" className="w-[70px] h-[70px] rounded-full"/>
      </div>
      <div>
        <h4 className="text-[20px] font-bold">Jessica Nagawa</h4>
        <p>Network Manager</p>
        <img src={stars} alt="stars" className="w-[60px] h-[40px]"/>
        <button className="bg-blue-500 text-white p-[4px] rounded-md">Connect</button>
      </div>
    </div>
  )
}

export default Card
