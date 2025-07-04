
import PatientInfo from "../Components/PatientInfo";
import PatientUpcomingAppointment from "../Components/PatientUpcomingAppointment";
import Footer from "../Components/Footer";
import PatientInfoForm from "../Components/PatientInfoForm";


const Patient = () => {
  return (
    <div style={{ backgroundColor: "#FFFDF6" }}>
     
      <div className="patient-appointment-fulldetails">
        <div >
    
          <div>
            <PatientInfo />
          </div>
          <div>
            <PatientUpcomingAppointment />
          </div>
        </div>

        <div>
          <PatientInfoForm/>
        
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Patient;
