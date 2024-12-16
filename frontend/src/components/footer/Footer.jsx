import React from "react";
import { FaUserDoctor } from "react-icons/fa6";
import { assets } from "../../assets/assets";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="md:mx-10">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        {/* Left Section */}
        <div>
          <div className="flex items-center space-x-5">
            <img src={assets.logo} alt="" className="w-14" />
            <h1 className="font-extrabold text-xl italic font-sans ">
              OE Solutions
            </h1>
          </div>
         
        </div>
        {/* Center Section */}
        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About us</NavLink>
            <NavLink to="/contact">Contact us</NavLink>
            <NavLink to="/">Privacy policy</NavLink>
          </ul>
        </div>
        {/* Right Section */}
        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            
            <li>support@oesolutions.com</li>
          </ul>
        </div>
      </div>
      <div>
        {/* Copyright Text */}
        <hr />
        <p className="py-5 text-sm text-center">
          Copyright © OE Solutions - All Right Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
