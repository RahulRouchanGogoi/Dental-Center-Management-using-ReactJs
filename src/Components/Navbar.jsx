import { faUserDoctor } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import profilePic from "../images/profile_pic.png";
import DropDownIcon from "../images/DropDownIcon.png";
import { AppContext } from "../context/AppContext";

const Navbar = () => {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);
  const { isLoggedIn, setIsLoggedIn } = useContext(AppContext);

  return (
    <div className="nav-outer">
      <div className="nav-main">
        <div className="nav-logo">
          <FontAwesomeIcon icon={faUserDoctor} />
          <p>Dental Care</p>
        </div>

        <div className="nav-details">
          <ul className="nav-list">
            <NavLink to="/" className="footer-link"><li>Home</li></NavLink>
            <NavLink to="/about" className="footer-link"><li>About</li></NavLink>
            <NavLink to="/contact" className="footer-link"><li>Contact</li></NavLink>
            <NavLink to="/policies" className="footer-link"><li>Policies</li></NavLink>
          </ul>
        </div>

        <div className="nav-button">
          {isLoggedIn ? (
            <div className="nav-dropdown">
              <img
                className="profile-pic"
                src={profilePic}
                alt="Profile"
                style={{ width: "36px", height: "auto" }}
              />
              <img
                className="drop-down-menu-icon"
                src={DropDownIcon}
                alt="Dropdown"
                style={{ width: "30px", height: "auto" }}
              />
              <div className="drop-down-menu">
                <div>
                  <p onClick={() => navigate("/patient")} className="drop-down-menu-items">
                    My Profile
                  </p>
                  <p onClick={() => navigate("/appointment-history")} className="drop-down-menu-items">
                    Appointment History
                  </p>
                  <p
                    onClick={() => {
                      localStorage.removeItem("loggedInUser");
                      setIsLoggedIn(false);
                      navigate("/login");
                    }}
                    className="drop-down-menu-items"
                  >
                    Logout
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <button onClick={() => navigate("/signup")}>Create Account</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
