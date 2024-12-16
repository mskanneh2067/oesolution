import React, { useContext, useState } from "react";
import { assets } from "../../assets/assets";
import { AdminContext } from "../../context/AdminContext";
import { toast } from "react-toastify";
import axios from "axios";
const AddDoctor = () => {
  const [docImg, setDocImg] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [experience, setExperience] = useState("1 Year");
  const [fees, setFees] = useState("");
  const [about, setAbout] = useState("");
  const [speciality, setSpeciality] = useState("General Equiry");
  const [degree, setDegree] = useState("");
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");

  const { aToken, backendUrl } = useContext(AdminContext);

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      if (!docImg) {
        return toast.error("Image Not Selected");
      }

      const formData = new FormData();

      formData.append("image", docImg);
      formData.append("name", name);
      formData.append("email", email);
      formData.append("password", password);
      formData.append("experience", experience);
      formData.append("fees", Number(fees));
      formData.append("about", about);
      formData.append("speciality", speciality);
      formData.append("degree", degree);
      formData.append(
        "address",
        JSON.stringify({ line1: address1, line2: address2 })
      );

      //console log formData
      formData.forEach((value, key) => console.log(`${key}: ${value}`));

      const { data } = await axios.post(
        backendUrl + "/api/v1/admin/add-doctor",
        formData,
        {
          headers: { aToken },
        }
      );

      if (data.success) {
        toast.success(data.message);
        setDocImg(false);
        setName("");
        setEmail("");
        setPassword("");
        setFees("");
        setAbout("");
        setDegree("");
        setAddress1("");
        setAddress2("");
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
      console.log(error);
    }
  };
  return (
    <form className="m-5 w-full" onSubmit={submitHandler}>
      <p className="mb-3 text-lg font-medium">Add Doctor</p>
      <div className="bg-white p-8 border rounded w-full max-w-4xl max-h-[80vh] overflow-y-scroll">
        <div className="flex items-center gap-4 mb-8 text-gray-500">
          <label htmlFor="doc-img">
            <img
              src={docImg ? URL.createObjectURL(docImg) : assets.upload_area}
              alt=""
              className="w-16 bg-gray-100 rounded-full cursor-pointer"
            />
          </label>
          <input
            type="file"
            id="doc-img"
            hidden
            onChange={(e) => setDocImg(e.target.files[0])}
          />
          <p>
            Upload doctor <br /> picture
          </p>
        </div>
        {/* MAIN DETAILS FIELDS */}
        <div className="flex flex-col lg:flex-row items-start gap-10 text-gray-600">
          {/* right side */}

          <div className="w-full lg:flex-1 flex flex-col gap-4">
            <div className="flex-1 flex flex-col gap-1">
              <p>Doctor Name</p>
              <input
                type="text"
                placeholder="name"
                required
                className="border rounded px-3 py-2"
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
            </div>

            <div className="flex-1 flex flex-col gap-1">
              <p>Doctor Email</p>
              <input
                type="email"
                placeholder="Email"
                required
                className="border rounded px-3 py-2"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
            </div>

            <div className="flex-1 flex flex-col gap-1">
              <p>Doctor Password</p>
              <input
                type="password"
                placeholder="Password"
                required
                className="border rounded px-3 py-2"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
            </div>

            <div className="flex-1 flex flex-col gap-1">
              <p>Experience</p>
              <select
                className="border rounded px-3 py-2"
                onChange={(e) => setExperience(e.target.value)}
                value={experience}
              >
                <option value="1 Year">1 Year</option>
                <option value="2 Year">2 Year</option>
                <option value="3 Year">3 Year</option>
                <option value="4 Year">4 Year</option>
                <option value="5 Year">5 Year</option>
                <option value="6 Year">6 Year</option>
                <option value="7 Year">7 Year</option>
                <option value="8 Year">8 Year</option>
                <option value="9 Year">9 Year</option>
                <option value="10 Year">10 Year</option>
                <option value="11 Year">11 Year</option>
                <option value="12 Year">12 Year</option>
                <option value="13 Year">13 Year</option>
                <option value="14 Year">14 Year</option>
                <option value="15 Year">15 Year</option>
                <option value="16 Year">16 Year</option>
                <option value="17 Year">17 Year</option>
                <option value="18 Year">18 Year</option>
                <option value="19 Year">19 Year</option>
                <option value="20 Year">20 Year</option>
              </select>
            </div>

            <div className="flex-1 flex flex-col gap-1">
              <p>Fees</p>
              <input
                type="number"
                placeholder="fees"
                required
                className="border rounded px-3 py-2"
                onChange={(e) => setFees(e.target.value)}
                value={fees}
              />
            </div>
          </div>

          {/* left side */}
          <div className="w-full lg:flex-1 flex flex-col gap-4">
            <div className="flex-1 flex flex-col gap-1">
              <p>Speciality</p>
              <select
                className="border rounded px-3 py-2"
                onChange={(e) => setSpeciality(e.target.value)}
                value={speciality}
              >
                <option value="General Equiry">General Equiry</option>
                <option value="Scientific Equipment">
                  Scientific Equipment
                </option>
                <option value="Materials Solutions & Characterizations">
                  Materials Solutions & Characterizations
                </option>
                <option value="Publications Payment">
                  Publications Payment
                </option>
                <option value="Study Abroad Canada">Study Abroad Canada</option>
              </select>
            </div>

            <div className="flex-1 flex flex-col gap-1">
              <p>Education</p>
              <input
                type="text"
                placeholder="Education"
                
                className="border rounded px-3 py-2"
                onChange={(e) => setDegree(e.target.value)}
                value={degree}
              />
            </div>

            <div className="flex-1 flex flex-col gap-1">
              <p>Address</p>
              <input
                type="text"
                placeholder="Address 1"
                
                className="border rounded px-3 py-2"
                onChange={(e) => setAddress1(e.target.value)}
                value={address1}
              />
              <input
                type="text"
                placeholder="Address 2"
               
                className="border rounded px-3 py-2"
                onChange={(e) => setAddress2(e.target.value)}
                value={address2}
              />
            </div>
          </div>
        </div>

        <div>
          <p className="mt-4 mb-2">About Doctor</p>
          <textarea
            placeholder="Summuarize Doctor Skills Here"
            rows={5}
            className="w-full px-4 pt-2 border rounded"
            onChange={(e) => setAbout(e.target.value)}
            value={about}
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-primary px-10 py-3 mt-4 text-white rounded-full"
        >
          Add doctor
        </button>
        {/* MAIN DETAILS FIELDS */}
      </div>
    </form>
  );
};

export default AddDoctor;
