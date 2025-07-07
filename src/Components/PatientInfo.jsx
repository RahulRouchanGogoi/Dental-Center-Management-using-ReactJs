import { useEffect, useState } from "react";
import ProfilePic from "../images/profile_pic.png";

const PatientInfo = () => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const users = JSON.parse(localStorage.getItem("user") || "[]");
    const raw = localStorage.getItem("loggedInUser");
    const loggedUser = raw ? JSON.parse(raw) : null;

    const matchedUser = users.find((u) => u.email === loggedUser?.email);

    if (matchedUser) {
      setCurrentUser(matchedUser);
    }
  }, []);

  if (!currentUser) {
    return (
      <div style={{ padding: "20px" }}>
        <p>Loading patient info...</p>
      </div>
    );
  }

  return (
    <div className="patient-info-outer">
      <div className="patient-img-outer">
        <div className="patient-img">
          <img className="patient-img-profile"
            src={ProfilePic}
            alt="profile"
            
          />
        </div>
      </div>

      <div className="patient-original-info">
        <h1>Welcome: {currentUser.name}</h1>
        <h1>Email: {currentUser.email}</h1>
        <p>
          Welcome aboard! We are here to give your teeth the care they deserve.
        </p>
      </div>
    </div>
  );
};

export default PatientInfo;
