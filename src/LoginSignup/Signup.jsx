import { useNavigate } from "react-router-dom";
import SignupImage from "../images/SignUp.png";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTooth } from "@fortawesome/free-solid-svg-icons";

const Signup = () => {
  const userDetail = {
    name: "",
    email: "",
    password: "",
  };

  const [data, setData] = useState(userDetail);
  const navigate = useNavigate();

  const handleInput = (event) => {
    const { name, value } = event.target;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!data.name || !data.email || !data.password) {
      alert("Please enter all the required details!");
    } else {
      const getData = JSON.parse(localStorage.getItem("user") || "[]");

      // Optional: prevent duplicate emails
      const emailExists = getData.some((u) => u.email === data.email);
      if (emailExists) {
        alert("User already exists with this email.");
        return;
      }

      getData.push(data);
      localStorage.setItem("user", JSON.stringify(getData));
      alert("Success! Your account has been created.");
      navigate("/login");
    }
  };

  return (
    <div className="SignUp-Login-Outer">
      <div className="SignUpInner1">
        <form onSubmit={handleSubmit}>
          <div className="heading">
            <FontAwesomeIcon icon={faTooth} />
            <p>Dental Center</p>
          </div>
          <div className="account">
            <input
              type="text"
              name="name"
              placeholder="Enter your Full Name"
              onChange={handleInput}
            />
            <input
              type="email"
              name="email"
              placeholder="Enter your Email"
              onChange={handleInput}
            />
            <input
              type="password"
              name="password"
              placeholder="Enter your Password"
              onChange={handleInput}
            />
          </div>

          <p>
            Already have an Account? <a href="/login">Log in</a>
          </p>

          <button>Sign Up</button>
        </form>
      </div>

      <div className="SignUpInner2">
        <img
          src={SignupImage}
          alt="image"
          style={{ width: "410px", height: "auto" }}
        />
      </div>
    </div>
  );
};

export default Signup;
