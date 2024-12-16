import React from "react";
import { assets } from "../assets/assets";

const About = () => {
  return (
    <div>
      <div className="text-center text-2xl pt-10 text-gray-700 font-medium">
        <p>
          ABOUT 
        </p>
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-12">
        <img
          src={assets.profile_right}
          alt=""
          className="w-full md:max-w-[360px]"
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-base text-gray-600">
          <p>
            Aminat Oyiza Suleiman has industry experience in developing advanced
            coating and material solutions for Passive Daytime Radiative Cooling
            (PDRC) technology. She served as an R&D Manager and Materials
            Scientist at a fast-growing company for about two years, where she
            improved, innovated, and managed products from conception to
            commercialization. Her work focused on engineering voids to create
            porous structures in coatings that offer high reflectivity for
            passive cooling applications.
          </p>
          <p>
            Her interests lie in managing and coordinating projects,
            collaborating across teams, and driving efficiencies. She excels at
            organizing and documenting complex processes using project
            management and collaboration tools.She is passionate about
            simplifying complex technological concepts for businesses and
            helping teammates develop effective products that meet customer
            needs.
          </p>
          <p>
          She holds a PhD in Energy and Materials Sciences from the National Institute for Scientific Research - Institut National de la Recherche Scientifique (INRS) in Canada, where her research centered on understanding the fundamental properties and behaviors of phase-changing materials that undergo structural transformations for device and space applications, as well as coordinating research projects.
          </p>
          
        </div>
      </div>

      <div className="text-xl my-4">
        <p>
          WHY <span className="text-gray-700 font-semibold">CHOOSE US</span>
        </p>
      </div>
      <div className="flex flex-col md:flex-row mb-20">
        <div
          className="flex-1 border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-blue-700 hover:text-white transition-all duration-300 text-gray-600 cursor-pointer
        "
        >
          <p className="text-xl font-bold">Expertise</p>
          <p>
         We are expert in what we do
          </p>
        </div>
        <div
          className="flex-1 border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-blue-700 hover:text-white transition-all duration-300 text-gray-600 cursor-pointer
        "
        >
          <p className="text-xl font-bold">Efficient</p>
          <p>
          Time conscious
          </p>
        </div>
        <div
          className="flex-1 border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-blue-700 hover:text-white transition-all duration-300 text-gray-600 cursor-pointer
        "
        >
          <p className="text-xl font-bold">Innovative</p>
          <p>
            We explore newer and better way to help our customers
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
