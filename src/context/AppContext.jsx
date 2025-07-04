// src/context/AppContext.jsx

import { createContext, useState, useEffect } from "react";
import { doctors } from "../files/assets";

export const AppContext = createContext();

const AppContextProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [appointments, setAppointments] = useState([]);

  //  Sync login status from localStorage
  useEffect(() => {
    const user = localStorage.getItem("loggedInUser");
    if (user) setIsLoggedIn(true);
  }, []);

  //  Load appointments from localStorage
  useEffect(() => {
    const storedAppointments = JSON.parse(localStorage.getItem("appointments") || "[]");
    setAppointments(storedAppointments);
  }, []);

  const addAppointment = (newAppointment) => {
    const updated = [...appointments, newAppointment];
    setAppointments(updated);
    localStorage.setItem("appointments", JSON.stringify(updated));
  };

  const value = {
    doctors,
    isLoggedIn,
    setIsLoggedIn,
    appointments,
    addAppointment,
  };

  return (
    <AppContext.Provider value={value}>
      {props.children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
