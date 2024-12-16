import express from "express";
import {addDoctor, adminDashboard, adminLogin, appointmentCancel, appointmentsAdmin, getDoctors} from "../controllers/admin.js"
import upload from "../middlewares/multer.js";
import adminAuth from "../middlewares/adminAuth.js";
import { changeAvailability } from "../controllers/doctor.js";


const router = express.Router();


router.post('/add-doctor',adminAuth,upload.single('image'),addDoctor);
router.post('/login',adminLogin);
router.post('/get-doctors',adminAuth,getDoctors);
router.post('/change-availability',adminAuth,changeAvailability);
router.get('/get-appointments',adminAuth,appointmentsAdmin);
router.post('/cancel-appointment',adminAuth,appointmentCancel);
router.get('/dashboard',adminAuth,adminDashboard);

export default router;