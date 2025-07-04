import { useEffect, useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import Footer from "../Components/Footer";
import { useNavigate } from "react-router-dom";

const AdminCalender = () => {
  const navigate = useNavigate();

  const [appointments, setAppointments] = useState([]);
  const [markedDates, setMarkedDates] = useState([]);
  const [selectedAppointments, setSelectedAppointments] = useState([]);

  
  const formatDate = (date) => {
    return date.toLocaleDateString("en-CA"); 
  };

  useEffect(() => {
    const storedAppointments = JSON.parse(localStorage.getItem("appointments") || "[]");
    setAppointments(storedAppointments);

    const dates = storedAppointments.map((appt) => appt.date); 
    setMarkedDates(dates);
  }, []);

  const handleDateClick = (date) => {
    const clickedDate = formatDate(date);
    const filtered = appointments.filter((appt) => appt.date === clickedDate);
    setSelectedAppointments(filtered);
  };

  return (
    <div className="admin-calender-info-outer" style={{ backgroundColor: "#FFFDF6" }}>
      <div className="admin-calender-info">
        <Calendar
          onClickDay={handleDateClick}
          tileClassName={({ date, view }) => {
            if (view === "month") {
              const dateString = formatDate(date);
              return markedDates.includes(dateString) ? "highlight-date" : null;
            }
          }}
        />
      </div>

      {selectedAppointments.length > 0 && (
        <div className="admin-appointment-details">
          <h3>Appointments on Selected Date</h3>
          {selectedAppointments.map((appt, index) => (
            <div key={index} className="admin-appointment-card">
              <p><strong>Name:</strong> {appt.name}</p>
              <p><strong>Email:</strong> {appt.email}</p>
              <p><strong>Gender:</strong> {appt.gender}</p>
              <p><strong>Age:</strong> {appt.age}</p>
              <p><strong>Problem:</strong> {appt.problem}</p>
              <p><strong>Date:</strong> {appt.date}</p>
              <p><strong>Time:</strong> {appt.time}</p>
              <p><strong>Amount:</strong> ₹{appt.amount}</p>
            </div>
          ))}
        </div>
      )}

      <div className="admin-calender-info-button">
        <button onClick={() => {
          navigate("/admin");
          window.scrollTo(0, 0);
        }}>Back to Dashboard</button>
      </div>

      <Footer />
    </div>
  );
};

export default AdminCalender;
