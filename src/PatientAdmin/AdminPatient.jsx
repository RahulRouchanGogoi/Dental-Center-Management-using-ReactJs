import { useEffect, useState } from "react";
import Footer from "../Components/Footer";
import { useNavigate } from "react-router-dom";

const defaultPatient = {
  fullName: "",
  dob: "",
  contact: "",
  healthInfo: "",
  email: "",
  password: "",
};

const AdminPatient = () => {
  const navigate = useNavigate();

  const [patients, setPatients] = useState([]);
  const [formData, setFormData] = useState(defaultPatient);
  const [editingIndex, setEditingIndex] = useState(null);

  useEffect(() => {
    const allUsers = JSON.parse(localStorage.getItem("user") || "[]");
    const onlyPatients = allUsers.filter((u) => !u.email.includes("@admin"));
    const formattedPatients = onlyPatients.map((user) => ({
      fullName: user.name || "",
      dob: user.dob || "",
      contact: user.contact || "",
      healthInfo: user.healthInfo || "",
      email: user.email,
      password: user.password,
    }));
    setPatients(formattedPatients);
  }, []);

  const savePatientsToLocalStorage = (data) => {
    localStorage.setItem("dentalPatients", JSON.stringify(data));
  };

  const saveToUserStorage = (email, name, password, dob = "", contact = "", healthInfo = "") => {
    if (email.includes("@admin")) return;

    const existingUsers = JSON.parse(localStorage.getItem("user") || "[]");
    const index = existingUsers.findIndex((u) => u.email === email);

    const updatedUser = { name, email, password, dob, contact, healthInfo };

    if (index !== -1) {
      existingUsers[index] = updatedUser;
    } else {
      existingUsers.push(updatedUser);
    }

    localStorage.setItem("user", JSON.stringify(existingUsers));
  };

  const removeFromUserStorage = (email) => {
    if (email.includes("@admin")) return;

    const existingUsers = JSON.parse(localStorage.getItem("user") || "[]");
    const updatedUsers = existingUsers.filter((u) => u.email !== email);
    localStorage.setItem("user", JSON.stringify(updatedUsers));
  };

  const removeAppointmentsForUser = (email) => {
    const appointments = JSON.parse(localStorage.getItem("appointments") || "[]");
    const updatedAppointments = appointments.filter((appt) => appt.email !== email);
    localStorage.setItem("appointments", JSON.stringify(updatedAppointments));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { fullName, dob, contact, healthInfo, email, password } = formData;
    if (!fullName || !dob || !contact || !healthInfo || !email || !password) {
      alert("Please fill in all fields including email and password.");
      return;
    }

    const updated = [...patients];
    const index = updated.findIndex((p) => p.email === email);

    if (editingIndex !== null && index !== -1) {
      updated[editingIndex] = formData;
      saveToUserStorage(email, fullName, password, dob, contact, healthInfo);
    } else {
      if (patients.some((p) => p.email === email)) {
        alert("Patient with this email already exists.");
        return;
      }
      updated.push(formData);
      saveToUserStorage(email, fullName, password, dob, contact, healthInfo);
    }

    setPatients(updated);
    savePatientsToLocalStorage(updated);
    setFormData(defaultPatient);
    setEditingIndex(null);
  };

  const handleEdit = (index) => {
    setFormData(patients[index]);
    setEditingIndex(index);
  };

  const handleDelete = (emailToDelete) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this patient?"
    );
    if (!confirmed) return;

    const updated = patients.filter((p) => p.email !== emailToDelete);
    setPatients(updated);
    savePatientsToLocalStorage(updated);
    removeFromUserStorage(emailToDelete);
    removeAppointmentsForUser(emailToDelete);
  };

  return (
    <div className="admin-patient-management-container-outer">
      <div className="admin-patient-management-container">
        <h2 style={{ textAlign: "center", color: "white" }}>
          Patient Management
        </h2>

        <form onSubmit={handleSubmit} className="admin-patient-form">
          <h3 style={{ textAlign: "center", color: "#254d70" }}>Add a new Patient</h3>
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={handleChange}
          />
          <input
            type="date"
            name="dob"
            placeholder="Date of Birth"
            value={formData.dob}
            onChange={handleChange}
          />
          <input
            type="text"
            name="contact"
            placeholder="Contact Info"
            value={formData.contact}
            onChange={handleChange}
          />
          <input
            type="text"
            name="healthInfo"
            placeholder="Dental Health Info"
            value={formData.healthInfo}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Email (for login)"
            value={formData.email}
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Password (for login)"
            value={formData.password}
            onChange={handleChange}
          />
          <button type="submit">
            {editingIndex !== null ? "Update" : "Add"}
          </button>
        </form>

        <h2 style={{ marginTop: "30px", textAlign: "center", color: "white" }}>Patient List</h2>
        {patients.filter((p) => !p.email.includes("@admin")).length === 0 ? (
          <p>No patients found.</p>
        ) : (
          <table
            className="admin-patient-table"
            border="1"
            cellPadding="10"
            cellSpacing="0"
          >
            <thead>
              <tr>
                <th>Name</th>
                <th>DOB</th>
                <th>Contact</th>
                <th>Health Info</th>
                <th>Email</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {patients
                .filter((patient) => !patient.email.includes("@admin"))
                .map((patient) => (
                  <tr key={patient.email}>
                    <td>{patient.fullName}</td>
                    <td>{patient.dob}</td>
                    <td>{patient.contact}</td>
                    <td>{patient.healthInfo}</td>
                    <td>{patient.email}</td>
                    <td>
                      <button
                        onClick={() =>
                          handleEdit(
                            patients.findIndex((p) => p.email === patient.email)
                          )
                        }
                      >
                        Edit
                      </button>{" "}
                      <button onClick={() => handleDelete(patient.email)}>
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        )}
        <div className="admin-patient-info-button">
          <button onClick={() => { navigate("/admin"); window.scrollTo(0, 0); }}>
            Back to Dashboard
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AdminPatient;
