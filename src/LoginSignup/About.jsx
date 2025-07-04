import Footer from "../Components/Footer";

const About = () => {
  return (
    <div className="page-container-outer">
      <div className="page-container">
        <h2>About Our Dental Clinic</h2>
        <p>
          Welcome to our online dental appointment system. We are dedicated to
          providing you with exceptional dental care, conveniently accessible
          through our digital platform.
        </p>
        <p>
          Our clinic is committed to excellence in oral health, offering a wide
          range of services from regular check-ups and cleanings to advanced
          procedures like root canals, cosmetic dentistry, and orthodontics.
        </p>
        <p>
          With highly experienced dentists and staff, we aim to make your visit
          comfortable, efficient, and effective. We believe in preventive care,
          patient education, and personalized treatment plans.
        </p>
        <p>
          This platform ensures you can book, track, and manage your dental
          appointments easily, anytime and anywhere.
        </p>
      </div>
      <Footer/>
    </div>
  );
};

export default About;
