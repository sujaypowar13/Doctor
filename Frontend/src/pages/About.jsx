import React from "react";
import { assets } from "../assets/assets";

const About = () => {
  return (
    <div>
      <div className="text-center text-2xl pt-10 text-gray-500">
        <p>
          ABOUT <span className="text-gray-700 font-medium">US</span>
        </p>
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-12 items-center md:items-start">
        <img
          className="w-full md:max-w-[360px] rounded-lg shadow-lg md:shadow-gray-200"
          src={assets.about_image}
          alt=""
        />
        <div className="flex flex-col gap-6 justify-center md:w-2/4 text-sm text-gray-700">
          <p>
            At <span className="text-gray-700 font-semibold">Aapla Doctor</span>
            , we believe that healthcare should be simple, fast, and accessible.
            Founded as a local startup, our journey began with one goal in mind
            — to help people avoid long queues and book appointments with
            trusted doctors from the comfort of their home.
          </p>
          <p>
            Whether you're looking for a general physician, specialist, or
            clinic nearby,{" "}
            <span className="text-gray-700 font-semibold">Aapla Doctor</span>{" "}
            brings healthcare to your fingertips. This is our first step towards
            building a better, tech-powered healthcare system for everyone.
          </p>
          <b className="text-gray-800">Our Vision</b>
          <p>
            To make healthcare accessible, efficient, and digital-first — so
            that no one has to wait in line for medical care again. We envision
            a future where every person can connect with the right doctor at the
            right time, using just their phone or computer.
          </p>
        </div>
      </div>
      <div className="text-xl my-4 mt-15 text-gray-500">
        <p>
          WHY <span className="text-gray-700 font-semibold">CHOOSE US</span>
        </p>
      </div>
      <div className="flex flex-col md:flex-row mb-20 gap-2">
        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-[#5f6FFF] hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
          <b>Save Time:</b>
          <p>
            No more waiting in long queues. Book your appointment in just a few
            clicks—anytime, anywhere.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-[#5f6FFF] hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
          <b>Verified Doctors:</b>
          <p>
            Consult only with experienced, trusted, and multi-specialist doctors
            near you.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-[#5f6FFF] hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
          <b>Easy to Use:</b>
          <p>
            User-friendly app designed for all age groups. Booking a doctor has
            never been this simple!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
