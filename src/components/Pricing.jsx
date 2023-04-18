import React, {useState} from 'react'
import {IoIosCheckmarkCircle} from 'react-icons/io'

const Pricing = ({packages}) => {
   const [selectedPackage, setSelectedPackage] = useState(null);

  const handlePackageSelect = (packageType) => {
    setSelectedPackage(packageType);
  };



  return (
    <div>
      <h2 className="text-[37px] text-center m-[ 10px] text-blue-500">Choose a Package</h2>
      <div className="flex mt-[50px] gap-5">
        {packages.map((pkg) => (
          <div key={pkg.type} onClick={() => handlePackageSelect(pkg)} className="rounded-md hover:bg-blue-500 bg-black/70 text-blue-500 hover:text-white duration-500 p-2 shadow-md flex justify-center items-center">
            <h3 className="text-[25px] text-center font-bold">{pkg.name}</h3>
          </div>
        ))}
      </div>
      {selectedPackage && (
        <div className="flex flex-col shadow-xl py-6 rounded-md justify-center items-center mt-[50px] border-[2px] border-solid p-[10px]">
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
