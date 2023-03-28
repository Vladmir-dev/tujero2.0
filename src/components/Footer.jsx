// import {
  // ClockIcon,
  // MapPinIcon,
  // PhoneIcon,
  // QuestionMarkCircleIcon, 
// } from "@heroicons/react/24/solid";
import React from "react";
// import {AiFacebook} from 'react-icons'
// import FacebookIcon from "@mui/icons-material/Facebook";
// import TwitterIcon from "@mui/icons-material/Twitter";
// import WhatsAppIcon from "@mui/icons-material/WhatsApp";
// import CopyrightIcon from "@mui/icons-material/Copyright";



export default function Footer() {
  return (
    <div className="flex w-full justify-center bg-primary py-4 text-[#999] bottom-0 left-0">
      <div className="max-w-full w-[1240px] px-8  margin-auto">
        <div className="w-full flex flex-col md:flex-row  gap-x-14 ">
          <div className="my-4 flex flex-col items-center flex-1 md:items-start ">
            <div className="text-blue-500 my-4 text-2xl">Tujero</div>
            <div className="text-white my-4 flex flex-col items-center text-center md:text-left">
              This website and its contents are provided "as is" and "as
              available" without any warranty or representations of any kind,
              whether express or implied. Price and availability information is
              subject to change without notice
            </div>
          </div>
          <div className="my-4 flex flex-col items-center flex-1 md:items-start">
            <div className="text-blue-500 my-4 text-xl">Follow us</div>
            <div className="flex flex-col items-center md:items-start ">
              <div className="flex flex-col items-center md:items-start space-y-2">
                <div className="flex items-center space-x-4">
                  <div className="text-white">
                    <FacebookIcon />
                  </div>
                  <div className="text-white">
                    <TwitterIcon />
                  </div>
                  <div className="text-white">
                    <WhatsAppIcon />
                  </div>
                </div>
                <div className="text-white">
                  All rights reserved. <CopyrightIcon /> Tujero
                </div>
              </div>
            </div>
          </div>

          <div className="my-4 flex-1 flex flex-col items-center md:items-start order-last">
            <div className="text-blue-500 my-4 text-xl">Contact Us</div>
            <div className="flex flex-col items-center md:items-start space-y-2">
              <div className="text-white flex space-x-2 items-center">
                <PhoneIcon className="h-5 w-5 text-blue-500" />
                <div>+1 (800) 123-45-67</div>
              </div>
              <div className="text-white flex space-x-2 items-center">
                <MapPinIcon className="h-5 w-5 text-blue-500" />
                <div>1 infinite loop, Cupertino, CA 95014</div>
              </div>
              <div className="text-white flex space-x-2 items-center">
                <ClockIcon className="h-5 w-5 text-blue-500" />
                <div>9:00am — 6:00pm</div>
              </div>
              <div className="text-white flex space-x-2">
                <QuestionMarkCircleIcon className="h-5 w-5 text-blue-500" />
                <div>FAQs</div>
              </div>
            </div>
          </div>
          <div className="my-4 flex-1 flex flex-col items-center md:items-start">
            <div className="text-blue-500 my-4 text-xl">Most Popular</div>
            <div className="flex flex-col items-center md:items-start space-y-2">
              <div className="text-white hover:underline underline-offset-4 transition-all ease-in duration-300 cursor-pointer">
                Websites
              </div>
              <div className="text-white hover:underline underline-offset-4 transition-all ease-in duration-300 cursor-pointer">
                Apps
              </div>
              <div className="text-white hover:underline underline-offset-4 transition-all ease-in duration-300 cursor-pointer">
                Graphics design
              </div>
              <div className="text-white hover:underline underline-offset-4 transition-all ease-in duration-300 cursor-pointer">
                Collections
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
