import { NavLink, useNavigate } from "react-router-dom";
import { Menu } from "../../data/data";
import { FaUserDoctor } from "react-icons/fa6";
import { useContext, useState } from "react";
import { assets } from "../../assets/assets";
import { AppContext } from "../../context/AppContext";
const Header = () => {
  const { token, setToken, userData } = useContext(AppContext);
  const [menu, setMenu] = useState(false);
  const navigate = useNavigate();

  const logout = () => {
    setToken(false);
    localStorage.removeItem("token");
  };
  return (
    <div className="flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400">
      <NavLink to="/">
        <div className="flex items-center space-x-5">
          <img src={assets.logo} alt="" className="w-14" />
          <h1 className="hidden md:flex font-extrabold text-xl italic font-sans ">
            OE Solutions
          </h1>
        </div>
      </NavLink>
      <div>
        <ul className="hidden md:flex items-start gap-5 font-medium">
          {Menu.map((item) => (
            <NavLink key={item.id} to={item.menuLink}>
              <li className="py-1">{item.menuItem}</li>
              <hr className="hidden border-none outline-none h-0.5 bg-primary w-3/5 m-auto" />
            </NavLink>
          ))}
        </ul>
      </div>
      <div className="flex items-center gap-4">
        {token && userData ? (
          <div className="flex items-center gap-2 cursor-pointer group relative">
            <img src={userData.image} alt="" className="w-8 rounded-full" />
            <img src={assets.dropdown_icon} alt="" className="w-2.5" />
            <div className="z-20 absolute top-0 right-0  pt-14 text-base font-medium hidden group-hover:block text-gray-600">
              <div className="min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4">
                <p
                  onClick={() => navigate("/my-profile")}
                  className="hover:text-black cursor-pointer"
                >
                  My Profile
                </p>
                <p
                  onClick={() => navigate("/my-appointments")}
                  className="hover:text-black cursor-pointer"
                >
                  My Appoitment
                </p>
                <p onClick={logout} className="hover:text-black cursor-pointer">
                  Logout
                </p>
              </div>
            </div>
          </div>
        ) : (
          <button
            className=" text-white px-8 py-3 rounded-full font-light md:block bg-blue-700 "
            onClick={() => navigate("/login")}
          >
            Create account
          </button>
        )}

        <img
          src={assets.menu_icon}
          alt=""
          className="w-6 md:hidden"
          onClick={() => setMenu(true)}
        />
        {/* Mobile Menu Here */}
        <div
          className={`${
            menu ? "fixed w-full" : "h-0 w-0"
          } md:hidden right-0 top-0 bottom-0 z-20 overflow-hidden bg-white transition-all `}
        >
          <div className="flex items-center justify-between px-5 py-6">
            <div className="flex items-center space-x-5">
              <img src={assets.logo} alt="" className="w-14" />
            </div>

            <img
              src={assets.cross_icon}
              alt=""
              onClick={() => setMenu(false)}
              className="w-7"
            />
          </div>
          <ul className="flex flex-col items-center gap-2 px-5 text-lg font-medium">
            {Menu.map((item) => (
              <NavLink
                key={item.id}
                to={item.menuLink}
                onClick={() => setMenu(false)}
              >
                <p className="px-4 py-2 rounded inline-block">
                  {item.menuItem}
                </p>
              </NavLink>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
