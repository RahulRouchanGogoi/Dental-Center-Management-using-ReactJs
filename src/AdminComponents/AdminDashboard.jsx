import { useEffect, useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { useNavigate } from "react-router-dom";

const AdminDashboard = () => {
  const navigate = useNavigate();

  const [adminName, setAdminName] = useState("");
  const [upcomingAppointments, setUpcomingAppointments] = useState([]);
  const [topPatients, setTopPatients] = useState([]);
  const [totalPatients, setTotalPatients] = useState(0);
  const [totalRevenue, setTotalRevenue] = useState(0);
  const [appointmentDates, setAppointmentDates] = useState([]);
  const [pendingCount, setPendingCount] = useState(0);
  const [completedCount, setCompletedCount] = useState(0);

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("loggedInUser"));
    if (userData && userData.name) {
      setAdminName(userData.name);
    }

    const allAppointments = JSON.parse(localStorage.getItem("appointments") || "[]");
    const allTimeAppointments = JSON.parse(localStorage.getItem("allAppointments") || "[]");
    const today = new Date().toISOString().split("T")[0];

    const upcoming = allAppointments.filter((appt) => appt.date >= today);
    setUpcomingAppointments(upcoming);

    // ✅ Top Patients using allAppointments
    const patientCountMap = {};
    allTimeAppointments.forEach((appt) => {
      const key = appt.email;
      if (!patientCountMap[key]) {
        patientCountMap[key] = {
          name: appt.name,
          email: appt.email,
          count: 0,
        };
      }
      patientCountMap[key].count += 1;
    });

    const topPatientsList = Object.values(patientCountMap)
      .sort((a, b) => b.count - a.count)
      .slice(0, 10);

    setTopPatients(topPatientsList);

    // ✅ Total Patients from allAppointments
    const uniquePatientEmails = new Set(
      allTimeAppointments.map((appt) => appt.email)
    );
    setTotalPatients(uniquePatientEmails.size);

    // ✅ Total Revenue from allAppointments
    const revenue = allTimeAppointments.length * 500;
    setTotalRevenue(revenue);

    const apptDates = allAppointments.map((appt) => new Date(appt.date));
    setAppointmentDates(apptDates);

    // ✅ Pending from appointments
    setPendingCount(allAppointments.length);

    // ✅ Completed from completedAppointments
    const completedList = JSON.parse(localStorage.getItem("completedAppointments") || "[]");
    setCompletedCount(completedList.length);
  }, []);

  return (
    <div className="admin-dashboard-main-outer">
      <div className="admin-dashboard-main">
        <div className="admin-dashboard-main-inner1">
          <div className="admin-dashboard-welcome-Admin-msg">
            <h2>Welcome, Admin</h2>
            <h2>{adminName}</h2>
          </div>

          <div className="admin-dashboard-other-components">
            <ul>
              <li>
                <button onClick={() => { navigate("/admin"); window.scrollTo(0, 0); }}>
                  Dashboard
                </button>
              </li>
              <li>
                <button onClick={() => navigate("/admin-patient")}>
                  Patient Management
                </button>
              </li>
              <li>
                <button onClick={() => navigate("/admin-appointment")}>
                  Appointment Management
                </button>
              </li>
              <li>
                <button onClick={() => navigate("/admin-appointment-history")}>
                  Appointment History
                </button>
              </li>
              <li>
                <button onClick={() => { navigate("/admin-calender"); window.scrollTo(0, 0); }}>
                  Calendar
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="admin-dashboard-main-inner2">
          <div className="admin-dashboard-main-inner2-div-inner">
            <div className="admin-dashboard-main-inner2-div-inner-kpi-cards">
              <div className="kpi-card1">
                <h2>Total Patients:</h2>
                <h2>{totalPatients}</h2>
              </div>
              <div className="kpi-card2">
                <h2>Total Revenue:</h2>
                <h2>₹{totalRevenue}</h2>
              </div>
              <div className="kpi-card3">
                <h2>Pending: {pendingCount}</h2>
                <h2>Completed: {completedCount}</h2>
              </div>
              <div className="kpi-card4">
                <Calendar
                  tileClassName={({ date, view }) => {
                    if (
                      view === "month" &&
                      appointmentDates.find(
                        (d) =>
                          d.getFullYear() === date.getFullYear() &&
                          d.getMonth() === date.getMonth() &&
                          d.getDate() === date.getDate()
                      )
                    ) {
                      return "highlight-date";
                    }
                  }}
                />
              </div>
            </div>

            <div className="admin-dashboard-main-inner2-div-inner-patient-details">
              <div className="admin-dashboard-main-inner2-div-inner-patient-details-upcoming-appointments">
                <h2>Upcoming Appointments</h2>
                <div className="admin-dashboard-appointment-list">
                  {upcomingAppointments.length === 0 ? (
                    <p style={{ textAlign: "center", padding: "5px", color: "#CD1C18" }}>
                      No upcoming appointments
                    </p>
                  ) : (
                    upcomingAppointments.map((appt, index) => (
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
                    ))
                  )}
                </div>
              </div>

              <div className="admin-dashboard-main-inner2-div-inner-patient-details-top-patients">
                <h2>Top Patients</h2>
                <div className="admin-dasboard-top-10-patients">
                  {topPatients.length === 0 ? (
                    <p style={{ textAlign: "center", fontSize: "15px", color: "#CD1c18" }}>
                      No patients available
                    </p>
                  ) : (
                    <div className="top-patients-list">
                      {topPatients.map((patient, index) => (
                        <div key={index} className="top-patient-card">
                          <p><strong>{index + 1}.</strong></p>
                          <p><strong>Name:</strong> {patient.name}</p>
                          <p><strong>Email:</strong> {patient.email}</p>
                          <p><strong>Appointments:</strong> {patient.count}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
