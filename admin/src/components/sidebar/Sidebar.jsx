import React, { useContext } from "react";
import { AdminContext } from "../../context/AdminContext";
import { DoctorContext } from "../../context/DoctorContext";
import { AdminMenu,DoctorMenu } from "../../data/data";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const { aToken } = useContext(AdminContext);
  const { dToken } = useContext(DoctorContext);
  return (
    <div className="min-h-screen bg-white border-r">
      {aToken && (
        <ul className="text-[#515151] mt-5">
          {AdminMenu.map((item, index) => (
            <NavLink
              key={index}
              to={item.menuLink}
              className={({ isActive }) =>
                `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer ${
                  isActive ? "bg-[#F2F3FF] border-r-4 border-primary" : ""
                }`
              }
            >
              <img src={item.image} alt="" />
              <p>{item.menuItem}</p>
            </NavLink>
          ))}
        </ul>
      )}
      {dToken && (
        <ul className="text-[#515151] mt-5">
          {DoctorMenu.map((item, index) => (
            <NavLink
              key={index}
              to={item.menuLink}
              className={({ isActive }) =>
                `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer ${
                  isActive ? "bg-[#F2F3FF] border-r-4 border-primary" : ""
                }`
              }
            >
              <img src={item.image} alt="" />
              <p className="hidden md:block">{item.menuItem}</p>
            </NavLink>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Sidebar;
