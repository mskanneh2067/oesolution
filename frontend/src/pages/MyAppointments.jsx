import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContext";

import axios from "axios";
import { toast } from "react-toastify";

const MyAppointments = () => {
  const { backendUrl, token, getDoctorsData } = useContext(AppContext);
  const [appointments, setAppointments] = useState([]);
  const months = [
    "",
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const slotDateFormat = (slotDate) => {
    const dateArray = slotDate.split("_");
    return (
      dateArray[0] + " " + months[Number(dateArray[1])] + " " + dateArray[2]
    );
  };

  const getUserAppointments = async () => {
    try {
      const { data } = await axios.get(
        backendUrl + "/api/v1/user/list-appointments",
        { headers: { token } }
      );
      if (data.success) {
        setAppointments(data.appointments.reverse());
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const cancelAppointment = async (appointmentId) => {
    try {
      const { data } = await axios.post(
        backendUrl + "/api/v1/user/cancel-appointment",
        { appointmentId },
        { headers: { token } }
      );
      if (data.success) {
        toast.success(data.message);
        getUserAppointments();
        getDoctorsData();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    if (token) {
      getUserAppointments();
    }
  }, [token]);
  return (
    <div>
      <p className="pb-3 mt-12 font-medium text-zinc-700 border-b">
        My appointments
      </p>
      <div>
        {appointments.map((item, index) => (
          <div
            key={index}
            className="grid grid-cols-[1fr_2fr] gap-4 sm:flex sm:gap-6 py-2 border-b"
          >
            <div>
              <img
                src={item.docData.image}
                alt=""
                className="w-32 bg-indigo-50"
              />
            </div>
            <div className="flex-1 text-sm text-zinc-500">
              <p className="text-neutral-800 font-semibold">
                {item.docData.name}
              </p>
              <p>{item.docData.speciality}</p>
              <p className="text-zinc-700 font-medium mt-1">Address:</p>
              <p className="text-xs">{item.docData.address.line1}</p>
              <p className="text-xs">{item.docData.address.line2}</p>
              <p className="text-xs mt-1">
                <span className="text-sm text-neutral-700 font-medium">
                  {/* Date & Time: 8, December, 2024 | 8:30 PM */}
                  Date & Time: {slotDateFormat(item.slotDate)} | {item.slotTime}
                </span>
              </p>
            </div>

            <div></div>
            {!item.isCompleted ? (
               <div className="flex flex-col gap-2 justify-end">
               {!item.cancelled && (
                 <button className="text-sm  text-center sm:min-w-48 py-2 border rounded bg-green-600 text-white">
                   Pay Online
                 </button>
               )}

               {!item.cancelled && (
                 <button
                   onClick={() => cancelAppointment(item._id)}
                   className="text-sm text-stone-500 text-center sm:min-w-48 py-2 border rounded hover:bg-red-600 hover:text-white"
                 >
                   Cancel appointment
                 </button>
               )}

               {item.cancelled && (
                 <button className="sm:min-w-48 py-2 border border-red-500 rounded text-red-500">
                   Appointment cancelled
                 </button>
               )}
             </div>
            ) : (
              <button className="sm:min-w-48 py-2 border border-green-500 rounded text-green-500">
              Appointment completed
            </button>
           
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyAppointments;
