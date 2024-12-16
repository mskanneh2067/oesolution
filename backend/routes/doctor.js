import express from "express";
import {
  doctorLogin,
  getDoctors,
  appointmentsDoctor,
  appointmentComplete,
  appointmentCancel,
  doctorDashboard,
  doctorProfile,
  updateDoctorProfile,
} from "../controllers/doctor.js";
import doctorAuth from "../middlewares/doctorAuth.js";

const router = express.Router();

router.get("/get-doctors", getDoctors);
router.get("/appointments", doctorAuth, appointmentsDoctor);
router.get("/dashboard", doctorAuth, doctorDashboard);
router.get("/profile", doctorAuth, doctorProfile);
router.post("/login", doctorLogin);
router.post("/complete-appointment", doctorAuth, appointmentComplete);
router.post("/cancel-appointment", doctorAuth, appointmentCancel);
router.post("/update-profile", doctorAuth, updateDoctorProfile);

export default router;
