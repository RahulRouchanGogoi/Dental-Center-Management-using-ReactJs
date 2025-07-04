
import TopDoctors from "../Components/TopDoctors";
import Homeimage from "../images/homeImg.png";
import Banner from "../Components/Banner";
import Footer from "../Components/Footer"
import { useNavigate } from "react-router-dom";

const Home = () => {

  const navigate=useNavigate();

  return (
    <div style={{ backgroundColor: "#FFFDF6" }}>
    
      <div className="home-photo-with-message-outer" >
        <div className="home-photo-with-message">
          <div className="home-photo-msg">
            <p>Prioritize Your Smile!</p>
            <p>Book Your Consultation</p>
            <div className="home-photo-msg-inner">
              <p>Schedule your appointment hassle-free!</p>
            </div>
            <div className="home-photo-msg-inner2">
            <p>Have an account?</p>
            <button onClick={()=>{navigate("/login"); window.scrollTo(0, 0)}}>Login</button>
          </div>
          </div>
          <div>
            <img
              src={Homeimage}
              alt="image"
              style={{ width: "410px", height: "auto" }}
            />
          </div>
        </div>
      </div>

        <div className="home-screen-msg">
          <div className="home-screen-msg-inner1">
            <p>Find the Right Dentist for You</p>
          </div>
          <div className="home-screen-msg-inner2">
            <p>Simply browse through our extensive list of trusted doctors.</p>
            <p>Schedule your appointment hassle-free!</p>
          </div>
          
        </div>
        
        <TopDoctors/>
        <Banner/>
        <Footer/>
    </div>
  );
};

export default Home;
