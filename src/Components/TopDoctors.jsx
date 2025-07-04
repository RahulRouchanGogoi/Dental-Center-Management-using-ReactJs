import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";


const TopDoctors = () => {
  const navigate = useNavigate();
  const{doctors}=useContext(AppContext);

  return (
    <div className="doctors-outer">
      <div className="doctors">
        <h1 className="doctors-h1">Top Doctors to Book</h1>
        <p className="doctors-p">
          Browse through our extensive list of trusted doctors.
        </p>
      </div>
      <div className="doctors-image">
        {doctors.slice(0, 10).map((item, index) => (
          <div
            onClick={() => navigate("/signup")}
            className="doctor-card"
          >
            <img src={item.image} alt="" />
            <div>
              <div className="doctor-card-items">
                <p id="doctor-available-dot"></p>
                <p id="doctor-available">Available</p>
              </div>
              <p>{item.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopDoctors;
