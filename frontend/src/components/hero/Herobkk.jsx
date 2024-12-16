import aos from "../../assets/profile/profile.png";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <>

      <section className="w-full bg-[#e5e7eb]">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 md:pt-32 md:px-48 md:gap-2">
          

          <div className="md:px-7">
            <h1 className="text-[2rem] leading-relaxed mb-5">
              <span className=" font-bold">I can help you </span> <br/>
              <span className="italic text-blue-600 font-sans font-semibold">avoids unnassaries expenditures towards your Master, PHD Education in Canada</span> <br/>
              <span className="font-bold">and  create a smooth learning curve.</span> <br/>
            </h1>

            <p className=" leading- mb-5">
           I have industry experience in developing advanced coating and material solutions for Passive Daytime Radiative Cooling (PDRC) technology. I served as an R&D Manager and Materials Scientist at a fast-growing company for about two years, where I improved, innovated, and managed products from conception to commercialization. My work focused on engineering voids to create porous structures in coatings that offer high reflectivity for PDRC applications...<Link to="/about"><span className="ml-1 text-md text-blue-600">Read more</span></Link>
            </p>
            <div>
              <button className="py-2 px-3 bg-blue-600 text-white font-normal rounded-3xl">Book your call</button>
            </div>
           
          </div>
         
          <div className=" flex items-center justify-center py-2 ">
            <img
              src={aos}
              alt="profile"
              className="w-auto "
            />
          </div>
        </div>
      </section>
      <section className="w-full bg-[#e5e7eb]">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 md:py-32 md:px-64 md:gap-2">
          

          <div className=" py-2 flex flex-col  bg-white md:shadow-lg md:rounded-md ">
            <h3 className="font-bold text-xl  text-left py-3 px-5 md:p-10">
              Overview
            </h3>

            <div className="py-3 px-5 md:p-10">
              <p className="mb-5">
                Aminat Oyiza Suleiman has industry experience in developing
                advanced coating and material solutions for Passive Daytime
                Radiative Cooling (PDRC) technology. She served as an R&D
                Manager and Materials Scientist at a fast-growing company for
                about two years, where she improved, innovated, and managed
                products from conception to commercialization. Her work focused
                on engineering voids to create porous structures in coatings
                that offer high reflectivity for PDRC applications.
              </p>
              <p className="mb-5">
                Her greatest strength lies in managing and coordinating
                projects, collaborating across teams, and driving efficiencies.
                She excels at organizing and documenting complex processes using
                project management and collaboration tools. Aminat Oyiza
                Suleiman is passionate about simplifying complex technological
                concepts for businesses and helping teammates develop effective
                products that meet customer needs.
              </p>
              <p className="mb-">
                She holds a PhD in Energy and Materials Sciences from the
                National Institute for Scientific Research - Institut National
                de la Recherche Scientifique (INRS) in Canada, where her
                research centered on understanding the fundamental properties
                and behaviors of phase-changing materials that undergo
                structural transformations for device and space applications, as
                well as coordinating research projects.
              </p>
            </div>
          </div>
          <div className=" flex items-center justify-center py-2 ">
            <img
              src={aos}
              alt="profile"
              className="w-64 h-72 md:w-72 md:h-80 rounded-[50%]"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
