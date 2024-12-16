import React, { useContext, useState } from "react";
import { DoctorContext } from "../../context/DoctorContext";
import { useEffect } from "react";
import { toast } from "react-toastify";
import axios from "axios";
const DoctorProfile = () => {
  const { backendUrl, dToken, profileData, setProfileData, getProfileData } =
    useContext(DoctorContext);
  const [isEdit, setIsEdit] = useState(false);

  const updateUserProfileData = async () => {
    try {
      const updateDate = {
        address: profileData.address,
        fees: profileData.fees,
        available: profileData.available,
      };
      const { data } = await axios.post(
        backendUrl + "/api/v1/doctor/update-profile",
        updateDate,
        { headers: { dToken } }
      );

      if (data.success) {
        toast.success(data.message);
        setIsEdit(false);
        getProfileData();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    if (dToken) {
      getProfileData();
    }
  }, [dToken]);

  return (
    profileData && (
      <div>
        <div>
          <div className="flex flex-col gap-4 m-5">
            <div>
              <img
                src={profileData.image}
                alt=""
                className="bg-primary/80 w-full sm:max-w-64 rounded-lg"
              />
            </div>

            <div className="flex-1 border border-stone-100 rounded-lg px-8 py-7 bg-white">
              {/* Doc Info : name, degree, experience */}
              <p className="flex items-center gap-2 text-3xl font-medium text-gray-700">
                {profileData.name}
              </p>
              <div className="flex items-center gap-2 mt-1 text-gray-600">
                <p>
                  {profileData.degree} - {profileData.speciality}
                </p>
                <button className="py-0.5 px-2 text-xs border rounded-full">
                  {profileData.experience}
                </button>
              </div>
            </div>

            {/* Doc About */}

            <div>
              <p className="flex items-center gap-1 text-sm font-medium text-neutral-800 mt-3">
                About:
              </p>
              <p className="text-sm text-gray-600 max-w-[700px] mt-1">
                {profileData.about}
              </p>
            </div>

            {isEdit ? (
              <input
                className="bg-gray-50 text-2xl font-medium max-w-60 mt-4"
                type="number"
                value={profileData.fees}
                onChange={(e) =>
                  setProfileData((prev) => ({ ...prev, fees: e.target.value }))
                }
              />
            ) : (
              <p className="text-gray-600 font-medium mt-4">
                Appointment fee:{" "}
                <span className="text-gray-800">${profileData.fees}</span>
              </p>
            )}
            <div className="flex gap-2 py-2">
              <p>Address:</p>
              {isEdit ? (
                <p>
                  <input
                    className="border border-zinc-300 rounded w-full p-2 mb-2.5"
                    type="text"
                    value={profileData.address.line1}
                    onChange={(e) =>
                      setProfileData((prev) => ({
                        ...prev,
                        address: { ...prev.address, line1: e.target.value },
                      }))
                    }
                  />
                  <br />
                  <input
                    className="border border-zinc-300 rounded w-full p-2 mb-2.5"
                    type="text"
                    value={profileData.address.line2}
                    onChange={(e) =>
                      setProfileData((prev) => ({
                        ...prev,
                        address: { ...prev.address, line2: e.target.value },
                      }))
                    }
                  />
                </p>
              ) : (
                <p>
                  {profileData.address.line1}
                  <br />
                  {profileData.address.line2}
                </p>
              )}
            </div>

            <div className="flex gap-1 pt-2">
              <input
                type="checkbox"
                checked={profileData.available}
                onChange={(e) =>
                  isEdit &&
                  setProfileData((prev) => ({
                    ...prev,
                    available: !prev.available,
                  }))
                }
              />
              <label htmlFor="">Available</label>
            </div>
          </div>

          <div className="flex gap-2 mt-10">
            <button
              className={` text-white py-2 rounded-md text-base ${
                isEdit ? "bg-red-700 w-full" : "bg-orange-400 w-1/2"
              }`}
              onClick={() => setIsEdit(!isEdit)}
            >
              {isEdit ? "Cancel" : "Edit"}
            </button>
            {isEdit && (
              <button
                className="w-full bg-green-400 text-white py-2 rounded-md text-base"
                onClick={updateUserProfileData}
              >
                Save
              </button>
            )}
          </div>
        </div>
      </div>
    )
  );
};

export default DoctorProfile;
