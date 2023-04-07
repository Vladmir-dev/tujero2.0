import React from "react";
import FooterLinks from "./FooterLinks";
import { AiOutlineTwitter, AiFillInstagram } from "react-icons/ai";
import { FaFacebookF, FaPinterestP } from "react-icons/fa";
import {BsWhatsapp, BsLinkedin} from 'react-icons/bs'

const Footer = () => {
  const year = new Date().getFullYear();
  console.log("year", year);
  return (
    <div className="w-screen bg-gray-700 text-white p-6 mt-[50px]">
      <ul className="md:flex md:flex-wrap md:justify-around md:items-start md:p-4">
        <FooterLinks />
        <ul className="md:p-0 py-[10px] ">
          <li className="md:text-[25px] text-[20px] text-blue-500 font-semibold">
            Contact Us
          </li>
          <li className="text-[16px] p-[2px]">Mukwano Courts, Buganda Roada</li>
          <li className="text-[16px] p-[2px]">Level 2, 201-202B3</li>
          <li className="text-[16px] p-[2px]">Phone:+256 781 316707/+256 706 181003</li>
          <li className="text-[16px] p-[2px]">Email :info@tujero.com</li>
          <li className="flex mt-[10px] p-[5px] gap-4 items-center">
            <a href="/"><FaFacebookF /></a>
            <a href="/"><AiOutlineTwitter /></a>
            <a href="https://instagram.com/tuje_ro?igshid=YmMyMTA2M2Y="><AiFillInstagram /></a>
            <a href="https://wa.me/message/3KOPMWZIDHSVO1"><BsWhatsapp /></a>
            <a href="https://www.linkedin.com/company/african-farm/"><BsLinkedin /></a>
          </li>
        </ul>
      </ul>

      <hr className="h-[1px] mt-[5px] " />

      <div className="">
        <div className="p-[10px] flex flex-col md:flex-row md:justify-around justify-between">
          <p className="md:text-[12px] text-[13px] order-last text-center py-[5px] md:order-first">
          Copyright ©{year} All rights reserved | Developed by TUJERO ENTEPRISES
          </p> 
        </div>
      </div>
    </div>
  );
};

export default Footer;
