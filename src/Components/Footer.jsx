import { faUserDoctor } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <div style={{width:"100vw",backgroundColor:"#FFFDF6",display:"flex",alignItems:"center",justifyContent:"center"}}>
      <div className="footer">
        <div className="footer-logo">
          <div className="footer-brand">
            <FontAwesomeIcon icon={faUserDoctor} />
            <p>Dental Care</p>
          </div>
          <p className="footer-description">
            We are committed to providing accessible and reliable healthcare
            services through a trusted network of experienced doctors. Your
            well-being is our priority, every step of the way.
          </p>
        </div>

        <div className="footer-links">
          <p className="footer-heading">COMPANY</p>
          <ul>
             <li><Link to="/" className="footer-link">Home</Link></li>
              
            <li>Contact Us</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        <div className="footer-contact">
          <p className="footer-heading">GET IN TOUCH</p>
          <ul>
            <li>(+91) 9998882222</li>
            <li>rahulrouchangogoi@gmail.com</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
