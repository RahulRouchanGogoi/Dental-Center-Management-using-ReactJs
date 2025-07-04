import { useNavigate } from "react-router-dom";
import AdminDashboard from "../AdminComponents/AdminDashboard";
import Footer from "../Components/Footer";


const Admin = () => {
  return (
    <div style={{backgroundColor:"#FFFDF6"}}>
      <AdminDashboard />
    
      <Footer />
    </div>
  );
};

export default Admin;
