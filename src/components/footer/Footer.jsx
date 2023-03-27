import React from "react";
import FooterLinks from "./FooterLinks";
import { AiOutlineTwitter, AiFillInstagram } from "react-icons/ai";
import { FaFacebookF, FaPinterestP } from "react-icons/fa";

const Footer = () => {
  const year = new Date().getFullYear();
  console.log("year", year);
  return (
    <div className="w-screen bg-gray-700 text-white p-6 mt-[50px]">
      <ul className="md:flex md:flex-wrap md:justify-around md:items-center md:p-4">
        <FooterLinks />
        <ul className="md:p-0 py-[10px] ">
          <li className="md:text-[25px] text-[20px] text-blue-500 font-semibold">
            Contact Us
          </li>
          <li className="text-[16px] p-[2px]">Plot 2a, Old Port Bell Road,</li>
          <li className="text-[16px] p-[2px]">Industrial Area. Opp. Top Cuts</li>
          <li className="text-[16px] p-[2px]">Phone:0772 853285/041 4349394</li>
          <li className="text-[16px] p-[2px]">Email :sales@yousite.com</li>
          <li className="flex mt-[10px] p-[5px] gap-4 items-center">
            <FaFacebookF />
            <AiOutlineTwitter />
            <FaPinterestP />
            <AiFillInstagram />
          </li>
        </ul>
      </ul>

      <hr className="h-[1px] mt-[5px] " />

      <div className="">
        <div className="p-[10px] flex flex-col md:flex-row md:justify-around justify-between">
          <p className="md:text-[12px] text-[13px] order-last text-center py-[5px] md:order-first">
          Copyright ©{year} All rights reserved | Developed by TUJERO ENTEPRISES
          </p>
          <div className="flex gap-4 py-[5px] items-center justify-center">
            <img
              className="bg-white w-[30px] h-[20px]"
              src="https://shoplineimg.com/assets/footer/card_visa.png"
              alt=""
            />
            <img
              className="bg-white w-[30px] h-[20px]"
              src="https://shoplineimg.com/assets/footer/card_master.png"
              alt=""
            />
            <img
              className="bg-white w-[30px] h-[20px]"
              src="https://shoplineimg.com/assets/footer/card_paypal.png"
              alt=""
            />
            <img
              className="bg-white w-[30px] h-[20px]"
              src="https://shoplineimg.com/assets/footer/card_amex.png"
              alt=""
            />
            <img
              className="bg-white w-[30px] h-[20px]"
              src="https://shoplineimg.com/assets/footer/card_jcb.png"
              alt=""
            />
            <img
              className="bg-white w-[30px] h-[20px]"
              src="https://shoplineimg.com/assets/footer/card_ecpay.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
