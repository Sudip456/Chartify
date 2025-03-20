import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import axios from "axios";

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const logoutUser = async () => {
      try {
        await axios.post(
          "http://localhost:8000/logout",
          {},
          { withCredentials: true }
        );

        Cookies.remove("token");

        navigate("/login");
      } catch (error) {
        alert("Logout failed!!");
      }
    };

    logoutUser();
  }, [navigate]);

  return <div>Logging out...</div>;
};

export default Logout;
