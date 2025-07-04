import Footer from "../Components/Footer";

const Contact = () => {
  return (
    <div className="contact-container-outer">
    <div className="contact-container">
      <h2>Contact Us</h2>
      <p>We're here to assist you with any inquiries or support regarding your dental health or our services.</p>

      <h3>Clinic Address</h3>
      <p>Rahul Rouchan Dental Clinic</p>
      <p>123 Health Avenue, Nagaon, Assam, India - 782001</p>

      <h3>Email</h3>
      <p>rahulrouchangogoi@gmail.com</p>

      <h3>Phone</h3>
      <p>+91 9999888822</p>

      <h3>Working Hours</h3>
      <ul>
        <li>Sunday to Monday: 9:00 AM – 6:00 PM</li>
      </ul>
    </div>
    <Footer/>
    </div>
  );
};

export default Contact;
