/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { assets } from "..//assets/assets";
import { NavLink, useNavigate, useLocation } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [showMenu, setShowMenu] = useState(false);
  const [token, setToken] = useState(true);

  // Helper to check if route is active
  const isActive = (path) => location.pathname === path;

  return (
    <div className="flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400 px-2 sm:px-8">
      <img
        onClick={() => navigate(`/`)}
        className="w-36 sm:w-44 cursor-pointer"
        src={assets.logo}
        alt=""
      />
      <ul className="hidden md:flex items-start gap-5 font-medium">
        <NavLink to="/" end>
          <li
            className={`py-1 relative transition-colors duration-200 hover:text-[#5f6FFF] ${
              isActive("/") ? "text-[#5f6FFF]" : ""
            }`}
          >
            HOME
            {isActive("/") && (
              <span className="block absolute left-1/2 -translate-x-1/2 bottom-0 h-0.5 bg-[#5f6FFF] w-3/5 rounded"></span>
            )}
          </li>
        </NavLink>
        <NavLink to="/doctors">
          <li
            className={`py-1 relative transition-colors duration-200 hover:text-[#5f6FFF] ${
              isActive("/doctors") ? "text-[#5f6FFF]" : ""
            }`}
          >
            ALL DOCTORS
            {isActive("/doctors") && (
              <span className="block absolute left-1/2 -translate-x-1/2 bottom-0 h-0.5 bg-[#5f6FFF] w-3/5 rounded"></span>
            )}
          </li>
        </NavLink>
        <NavLink to="/about">
          <li
            className={`py-1 relative transition-colors duration-200 hover:text-[#5f6FFF] ${
              isActive("/about") ? "text-[#5f6FFF]" : ""
            }`}
          >
            ABOUT
            {isActive("/about") && (
              <span className="block absolute left-1/2 -translate-x-1/2 bottom-0 h-0.5 bg-[#5f6FFF] w-3/5 rounded"></span>
            )}
          </li>
        </NavLink>
        <NavLink to="/contact">
          <li
            className={`py-1 relative transition-colors duration-200 hover:text-[#5f6FFF] ${
              isActive("/contact") ? "text-[#5f6FFF]" : ""
            }`}
          >
            CONTACT
            {isActive("/contact") && (
              <span className="block absolute left-1/2 -translate-x-1/2 bottom-0 h-0.5 bg-[#5f6FFF] w-3/5 rounded"></span>
            )}
          </li>
        </NavLink>
      </ul>
      <div className="flex items-center gap-4">
        {token ? (
          <div className="flex items-center gap-2 cursor-pointer group relative">
            <img className="w-8 rounded-full" src={assets.profile_pic} alt="" />
            <img className="w-2.5" src={assets.dropdown_icon} alt="" />
            <div className="absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 hidden group-hover:block z-30">
              <div className="min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4 shadow-lg">
                <p
                  onClick={() => navigate("my-profile")}
                  className="hover:text-black cursor-pointer"
                >
                  My Profile
                </p>
                <p
                  onClick={() => navigate("my-appointments")}
                  className="hover:text-black cursor-pointer"
                >
                  My Appointments
                </p>
                <p
                  onClick={() => setToken(false)}
                  className="hover:text-black cursor-pointer"
                >
                  Logout
                </p>
              </div>
            </div>
          </div>
        ) : (
          <button
            onClick={() => navigate("/login")}
            className="bg-[#5f6FFF] text-white px-8 py-3 rounded-full font-light hidden md:block"
          >
            Create account
          </button>
        )}
        <img
          onClick={() => setShowMenu(true)}
          className="w-6 md:hidden"
          src={assets.menu_icon}
          alt=""
        />
        {/* Mobile Menu */}
        <div
          className={`fixed top-0 right-0 bottom-0 z-40 bg-white transition-all duration-300 ${
            showMenu ? "w-full h-full" : "w-0 h-0 overflow-hidden"
          } md:hidden`}
        >
          <div className="flex items-center justify-between px-5 py-6">
            <img className="w-36" src={assets.logo} alt="" />
            <img
              className="w-7"
              onClick={() => setShowMenu(false)}
              src={assets.cross_icon}
              alt=""
            />
          </div>
          <ul className="flex flex-col items-center gap-2 mt-5 px-5 font-medium text-lg">
            <NavLink onClick={() => setShowMenu(false)} to="/">
              <p className="px-4 py-2 rounded inline-block transition-colors duration-200 hover:text-[#5f6FFF]">
                HOME
              </p>
            </NavLink>
            <NavLink onClick={() => setShowMenu(false)} to="/doctors">
              <p className="px-4 py-2 rounded inline-block transition-colors duration-200 hover:text-[#5f6FFF]">
                ALL DOCTORS
              </p>
            </NavLink>
            <NavLink onClick={() => setShowMenu(false)} to="/about">
              <p className="px-4 py-2 rounded inline-block transition-colors duration-200 hover:text-[#5f6FFF]">
                ABOUT
              </p>
            </NavLink>
            <NavLink onClick={() => setShowMenu(false)} to="/contact">
              <p className="px-4 py-2 rounded inline-block transition-colors duration-200 hover:text-[#5f6FFF]">
                CONTACT
              </p>
            </NavLink>
            {!token && (
              <button
                onClick={() => {
                  setShowMenu(false);
                  navigate("/login");
                }}
                className="bg-[#5f6FFF] text-white px-8 py-3 rounded-full font-light mt-4"
              >
                Create account
              </button>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
