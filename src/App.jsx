import Signup from "./LoginSignup/Signup";
import Login from "./LoginSignup/Login";
import Patient from "./PatientAdmin/Patient";
import Admin from "./PatientAdmin/Admin";
import Home from "./LoginSignup/Home";
import PatientAppointmentHistory from "./PatientAdmin/PatientAppointmentHistory";
import Layout from "./Components/Layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminAppointment from "./PatientAdmin/AdminAppointmen";
import AdminPatient from "./PatientAdmin/AdminPatient";
import AdminCalender from "./PatientAdmin/AdminCalender";
import About from "./LoginSignup/About";
import Policies from "./LoginSignup/Policies";
import Contact from "./LoginSignup/Contact";
import AdminAppointmentHistory from "./PatientAdmin/AdminAppointmentHistory";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="signup" element={<Signup />} />
          <Route path="login" element={<Login />} />
          <Route path="patient" element={<Patient />} />
          <Route path="admin" element={<Admin />} />
          <Route
            path="appointment-history"
            element={<PatientAppointmentHistory />}
          />
          <Route path="admin-appointment" element={<AdminAppointment />} />
          <Route path="admin-patient" element={<AdminPatient />} />
          <Route path="admin-calender" element={<AdminCalender />} />
          <Route path="about" element={<About />} />
          <Route path="policies" element={<Policies />} />
          <Route path="contact" element={<Contact />} />
           <Route path="admin-appointment-history" element={<AdminAppointmentHistory />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
