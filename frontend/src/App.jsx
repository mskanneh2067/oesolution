import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Login from "./pages/Login";
import About from "./pages/About";
import Contact from "./pages/Contact";
import MyProfile from "./pages/MyProfile";
import MyAppoitments from "./pages/MyAppointments";
import Appointment from "./pages/Appointment";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import { ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Project from "./pages/Project";
import Publications from "./pages/Publications";
const App = () => {
  return (
    <div className="mx-4 sm:mx-[10%]">
      <ToastContainer />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/:speciality" element={<Services />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/project" element={<Project/>} />
        <Route path="/publications" element={<Publications/>} />
        <Route path="/my-profile" element={<MyProfile />} />
        <Route path="/my-appointments" element={<MyAppoitments />} />
        <Route path="/appointment/:docId" element={<Appointment />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
