import React from 'react'
import slide1 from "../assets/slide1.jpg";
import slide2 from "../assets/slide2.jpg";
import slide3 from "../assets/slide4.jpg";

const ICT = () => {
  return (
    <div className="flex justify-center w-full  mt-[70px] p-4 gap-20 items-center">
        <div className="flex justify-center gap-20 items-center  p-4">
          <div className="flex flex-col gap-20 justify-center items-center">
              <img src={slide1} className="w-[300px] h-[300px] shadow-2xl shadow-gray-500 rounded-full"/>
              <img src={slide2} className="w-[200px] h-[200px] shadow-2xl shadow-gray-500 rounded-full"/>
          </div>
          <div>
            <img src={slide3} className="w-[420px] h-[420px] rounded-full shadow-2xl shadow-gray-500"/>
            </div>
        </div>
 

        <div className="flex justify-center items-center  h-full p-4">
          <ul className="flex flex-col gap-16 w-full">

           <li className="w-full ml-[-20px]">
             <div className="flex justify-start items-start w-full ">
              <h2 className="text-white bg-blue-400 float-left mr-[20px] p-5 text-bold md:h-[40px] md:w-[40px] rounded-full text-[30px] justify-center items-center flex rounded-full">1</h2>
                <div className="w-full inline-block">
                  <h2 className="text-[30px]  font-bold text-blue-500">Web Development</h2>
                    <p className="flex-wrap md:w-[400px]" >whether you're looking for a simple website to showcase your business, an e-commerce platform to boost your sales, or a complex software solution to streamline your operations, we have the expertise to help your business succeed in today's digital age</p>
                </div>
            </div>
           </li>


           <li className="ml-[60px] w-full">
           <div className="flex justify-start items-start w-full ">
           <h2 className="text-white bg-blue-400 float-left mr-[20px] p-5 text-bold md:h-[40px] md:w-[40px] rounded-full text-[30px] justify-center items-center flex rounded-full">2</h2>
            <div className="w-full inline-block">
           <h2 className="text-[30px]  font-bold text-blue-500">App Development</h2>
            <p className="flex-wrap md:w-[400px]" >whether you're looking for a simple website to showcase your business, an e-commerce platform to boost your sales, or a complex software solution to streamline your operations, we have the expertise to help your business succeed in today's digital age</p>
           </div>
           </div>
           </li>


             <li className="w-full ml-[-20px]">
             <div className="flex justify-start items-start w-full ">
              <h2 className="text-white bg-blue-400 float-left mr-[20px] p-5 text-bold md:h-[40px] md:w-[40px] rounded-full text-[30px] justify-center items-center flex rounded-full">3</h2>
                <div className="w-full inline-block">
                  <h2 className="text-[30px]  font-bold text-blue-500">Artificial Intelligence & Machine Learning</h2>
                    <p className="flex-wrap md:w-[400px]" >whether you're looking for a simple website to showcase your business, an e-commerce platform to boost your sales, or a complex software solution to streamline your operations, we have the expertise to help your business succeed in today's digital age</p>
                </div>
            </div>
           </li>
          </ul>
        </div>
      </div>
  )
}

export default ICT
