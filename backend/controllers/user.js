import validator from "validator";
import userModel from "../models/Users.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { v2 as cloudinary } from "cloudinary";
import doctorModel from "../models/Doctors.js";
import appointmentModel from "../models/Appointment.js";
export const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    //Checking all doctor's data before adding
    if (!name || !email || !password) {
      return res.json({ success: false, message: "Missing Details" });
    }

    //Validating email format
    if (!validator.isEmail(email)) {
      return res.json({ success: false, message: "Invalid email" });
    }

    //Validating minimum password length
    if (password.length < 8) {
      return res.json({
        success: false,
        message: "Password must be atleast 8 characters",
      });
    }

    //Hashing user password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const userData = {
      name,
      email,
      password: hashedPassword,
    };

    const newUser = new userModel(userData);
    const user = await newUser.save();

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
    res.json({
      success: true,
      token,
    });
  } catch (error) {
    console.log(error);
    res.json({
      success: false,
      message: error.message,
    });
  }
};

export const userLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.json({
        success: false,
        message: "Invalid Credential",
      });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.json({
        success: false,
        message: "Invalid Credential",
      });
    } else {
      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
      res.json({
        success: true,
        token,
      });
    }
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};

//API to get user profile

export const getUserProfile = async (req, res) => {
  try {
    const { userId } = req.body;
    const userData = await userModel.findById(userId).select("-password");

    res.json({
      success: true,
      userData,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};
//API to update user profile

export const updateUserProfile = async (req, res) => {
  try {
    const { userId, name, phone, address, dob, gender } = req.body;
    const imageFile = req.file;
    if (!name || !phone || !dob || !gender) {
      return res.json({
        success: false,
        message: "Data missing",
      });
    }

    await userModel.findByIdAndUpdate(userId, {
      name,
      phone,
      address: JSON.parse(address),
      dob,
      gender,
    });

    if (imageFile) {
      //Upload image to cloudinary
      const imageUpload = await cloudinary.uploader.upload(imageFile.path, {
        resouce_type: "image",
      });
      const imageURL = imageUpload.secure_url;
      await userModel.findByIdAndUpdate(userId, { image: imageURL });
    }

    res.json({ success: true, message: "Profile updated" });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};

//API to book appointment

export const bookAppointment = async (req, res) => {
  try {
    const { userId, docId, slotDate, slotTime } = req.body;
    const docData = await doctorModel.findById(docId).select("-password");
    if (!docData.available) {
      return res.json({ sucess: false, message: "Doctor not available" });
    }

    let slots_booked = docData.slots_booked;

    //Checking for slot availability
    if (slots_booked[slotDate]) {
      if (slots_booked[slotDate].includes(slotTime)) {
        return res.json({ success: false, message: "Slot not available" });
      } else {
        slots_booked[slotDate].push(slotTime);
      }
    } else {
      slots_booked[slotDate] = [];
      slots_booked[slotDate].push(slotTime);
    }

    const userData = await userModel.findById(userId).select("-password");

    delete docData.slots_booked;
    const appointmentData = {
      userId,
      docId,
      userData,
      docData,
      amount: docData.fees,
      slotTime,
      slotDate,
      date: Date.now(),
    };

    const newAppointment = new appointmentModel(appointmentData);
    await newAppointment.save();

    //Save new slots data in docData
    await doctorModel.findByIdAndUpdate(docId, { slots_booked });
    res.json({ success: true, message: "Appointment booked" });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

export const listAppointment = async (req, res) => {
  try {
    const { userId } = req.body;
    const appointments = await appointmentModel.find({ userId });
    res.json({ success: true, appointments });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

//Cancel Appointment
export const cancelAppointment = async (req, res) => {
  try {
    const { userId, appointmentId } = req.body;
    const appointmentData = await appointmentModel.findById( appointmentId );

    //Verify appointment user
    if (appointmentData.userId !== userId) {
      return res.json({ success: true, message: "Unauthorized action" });
    }

    await appointmentModel.findByIdAndUpdate(appointmentId, {
      cancelled: true,
    });

    //releasing doctor slot
    const { docId, slotDate, slotTime } = appointmentData;
    const doctorData = await doctorModel.findById(docId);

    let slots_booked = doctorData.slots_booked;

    slots_booked[slotDate] = slots_booked[slotDate].filter(
      (e) => e !== slotTime
    );

    await doctorModel.findByIdAndUpdate(docId, { slots_booked });
    res.json({ success: true, message: "Appointment Cancelled" });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};


//API to make payment of appointment

const makePayment = async (req,res) =>{

  try {
    const {appointmentId} = req.body
    const appointmentData = await appointmentModel.findById(appointmentId)
  
    if(!appointmentData || appointmentData.cancelled) {
      return res.json({ success: false, message: "Appointment Cancelled or not found" });
    }

  } catch (error) {
     res.json({ success: false, message: error.message });
  }
 
}