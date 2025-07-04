import React, { useEffect, useState } from "react";
import Footer from "../Components/Footer";
import { useNavigate } from "react-router-dom";

const AdminAppointment = () => {

  const navigate=useNavigate();

  const [appointments, setAppointments] = useState([]);
  const [treatmentInfo, setTreatmentInfo] = useState({});
  const [showFormId, setShowFormId] = useState(null);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("appointments") || "[]");

    const sorted = [...stored].sort((a, b) => {
      const dateA = new Date(`${a.date}T${a.time}`);
      const dateB = new Date(`${b.date}T${b.time}`);
      return dateA - dateB;
    });

    setAppointments(sorted);
  }, []);

  const saveAppointments = (updatedList) => {
    localStorage.setItem("appointments", JSON.stringify(updatedList));
    setAppointments(updatedList);
  };

  const moveToFinalList = (appointment, status, extra = {}) => {
    const key = status === "Rejected" ? "rejectedAppointments" : "completedAppointments";

    const prev = JSON.parse(localStorage.getItem(key) || "[]");
    const updated = [
      ...prev,
      {
        ...appointment,
        status,
        ...extra,
      },
    ];

    localStorage.setItem(key, JSON.stringify(updated));
  };

  const handleReject = (appointmentId) => {
    const target = appointments.find((a) => a.appointmentId === appointmentId);
    if (!target) return;

    const confirmed = window.confirm("Are you sure you want to reject this appointment?");
    if (!confirmed) return;

    moveToFinalList(target, "Rejected");
    const updatedList = appointments.filter((a) => a.appointmentId !== appointmentId);
    saveAppointments(updatedList);
  };

  const handleComplete = (appointmentId) => {
    setShowFormId(appointmentId);
    setTreatmentInfo({
      treatment: "",
      cost: "",
      nextDate: "",
      file: null,
      fileContent: "",
      status: "Completed",
    });
  };

  const handleTreatmentChange = (e) => {
    const { name, value, files } = e.target;

    if (files && files[0]) {
      const reader = new FileReader();
      reader.onload = () => {
        setTreatmentInfo((prev) => ({
          ...prev,
          file: files[0],
          fileContent: reader.result,
        }));
      };
      reader.readAsDataURL(files[0]); // Convert file to base64
    } else {
      setTreatmentInfo((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const submitTreatment = (appointmentId) => {
    const appointment = appointments.find((a) => a.appointmentId === appointmentId);
    if (!appointment) return;

    const { treatment, cost, status } = treatmentInfo;

    if (!treatment || !cost || !status) {
      alert("Please fill in Treatment, Cost, and Status fields.");
      return;
    }

    moveToFinalList(appointment, status, {
      treatment: treatmentInfo.treatment,
      cost: treatmentInfo.cost,
      nextAppointmentDate: treatmentInfo.nextDate || "",
      invoiceName: treatmentInfo.file?.name || "",
      invoiceData: treatmentInfo.fileContent || "",
    });

    const updatedList = appointments.filter((a) => a.appointmentId !== appointmentId);
    saveAppointments(updatedList);
    setShowFormId(null);
  };

  return (
    <div className="admin-appointment-management-outer">
      <div className="admin-appointment-management">
        <h2 style={{ textAlign: "center", color: "#254d70" }}>All Appointments</h2>

        {appointments.length === 0 ? (
          <p style={{ textAlign: "center",color:" #CD1C18",fontWeight:500 }}>No appointments found.</p>
        ) : (
          <table
            className="admin-appointment-table"
            border="1"
            cellPadding="10"
            cellSpacing="0"
            style={{
              width: "100%",
              borderCollapse: "collapse",
              marginTop: "20px",
            }}
          >
            <thead style={{ backgroundColor: "#a3bccc",color:"#254d70" }}>
              <tr>
                <th>Appointment ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Gender</th>
                <th>Age</th>
                <th>Problem</th>
                <th>Date</th>
                <th>Time</th>
                <th>Amount</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {appointments.map((appt) => (
                <React.Fragment
                  key={appt.appointmentId || `${appt.email}_${appt.date}_${appt.time}`}
                >
                  <tr style={{color:"#254d70"}}>
                    <td>{appt.appointmentId || "N/A"}</td>
                    <td>{appt.name}</td>
                    <td>{appt.email}</td>
                    <td>{appt.gender}</td>
                    <td>{appt.age}</td>
                    <td>{appt.problem}</td>
                    <td>{appt.date}</td>
                    <td>{appt.time}</td>
                    <td>₹{appt.amount}</td>
                    <td>
                      <button onClick={() => handleComplete(appt.appointmentId)}>
                        Complete
                      </button>{" "}
                      <button onClick={() => handleReject(appt.appointmentId)}>
                        Reject
                      </button>
                    </td>
                  </tr>

                  {showFormId === appt.appointmentId && (
                    <tr>
                      <td colSpan="10">
                        <div
                          className="admin-appointment-details-form"
                          style={{
                            padding: "10px",
                            backgroundColor: "#a3bccc",
                          }}
                        >
                          <h3>Enter Treatment Details</h3>
                          <input
                            type="text"
                            name="treatment"
                            placeholder="Treatment"
                            value={treatmentInfo.treatment}
                            onChange={handleTreatmentChange}
                            required
                          />
                          <input
                            type="number"
                            name="cost"
                            placeholder="Treatment Cost"
                            value={treatmentInfo.cost}
                            onChange={handleTreatmentChange}
                            required
                          />
                          <input
                            type="text"
                            name="nextDate"
                            placeholder="Next Appointment Date"
                            value={treatmentInfo.nextDate}
                            onFocus={(e) => (e.target.type = "date")}
                            onChange={handleTreatmentChange}
                          />
                          <input
                            type="file"
                            name="file"
                            accept=".pdf,.jpg,.png"
                            onChange={handleTreatmentChange}
                          />
                          <select
                            name="status"
                            value={treatmentInfo.status}
                            onChange={handleTreatmentChange}
                            required
                            style={{ marginLeft: "10px" }}
                          >
                            <option value="Completed">Completed</option>
                            <option value="Follow Up Needed">Follow Up Needed</option>
                            <option value="Pending">Pending</option>
                          </select>
                          <br />
                          <button
                            onClick={() => submitTreatment(appt.appointmentId)}
                            style={{ marginTop: "8px" }}
                          >
                            Submit
                          </button>
                        </div>
                      </td>
                    </tr>
                  )}
                </React.Fragment>
              ))}
            </tbody>
          </table>
        )}
      </div>
      <button style={{marginTop:"20px"}}className="admin-appointment-backto-dashboard-button" onClick={()=>{navigate("/admin"),window.scrollTo(0,0)}}>Back to Dashboard</button>
      <Footer />
    </div>
  );
};

export default AdminAppointment;
