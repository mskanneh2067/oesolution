import { FiArrowUpRight } from "react-icons/fi";
import { services } from "../../data/data";
const Publications = () => {
  return (
    <>
      <h1 className="text-2xl mb-2 mx-auto uppercase font-bold">Publications</h1>
      <div className="w-full bg-[#f5f3f0]  rounded-lg py-16">
        <div className="w-full service-main md:container md:mx-auto grid grid-cols-1 place-items-center  md:grid-cols-2 lg:grid-cols-3 sm:gap-5 md:gap-0 lg:gap-0 ">
          {services.map((service) => (
            <div key={service.id} className={service.main}>
              <div className={service.stylesOne}>
                <h1>{service.title}</h1>
                <hr />
              </div>
              <div className={service.stylesTwo}></div>
              <div className={service.stylesThree}></div>
              <img src={service.imgSrc} alt="" className={service.imgBox} />
              <div className={service.circle}>
                <FiArrowUpRight color="white" size={67} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Publications;
