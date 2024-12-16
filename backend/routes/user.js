import express from "express";
import {
  bookAppointment,
  cancelAppointment,
  getUserProfile,
  listAppointment,
  registerUser,
  updateUserProfile,
  userLogin,
} from "../controllers/user.js";
import userAuth from "../middlewares/userAuth.js";
import upload from "../middlewares/multer.js";
const router = express.Router();

router.post("/register", registerUser);
router.post("/login", userLogin);
router.get("/get-profile", userAuth, getUserProfile);
router.post(
  "/update-profile",
  upload.single("image"),
  userAuth,
  updateUserProfile
);
router.post("/book-appointment", userAuth, bookAppointment);
router.get("/list-appointments", userAuth, listAppointment);
router.post("/cancel-appointment", userAuth, cancelAppointment);

export default router;
