import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div className="md:mx-10">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        {/* Left side */}
        <div>
          <img className="mb-5 w-40" src={assets.logo} alt="" />
          <p className="w-full md:w-2/3 text-gray-600 leading-6">
            Mahendra Singh Dhoni, is an Indian professional cricketer who plays
            as a right-handed batter and a wicket-keeper. Widely regarded as one
            of the most prolific wicket-keeper batsmen and captains and one of
            the greatest ODI batsmen.
          </p>
        </div>
        {/* Center side */}
        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        {/*Right side  */}
        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>+91-7066947298</li>
            <li>sujaypowar13@gmail.com</li>
          </ul>
        </div>
      </div>
      <div>
        {/* CopyRight Text */}
        <hr />
        <p className="py-5 text-sm text-center">
          Copyright 2025@ Apla Doctor - All Right Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
