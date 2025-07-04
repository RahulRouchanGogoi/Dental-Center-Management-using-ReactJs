import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContext";

const PatientUpcomingAppointment = () => {
  const { appointments } = useContext(AppContext);
  const [upcomingAppointments, setUpcomingAppointments] = useState([]);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("loggedInUser"));
    const userEmail = user?.email || "";
    const today = new Date();

    const filtered = appointments.filter((appointment) => {
      const appointmentDateTime = new Date(`${appointment.date}T${appointment.time}`);
      return appointment.email === userEmail && appointmentDateTime >= today;
    });

    setUpcomingAppointments(filtered);
  }, [appointments]);

  return (
    <div className="Upcoming-appointment">
      <h1>Upcoming Appointments</h1>
      <div className="Upcoming-appointment-details">
        {upcomingAppointments.length === 0 ? (
          <p>No upcoming appointments.</p>
        ) : (
          upcomingAppointments.map((appointment, index) => (
            <div key={index} className="appointment-card">
              <p><strong>Name:</strong> {appointment.name}</p>
              <p><strong>Email:</strong> {appointment.email}</p>
              <p><strong>Gender:</strong> {appointment.gender}</p>
              <p><strong>Age:</strong> {appointment.age}</p>
              <p><strong>Problem:</strong> {appointment.problem}</p>
              <p><strong>Date:</strong> {appointment.date}</p>
              <p><strong>Time:</strong> {appointment.time}</p>
              <p><strong>Fee:</strong> ₹{appointment.amount}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default PatientUpcomingAppointment;
