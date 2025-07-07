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
          <img className="home-banner-img"
            src={BannerImg}
            alt="image"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
