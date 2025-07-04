import { useState, useContext } from "react";
import LoginImage from "../images/LogIn.png";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTooth } from "@fortawesome/free-solid-svg-icons";
import { AppContext } from "../context/AppContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();
  const { setIsLoggedIn } = useContext(AppContext);

  const handleInput = (event) => {
    const { name, value } = event.target;
    if (name === "email") setEmail(value);
    if (name === "password") setPassword(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (email === "" || password === "") {
      alert("Enter Details!");
      return;
    }

    const getDetails = JSON.parse(localStorage.getItem("user") || "[]");
    const user = getDetails.find(
      (u) => u.email === email && u.password === password
    );

    if (user) {
      const role = user.email.includes("@admin") ? "admin" : "patient";

      localStorage.setItem(
        "loggedInUser",
        JSON.stringify({
          email: user.email,
          name: user.name,
          role,
        })
      );

      setIsLoggedIn(true);
      alert("Login Successful!");

      if (role === "admin") {
        navigate("/admin");
      } else {
        navigate("/patient");
      }
    } else {
      setMsg("Invalid Email or Password!");
    }
  };

  return (
    <div className="SignUp-Login-Outer">
      <div className="Login-Outer" style={{ backgroundColor: "#FFFDF6" }}>
        <div className="Login-Inner1">
          <p id="error-msg">{msg}</p>

          <form onSubmit={handleSubmit}>
            <div className="heading">
              <FontAwesomeIcon icon={faTooth} />
              <p>Login</p>
            </div>
            <div className="account">
              <input
                type="text"
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

            <button type="submit">Login</button>
            <p>
              No Account? <a href="/signup">Sign Up</a>
            </p>
          </form>
        </div>
      </div>

      <div className="Login-Inner2">
        <img
          src={LoginImage}
          alt="image"
          style={{ width: "410px", height: "auto" }}
        />
      </div>
    </div>
  );
};

export default Login;
