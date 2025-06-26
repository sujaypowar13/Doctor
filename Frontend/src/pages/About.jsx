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
            It is the headquarters of Satara Tehsil, as well as the Satara
            District. The city gets its name from the seven forts (Sat-Tara)
            which are around the city. The city is known as a Soldier's city as
            well as Pensioner's city. The city had a population of 179,147 in
            2011.[3]
          </p>
          <p>
            It is the headquarters of Satara Tehsil, as well as the Satara
            District. The city gets its name from the seven forts (Sat-Tara)
            which are around the city. The city is known as a Soldier's city as
            well as Pensioner's city. The city had a population of 179,147 in
            2011.[3]
          </p>
          <b className="text-gray-800">Our Vision</b>
          <p>
            It is the headquarters of Satara Tehsil, as well as the Satara
            District. The city gets its name from the seven forts (Sat-Tara)
            which are around the city. The city is known as a Soldier's city as
            well as Pensioner's city. The city had a population of 179,147 in
            2011.[3]
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
          <b>Efficiency:</b>
          <p>
            Satara was the first state to be annexed by British Governor-General
            Dalhousie’s policy of ‘Doctrine of Lapse’ in 1848.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-[#5f6FFF] hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
          <b>Convenience:</b>
          <p>
            Satara was the first state to be annexed by British Governor-General
            Dalhousie’s policy of ‘Doctrine of Lapse’ in 1848.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-[#5f6FFF] hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
          <b>Personalization:</b>
          <p>
            Satara was the first state to be annexed by British Governor-General
            Dalhousie’s policy of ‘Doctrine of Lapse’ in 1848.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
