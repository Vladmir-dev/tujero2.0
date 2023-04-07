import React from 'react'
import leaves from '../assets/contact.jpeg'


const Contact = () => {

   const bgImageStyle = {
      // backgroundImage: `url(${leaves})`,
      backgroundPosition: "center center",
      backgroundRepeat:'no-repeat',
      backgroundSize: "cover",
      // transition: "background 0.6s ease-in-out",
      backgroundAttachment:'fixed',
      backgroundImage: `linear-gradient(to right, rgba(129, 216, 208, 1), rgba(0,0,0,0)), url(${leaves})`,
    };

  return (

    <div id="contact" style={bgImageStyle} className="mt-[100px] p-4 flex flex-col bg-gradient-to-r from-indigo-500 justify-center items-center bg-blue-600 font-serif mb-[-50px]">
      <div className="flex flex-col font-bold  justify-center items-center md:text-[45px] text-[30px] text-white mt-[50px]">
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
            <input placeholder="Name" className="md:w-[500px] w-[180px] placeholder-white placeholder:text-[20px] :h-[40px] p-2 text-white border-0 bg-black/70" type="text"/>
          </div>
          <div>
            <input placeholder="Email" className="md:w-[500px] w-[180px] placeholder-white placeholder:text-[20px] md:h-[40px] p-2 text-white border-0 bg-black/70" type="text"/>  
          </div>
        </div>

        <div className="flex gap-5 justify-center items-center">
          <div>
            <input placeholder="Phone" className="md:w-[500px] w-[180px] placeholder-white placeholder:text-[20px] md:h-[40px] p-2 text-white border-0 bg-black/70" type="text"/>
          </div>
          <div>
            <input placeholder="YY/MM/DD" className="md:w-[500px] w-[180px] placeholder-white placeholder:text-[20px] md:h-[40px] p-2 text-white border-0 bg-black/70" type="text"/>  
          </div>
        </div>

        <div className="flex justify-center items-center">
           <textarea className="md:w-[1020px] w-[380px] md:h-[200px] h-[200px] align-top text-white bg-black/70 laeding-normal p-[10px]">New Message</textarea>
        </div>
        <div className="flex justify-center items-center md:mt-[20px]">
          <button className="bg-white p-4 rounded-xl md:text-[25px] font-bold text-blue-500">Submit</button>
        </div>
      </div>
    </div>
  )
}

export default Contact
