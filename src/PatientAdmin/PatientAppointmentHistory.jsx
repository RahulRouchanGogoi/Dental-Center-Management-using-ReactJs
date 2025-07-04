import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const PatientAppointmentHistory = () => {
  const navigate = useNavigate();
  const [completedAppointments, setCompletedAppointments] = useState([]);
  const [rejectedAppointments, setRejectedAppointments] = useState([]);

  useEffect(() => {
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
    const userEmail = loggedInUser?.email;

    // ✅ Load both completed and rejected appointments
    const completedData = JSON.parse(localStorage.getItem("completedAppointments") || "[]");
    const rejectedData = JSON.parse(localStorage.getItem("rejectedAppointments") || "[]");

    const completed = completedData.filter((appt) => appt.email === userEmail);
    const rejected = rejectedData.filter((appt) => appt.email === userEmail);

    const sortedCompleted = completed.sort(
      (a, b) => new Date(`${b.date}T${b.time}`) - new Date(`${a.date}T${a.time}`)
    );

    const sortedRejected = rejected.sort(
      (a, b) => new Date(`${b.date}T${b.time}`) - new Date(`${a.date}T${a.time}`)
    );

    setCompletedAppointments(sortedCompleted);
    setRejectedAppointments(sortedRejected);
  }, []);

  return (
    <div style={{ backgroundColor: "#FFFDF6" }}>
      <div className="outer-patient-appointment-history">
        <div className="patient-appointment-history">
          <h2>Appointment History</h2>

          <div className="patient-appoimtment-history-inner">
            {completedAppointments.length > 0 && (
              <>
                <h3 style={{color:"#254d70"}}>✅ Completed Appointments</h3>
                {completedAppointments.map((appt, index) => (
                  <div key={index} className="patient-appointment-historycard">
                    <p><strong>Name:</strong> {appt.name}</p>
                    <p><strong>Problem:</strong> {appt.problem}</p>
                    <p><strong>Date:</strong> {appt.date}</p>
                    <p><strong>Time:</strong> {appt.time}</p>
                    <p><strong>Treatment:</strong> {appt.treatment || "-"}</p>
                    <p><strong>Cost:</strong> ₹{appt.cost || "-"}</p>
                    <p><strong>Status:</strong> {appt.status}</p>
                    {appt.nextAppointmentDate && (
                      <p><strong>Next Appointment Date:</strong> {appt.nextAppointmentDate}</p>
                    )}
                    {appt.invoiceName && appt.invoiceData ? (
                      <p>
                        <strong>Invoice:</strong>{" "}
                        <a
                          href={appt.invoiceData}
                          download={appt.invoiceName}
                          style={{ color: "blue", textDecoration: "underline" }}
                        >
                          Download {appt.invoiceName}
                        </a>
                      </p>
                    ) : (
                      <p><strong>Invoice:</strong> Not uploaded</p>
                    )}
                  </div>
                ))}
              </>
            )}

            {rejectedAppointments.length > 0 && (
              <>
                <h3 style={{ marginTop: "40px",color:"#254d70" }}>❌ Rejected Appointments</h3>
                {rejectedAppointments.map((appt, index) => (
                  <div key={index} className="patient-appointment-historycard">
                    <p><strong>Name:</strong> {appt.name}</p>
                    <p><strong>Problem:</strong> {appt.problem}</p>
                    <p><strong>Date:</strong> {appt.date}</p>
                    <p><strong>Time:</strong> {appt.time}</p>
                    <p><strong>Status:</strong> {appt.status}</p>
                  </div>
                ))}
              </>
            )}

            {completedAppointments.length === 0 &&
              rejectedAppointments.length === 0 && (
                <p style={{ color: "#CD1C18", fontWeight: 500 }}>
                  No appointment history available.
                </p>
              )}
          </div>

          <button
            onClick={() => {
              navigate("/patient");
              window.scrollTo(0, 0);
            }}
          >
            Back to Profile Dashboard
          </button>
        </div>
      </div>
    </div>
  );
};

export default PatientAppointmentHistory;
