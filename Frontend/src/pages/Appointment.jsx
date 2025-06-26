import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { useState } from "react";
import { assets } from "../assets/assets";
import RelatedDoctors from "../components/RelatedDoctors";

const Appointment = () => {
  const { docId } = useParams();
  const { doctors, currencySymbol } = useContext(AppContext);
  const daysOfWeek = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

  const [docInfo, setDocInfo] = useState(null);
  const [docSlots, setDocSlots] = useState([]);
  const [slotIndex, setSlotIndex] = useState(0);
  const [slotTime, setSlotTime] = useState("");

  const fetchDocInfo = async () => {
    const docInfo = doctors.find((doc) => doc._id === docId);
    setDocInfo(docInfo);
    console.log(docInfo);
  };

  const getAvailableSlots = async () => {
    setDocSlots([]);

    //Getting current date and time
    let today = new Date();
    for (let i = 0; i < 7; i++) {
      //Getting date with index i
      let currentDate = new Date(today);
      currentDate.setDate(today.getDate() + i);

      // Setting end time of the date with index i
      let endTime = new Date();
      endTime.setDate(today.getDate() + i);
      endTime.setHours(21, 0, 0, 0); // 9 PM

      //Setting hours and minutes of the current date
      if (today.getDate() === currentDate.getDate()) {
        currentDate.setHours(
          currentDate.getHours() > 10 ? currentDate.getHours() + 1 : 10
        ); // 10 AM
        currentDate.setMinutes(currentDate.getMinutes() > 30 ? 30 : 0); // 30 minutes
      } else {
        currentDate.setHours(10); // 10 AM
        currentDate.setMinutes(0); // 0 minutes
      }

      let timeSlots = [];

      while (currentDate <= endTime) {
        let formattedTime = currentDate.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        });

        // Adding the formatted time to the slots array
        timeSlots.push({
          datetime: new Date(currentDate),
          time: formattedTime,
        });

        // Incrementing the current date by 30 minutes
        currentDate.setMinutes(currentDate.getMinutes() + 30);
      }
      setDocSlots((prev) => [...prev, timeSlots]);
    }
  };

  useEffect(() => {
    fetchDocInfo();
  }, [doctors, docId]);

  useEffect(() => {
    // Fetch available slots for the doctor
    getAvailableSlots();
  }, [docId]);

  useEffect(() => {
    console.log(docSlots);
  }, [docSlots]);

  return (
    docInfo && (
      <div>
        {/* Doctor Details */}
        <div className="flex flex-col sm:flex-row gap-4">
          <div>
            <img
              className="bg-[#5f6FFF] w-full sm:max-w-72 rounded-lg"
              src={docInfo.image}
              alt=""
            />
          </div>
          <div className="flex-1 border border-gray-400 rounded-lg p-8 py-7 bg-white mx-2 sm:mx-0 mt-[-80px] sm:mt-0">
            {/* Doctor info : Name, Info, Experience */}
            <p className="flex items-center gap-2 text-2xl font-medium text-gray-900">
              {docInfo.name}{" "}
              <img className="w-5" src={assets.verified_icon} alt="" />
            </p>
            <div className="flex items-center gap-2 text-gray-600 text-sm mt-1">
              <p>
                {docInfo.degree} - {docInfo.speciality}
              </p>
              <button className="py-0.5 px-2 border text-xs rounded-full">
                {docInfo.experience}
              </button>
            </div>

            {/* Doctor About */}
            <div>
              <p className="flex items-center gap-1 test-sm font-medium text-gray-900 mt-3">
                About <img src={assets.info_icon} alt="" />
              </p>
              <p className="text-sm text-gray-500 max-w-[700px] mt-1">
                {docInfo.about}
              </p>
            </div>
            <p className="text-gray-500 font-medium mt-4">
              Appointment Fee: &nbsp;
              <span className="text-gray-600 font-bold">
                {currencySymbol}&nbsp;
                {docInfo.fees}
              </span>
            </p>
          </div>
        </div>
        {/* Booking Slots */}
        <div className="sm:ml-72 sm:pl-4 mt-4 font-medium text-gray-700 px-2 sm:px-0">
          <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6">
            <p className="mb-2 text-base font-semibold">Booking slots</p>
            <div className="flex gap-2 sm:gap-3 items-center w-full overflow-x-auto mt-2 pb-2">
              {docSlots.length &&
                docSlots.map((item, index) => (
                  <div
                    onClick={() => {
                      setSlotIndex(index);
                    }}
                    className={`text-center py-3 px-2 min-w-16 rounded-full cursor-pointer text-xs sm:text-sm transition-all ${
                      slotIndex === index
                        ? `bg-[#5f6FFF] text-white`
                        : `border border-gray-200 bg-gray-50`
                    }`}
                    key={index}
                  >
                    <p>{item[0] && daysOfWeek[item[0].datetime.getDay()]}</p>
                    <p>{item[0] && item[0].datetime.getDate()}</p>
                  </div>
                ))}
            </div>

            <div className="flex gap-2 sm:gap-3 items-center w-full overflow-x-auto mt-4 pb-2">
              {docSlots.length &&
                docSlots[slotIndex].map((item, index) => (
                  <p
                    onClick={() => setSlotTime(item.time)}
                    className={`text-xs sm:text-sm font-light flex-shrink-0 px-4 py-2 rounded-full cursor-pointer transition-all ${
                      item.time === slotTime
                        ? `bg-[#5f6FFF] text-white`
                        : `border border-gray-300 text-gray-500 bg-gray-50`
                    }`}
                    key={index}
                  >
                    {item.time.toLowerCase()}
                  </p>
                ))}
            </div>
            <button className="w-full sm:w-auto bg-[#5f6FFF] text-white text-sm font-light px-8 py-3 rounded-full my-6 mt-5 transition-all">
              Book an appointment
            </button>
          </div>
        </div>
        {/* Listing Related Doctors */}
        <div className="mt-8 px-2 sm:px-0">
          <RelatedDoctors docId={docId} speciality={docInfo.speciality} />
        </div>
      </div>
    )
  );
};

export default Appointment;
