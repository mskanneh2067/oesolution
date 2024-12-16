import React from "react";
import { FaUserDoctor } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="md:mx-10">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">

     
      {/* Left Section */}
      <div>
        <div className="mb-5  flex items-center space-x-5">
          <FaUserDoctor size={30} className="text-primary" />
          <h1 className="font-extrabold text-xl italic font-sans text-red-600">
            eAppointment
          </h1>
        </div>
        <p className="w-full md:w-2/3 text-gray-600 leading-6">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
      </div>
      {/* Center Section */}
      <div>
        <p className="text-xl font-medium mb-5">COMPANY</p>
        <ul className="flex flex-col gap-2 text-gray-600">
          <li>Home</li>
          <li>About us</li>
          <li>Contact us</li>
          <li>Privacy policy</li>
        </ul>
      </div>
      {/* Right Section */}
      <div>
        <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
        <ul className="flex flex-col gap-2 text-gray-600">
          <li>+231-880-828285</li>
          <li>eappointment@docareliberia.com</li>
        </ul>
      </div>
      </div>
      <div>
        {/* Copyright Text */}
        <hr/>
         <p className="py-5 text-sm text-center">Copyright © 2024 Kanstars Vision - All Right Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
