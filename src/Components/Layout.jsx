import { useLocation, Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import AdminNavbar from "../AdminComponents/AdminNavbar";

const Layout = () => {
  const location = useLocation();
  const [userRole, setUserRole] = useState("guest");

  useEffect(() => {
    try {
      const rawUser = localStorage.getItem("loggedInUser");
      const parsedUser = rawUser ? JSON.parse(rawUser) : null;

      if (parsedUser?.role === "admin") {
        setUserRole("admin");
      } else if (parsedUser?.role === "patient") {
        setUserRole("patient");
      } else {
        setUserRole("guest");
      }
    } catch (error) {
      console.error("Invalid user data in localStorage:", error);
      setUserRole("guest");
    }
  }, [location.pathname]);

  return (
    <>
      {userRole === "admin" ? <AdminNavbar /> : <Navbar />}
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
