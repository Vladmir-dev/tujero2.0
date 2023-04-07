import React, {useState} from 'react'
import {IoIosCheckmarkCircle} from 'react-icons/io'

const Pricing = () => {
   const [selectedPackage, setSelectedPackage] = useState(null);

  const handlePackageSelect = (packageType) => {
    setSelectedPackage(packageType);
  };

  const packages = [
    {
      type: 'A',
      name: 'Static website package',
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
      name: 'Professional website package',
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
      name: 'Corporate website package',
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
      name: 'E-commerce website package',
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
