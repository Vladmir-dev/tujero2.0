import React from 'react'

const Contact = () => {
  return (
    <div className="mt-[100px] p-4 flex flex-col justify-center items-center bg-blue-600 font-serif mb-[-50px]">
      <div className="flex flex-col justify-center items-center md:text-[45px] text-[30px] text-white mt-[50px]">
        <h1>Make A</h1>
        <h1>Free Consultation</h1>
        <div className="flex gap-5">
        <div className="bg-white  w-[80px] h-[3px]"/>
        <div className="bg-white w-[20px] h-[3px]"/>
        </div>
      </div>
      <div className="md:mt-[100px] mt-[50px] flex gap-5 flex-col justify-center p-4 items-center md:mb-[100px]">
        <div className="flex gap-5 justify-center items-center">
          <div>
            <input placeholder="Name" className="md:w-[500px] w-[180px] placeholder-white placeholder:text-[20px] :h-[40px] p-2 text-white border-0 bg-blue-400/50" type="text"/>
          </div>
          <div>
            <input placeholder="Email" className="md:w-[500px] w-[180px] placeholder-white placeholder:text-[20px] md:h-[40px] p-2 text-white border-0 bg-blue-400/50" type="text"/>  
          </div>
        </div>

        <div className="flex gap-5 justify-center items-center">
          <div>
            <input placeholder="Phone" className="md:w-[500px] w-[180px] placeholder-white placeholder:text-[20px] md:h-[40px] p-2 text-white border-0 bg-blue-400/50" type="text"/>
          </div>
          <div>
            <input placeholder="YY/MM/DD" className="md:w-[500px] w-[180px] placeholder-white placeholder:text-[20px] md:h-[40px] p-2 text-white border-0 bg-blue-400/50" type="text"/>  
          </div>
        </div>

        <div className="flex justify-center items-center">
           <textarea className="md:w-[1020px] md:h-[200px] align-top text-white bg-blue-400/50 laeding-normal p-[10px]">New Message</textarea>
        </div>i
        <div className="flex justify-center items-center mt-[20px]">
          <button className="bg-white p-4 rounded-xl md:text-[25px] font-bold text-blue-500">Click To Send</button>
        </div>
      </div>
    </div>
  )
}

export default Contact
