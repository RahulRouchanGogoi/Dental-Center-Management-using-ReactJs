import Footer from "../Components/Footer";

const Policies = () => {
  return (
    <div className="policies-container-outer">
      <div className="policies-container">
        <h2>Privacy and Policies</h2>

        <h3>1. Data Collection</h3>
        <p>
          We collect personal data such as your name, email, contact number,
          age, and appointment history to provide efficient dental care
          services. This data is securely stored and never shared with third
          parties.
        </p>

        <h3>2. Appointment Policy</h3>
        <p>
          Patients are encouraged to book appointments in advance. If you need
          to cancel or reschedule, please do so at least 24 hours before your
          scheduled time.
        </p>

        <h3>3. Confidentiality</h3>
        <p>
          All patient records are confidential. Only authorized staff and
          dentists have access to your personal health information.
        </p>

        <h3>4. Cookie Usage</h3>
        <p>
          Our website may use cookies to enhance user experience and for
          analytics purposes. You may disable cookies in your browser settings
          if preferred.
        </p>

        <h3>5. Changes to Policy</h3>
        <p>
          We reserve the right to update our policies at any time. Updated terms
          will be reflected on this page.
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default Policies;
