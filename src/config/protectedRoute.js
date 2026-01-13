import React, { useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth"; // Import if you're using onAuthStateChanged
import { Navigate } from "react-router-dom"; // Or whatever routing you are using
import { auth } from "./config";

import { logo } from "../assets";
import Loading from "../components/loading";

function ProtectedRoute({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true); // To handle the initial loading state

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user || null);
      setIsLoading(false);
    });
    return () => unsubscribe();
  }, []);

  if (isLoading) {
    return (
      <div className="fixed w-full h-full bg-white">
        <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center w-full ">
          <img src={logo} alt="" className="w-96" />
          <Loading width={100} />
        </div>
      </div>
    );
  }

  // if (!currentUser) {
  //   // User is not logged in, redirect to login page
  //   localStorage.removeItem("maxUser");

  //   return <Navigate to='/' />;
  // }

  return children;
}

export default ProtectedRoute;
