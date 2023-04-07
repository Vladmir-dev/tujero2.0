import React,{useState} from 'react'
import slide1 from "../assets/ai.jpg";
import slide2 from "../assets/ic.jpg";
import slide3 from "../assets/slide4.jpg";
import coding from '../assets/coding.jpg'
import Pricing from "./Pricing"

const ICT = () => {

const [selectedPackage, setSelectedPackage] = useState(null);

  const handlePackageSelect = (packageType) => {
    setSelectedPackage(packageType);
  };

 const packages = [
    {
      type: 'A',
      name: 'Static website package',
      description: 'This package offers a simple and basic website with up to 5 pages, basic SEO, social media integration, a free domain and hosting for one year, and 3 months website support and maintenance from publication of the site.',
      price: 650000,
    },
    {
      type: 'B',
      name: 'Professional website package',
      description: 'This package offers a more advanced website with up to 10 pages, a beautiful website interface, a free CMS, SEO, a visitor or traffic counter, a photo gallery, a feedback form, a reservation form, and more.',
      price: 950000,
    },
    {
      type: 'C',
      name: 'Corporate website package',
      description: 'This package offers a comprehensive website with up to 15 pages, all in “B”, a custom logo design if needed, a blog and a YouTube video integration if required or needed, an events calendar system, a file upload system, and more.',
      price: 1750000,
    },
    {
      type: 'D',
      name: 'E-commerce website package',
      description: 'This package offers a fully functional online store with unlimited products and categories, all in “C”, a shopping cart system, a payment gateway integration, an inventory management system where required, and more.',
      price: 3500000,
    },
  ];

  return (
    <div className="flex justify-center w-full  mt-[70px] p-4 gap-20 items-start">
      <div className="hidden md:block md:w-[500px]">
       <Pricing /> 
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


           <li className="md:ml-[60px] w-full">
           <div className="flex justify-start items-start w-full ">
           <h2 className="text-white bg-blue-400 float-left mr-[20px] p-5 text-bold md:h-[40px] md:w-[40px] rounded-full text-[30px] justify-center items-center flex rounded-full">2</h2>
            <div className="w-full inline-block">
           <h2 className="text-[30px]  font-bold text-blue-500">App Development</h2>
            <p className="flex-wrap md:w-[400px]" >Our team of expert developers specializes in creating mobile apps that enhance customer engagement, increase brand visibility, and drive business growth.Our app development services are tailored to meet the specific needs of your business, whether you're in healthcare, education, retail, or finance. We take the time to understand your unique requirements and develop customized solutions that solve your business challenges and provide a seamless user experience</p>
           </div>
           </div>
           </li>


             <li className="w-full ml-[-20px]">
             <div className="flex justify-start items-start w-full ">
              <h2 className="text-white bg-blue-400 float-left mr-[20px] p-5 text-bold md:h-[40px] md:w-[40px] rounded-full text-[30px] justify-center items-center flex rounded-full">3</h2>
                <div className="w-full inline-block">
                  <h2 className="text-[30px]  font-bold text-blue-500">Artificial Intelligence & Machine Learning</h2>
                    <p className="flex-wrap md:w-[400px]" >Our AI and machine learning services are tailored to meet the specific needs of your business, whether you're in healthcare, finance, e-commerce, or any other industry. We take the time to understand your unique requirements and develop customized solutions that solve your business challenges and drive growth</p>
                </div>
            </div>
           </li>
          </ul>
        </div>
      </div>
  )
}

export default ICT
