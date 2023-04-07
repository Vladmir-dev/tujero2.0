import React, {useState} from 'react'
import {IoIosCheckmarkCircle} from 'react-icons/io'

const Pricing = ({packages}) => {
   const [selectedPackage, setSelectedPackage] = useState(null);

  const handlePackageSelect = (packageType) => {
    setSelectedPackage(packageType);
  };



  return (
    <div>
      <h2 className="text-[37px] text-center m-[10px] text-blue-500">Choose a Package</h2>
      <div className="flex flex-col gap-8 mt-[50px]">
        {packages.map((pkg) => (
          <div key={pkg.type} onClick={() => handlePackageSelect(pkg)} className="border-[2px] border-solid border-blue-400 rounded-md hover:bg-blue-500 text-purple-500 hover:text-white duration-500 p-2 shadow-md">
            <h3 className="text-[25px] font-bold">{pkg.name}</h3>
          </div>
        ))}
      </div>
      {selectedPackage && (
        <div className="flex flex-col shadow-xl  rounded-md justify-center items-center mt-[50px] border-[2px] border-solid p-[10px]">
          <h3 className="text-[30px] text-blue-500">{selectedPackage.name}</h3>
          <p className="italic">This package offers</p>
          <p className="text-[27px] font-bold">{selectedPackage.price} UGX</p>
          <div className="flex-wrap flex flex-col gap-3 mt-[20px]">
          {selectedPackage.description.map((ele,index) => (
            <h4 key={index} className="text-start flex gap-3 justify-start items-center">
               <IoIosCheckmarkCircle  className="text-[20px] text-blue-700"/>
              {ele.item}   
            </h4>
          ))}
          </div>
          
        </div>
      )}
    </div>
  );}

export default Pricing
