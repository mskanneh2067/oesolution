import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import connectCloudinary from "./config/cloudinary.js";

//Routes
import adminRoute from "./routes/admin.js";
import doctorRoute from "./routes/doctor.js";
import userRoute from "./routes/user.js";

//app config
dotenv.config();
const app = express();
const Port = process.env.PORT || 3000;
connectCloudinary();

//middlewares
app.use(express.json());
app.use(cors());

//api endpoints
app.use("/api/v1/admin", adminRoute);
app.use("/api/v1/doctor", doctorRoute);
app.use("/api/v1/user", userRoute);
//Database
const connect = async () => {
  try {
    await mongoose.connect(process.env.mongoDB);
    console.log(`3. Backend Server is connected to MongoDB successfully!`);
  } catch (error) {
    throw error;
  }
};

mongoose.connection.on("connected", () => {
  console.log(
    "2. Backend Server has successfuly initiated connection to MongoDB!"
  );
});

////Backend Server Connection Here
app.listen(Port, () => {
  connect();
  console.log(`1. Application has successfully started on port: ${Port}`);
});
