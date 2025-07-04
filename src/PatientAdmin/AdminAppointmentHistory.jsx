import React, { useEffect, useState } from "react";
import Footer from "../Components/Footer";
import { useNavigate } from "react-router-dom";

const AdminAppointmentHistory = () => {
  const navigate = useNavigate();

  const [completedAppointments, setCompletedAppointments] = useState([]);
  const [rejectedAppointments, setRejectedAppointments] = useState([]);

  useEffect(() => {
    // ✅ Corrected: Load completed and rejected appointments separately
    const completed = JSON.parse(localStorage.getItem("completedAppointments") || "[]");
    const rejected = JSON.parse(localStorage.getItem("rejectedAppointments") || "[]");

    setCompletedAppointments(completed);
    setRejectedAppointments(rejected);
  }, []);

  return (
    <div className="admin-appointment-history-outer">
      <div className="admin-appointment-history">
        <div className="admin-appointment-history-inner" style={{ padding: "20px" }}>
          <h2 style={{ color: "#2f5d74" }}>Completed Appointments</h2>
          {completedAppointments.length === 0 ? (
            <p style={{ color: "#CD1C18" }}>No completed appointments found.</p>
          ) : (
            <table className="admin-appointment-history-table" border="1" cellPadding="2px" cellSpacing="0">
              <thead>
                <tr>
                  <th>Appointment ID</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Gender</th>
                  <th>Age</th>
                  <th>Problem</th>
                  <th>Treatment</th>
                  <th>Cost</th>
                  <th>Status</th>
                  <th>Next Appointment Date</th>
                  <th>Invoice</th>
                </tr>
              </thead>
              <tbody>
                {completedAppointments.map((appt, index) => (
                  <tr key={index}>
                    <td>{appt.appointmentId || "N/A"}</td>
                    <td>{appt.name}</td>
                    <td>{appt.email}</td>
                    <td>{appt.gender}</td>
                    <td>{appt.age}</td>
                    <td>{appt.problem}</td>
                    <td>{appt.treatment || "-"}</td>
                    <td>{appt.cost ? `₹${appt.cost}` : "-"}</td>
                    <td>{appt.status}</td>
                    <td>{appt.nextAppointmentDate || "-"}</td>
                    <td>{appt.invoiceName || "-"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}

          <h2 style={{ color: "#b00020" }}>Rejected Appointments</h2>
          {rejectedAppointments.length === 0 ? (
            <p style={{ color: "#CD1C18" }}>No rejected appointments found.</p>
          ) : (
            <table border="1" cellPadding="10" cellSpacing="0">
              <thead>
                <tr>
                  <th>Appointment ID</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Gender</th>
                  <th>Age</th>
                  <th>Problem</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {rejectedAppointments.map((appt, index) => (
                  <tr key={index}>
                    <td>{appt.appointmentId || "N/A"}</td>
                    <td>{appt.name}</td>
                    <td>{appt.email}</td>
                    <td>{appt.gender}</td>
                    <td>{appt.age}</td>
                    <td>{appt.problem}</td>
                    <td>{appt.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}

          <button
            className="admin-appointment-backto-dashboard-button"
            onClick={() => {
              navigate("/admin");
              window.scrollTo(0, 0);
            }}
          >
            Back to Dashboard
          </button>
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default AdminAppointmentHistory;
