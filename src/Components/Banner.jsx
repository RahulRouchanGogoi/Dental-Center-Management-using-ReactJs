import BannerImg from "../images/BannerImg.png";
import { useNavigate } from "react-router-dom";


const Banner = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="banner-inner">
        <div>
          <p id="banner-p">Book Your Consultation</p>
          <button onClick={() => {navigate("/signup");scrollTo(0, 0);}} id="banner-button">
            Create Account
          </button>
        </div>
        <div>
          <img
            src={BannerImg}
            alt="image"
            style={{ width: "410px", height: "auto" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
