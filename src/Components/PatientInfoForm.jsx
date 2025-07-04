import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const PatientInfoForm = () => {
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");
  const [problem, setProblem] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const { addAppointment } = useContext(AppContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const storedUser = JSON.parse(localStorage.getItem("loggedInUser") || "{}");
    const userEmail = storedUser.email;

    const users = JSON.parse(localStorage.getItem("user") || "[]");
    const currentUser = users.find((u) => u.email === userEmail);

    if (!currentUser) {
      alert("User not found. Please log in again.");
      return;
    }

    // Retrieve current and all-time appointments
    const appointments = JSON.parse(localStorage.getItem("appointments") || "[]");
    const allAppointments = JSON.parse(localStorage.getItem("allAppointments") || "[]");

    const userAppointments = appointments.filter(a => a.email === userEmail);

    // Create a unique appointment ID
    const cleanedEmail = currentUser.email.replace(/[^a-zA-Z0-9]/g, "");
    const appointmentId = `${cleanedEmail}_${userAppointments.length + 1}`;

    const appointment = {
      appointmentId,
      name: currentUser.name,
      email: currentUser.email,
      gender,
      age,
      problem,
      date,
      time,
      amount: 500,
    };

    // ✅ Save to both appointments and allAppointments
    const updatedAppointments = [...appointments, appointment];
    const updatedAllAppointments = [...allAppointments, appointment];

    localStorage.setItem("appointments", JSON.stringify(updatedAppointments));
    localStorage.setItem("allAppointments", JSON.stringify(updatedAllAppointments));

    if (addAppointment) addAppointment(appointment);

    alert("Appointment booked successfully!");

    setGender("");
    setAge("");
    setProblem("");
    setDate("");
    setTime("");
  };

  return (
    <div className="patient-info-form-container">
      <div className="patient-info-section">
        <p id="patient-info-form-firstMessage">
          Hello, your appointment will be booked with <strong>OUR BEST DOCTORS!</strong>
        </p>
        <p>Fee: ₹500 (Pay at Clinic)</p>

        <button
          type="button"
          className="view-appointments-button"
          onClick={() => navigate("/appointment-history")}
        >
          View Previous Appointments
        </button>
      </div>

      <form onSubmit={handleSubmit} className="appointment-form">
        <h2>Book an Appointment</h2>

        <p
          style={{
            marginBottom: "20px",
            fontWeight: "bold",
            color: "#254d70",
            marginTop: "-10px",
          }}
        >
          Appointment Cost: ₹500
        </p>

        <div>
          <label>Gender:</label>
          <div className="gender-options">
            <label>
              <input
                type="radio"
                value="Male"
                checked={gender === "Male"}
                onChange={(e) => setGender(e.target.value)}
                required
              />
              Male
            </label>
            <label>
              <input
                type="radio"
                value="Female"
                checked={gender === "Female"}
                onChange={(e) => setGender(e.target.value)}
              />
              Female
            </label>
            <label>
              <input
                type="radio"
                value="Other"
                checked={gender === "Other"}
                onChange={(e) => setGender(e.target.value)}
              />
              Other
            </label>
          </div>
        </div>

        <div>
          <label>Age:</label>
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            required
          />
        </div>

        <div>
          <label>Problem:</label>
          <input
            type="text"
            value={problem}
            onChange={(e) => setProblem(e.target.value)}
            required
          />
        </div>

        <div>
          <label>Date:</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </div>

        <div>
          <label>Time:</label>
          <input
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            required
          />
        </div>

        <button type="submit">Book Appointment</button>
      </form>
    </div>
  );
};

export default PatientInfoForm;
