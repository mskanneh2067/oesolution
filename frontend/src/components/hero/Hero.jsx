import React from "react";
import { assets } from "../../assets/assets";

const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row flex-wrap bg-[#e5e7eb] rounded-lg px-6 md:px-10 lg:px-20">
      {/* Left Side */}
      <div className="md:w-1/2 flex flex-col items-start justify-center gap-4 py-10 m-auto md:py-[10vw] md:mb-[-30px]  ">
        <p className="text-3xl md:text-4xl lg:text-5xl  font-semibold leading-tight md:leading-tight lg:leading-tight">
          I can help you avoid <br /> unnecessary huddles by
        </p>
        <div className="flex flex-col md:flex-row items-center gap-3  text-lg font-normal">
          <p className="leading-7">
            helping you with your sample characterizations, publication
            payments, purchase of scientific equipment/tools, and information on
            study in Canada.
            
          </p>
        </div>
        <a
          href="#speciality"
          className="flex items-center gap-2 bg-blue-700 px-8 py-3 rounded-full text-white text-sm m-auto md:m-0 hover:scale-105 transition-all duration-300 "
        >
          Book appoitment <img src={assets.arrow_icon} alt="" className="w-3" />
        </a>
      </div>
      {/* Right Side */}
      <div className="md:w-1/3 relative">
        <img
          src={assets.header_img}
          alt=""
          className="w-full md:absolute bottom-0 h-auto rounded-lg"
        />
      </div>
    </div>
  );
};

export default Hero;
