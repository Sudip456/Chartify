import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./signuppage.css";
import Signupmodel from "../models/signuppage3d";
import useFormStore from "../models/signupstore";

const Signuppage = () => {
  const [errormes, seterrormes] = useState("");
  const navigate = useNavigate();

  const {
    fullname,
    username,
    email,
    address,
    password,
    updateField,
    submitForm,
    resetForm,
  } = useFormStore();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { status, message } = await submitForm();
      seterrormes(message);

      if (status === 200 || status === 201) {
        resetForm();
        navigate("/login");
      }
    } catch (error) {
      seterrormes("Something went wrong. Please try again.");
    }
  };

  return (
    <div id="signupmain">
      <div id="secdmainsignup">
        <div id="signuppagebox1">
          <Signupmodel />
        </div>
        <div id="signup3d">
          <form onSubmit={handleSubmit}>
            <label className="signuplbl">Full Name</label>
            <input
              type="text"
              className="signupinp"
              value={fullname}
              onChange={(e) => updateField("fullname", e.target.value)}
              required
            />
            <label className="signuplbl">Username</label>
            <input
              type="text"
              className="signupinp"
              value={username}
              onChange={(e) => updateField("username", e.target.value)}
              required
            />
            <label className="signuplbl">Email</label>
            <input
              type="email"
              className="signupinp"
              value={email}
              onChange={(e) => updateField("email", e.target.value)}
              required
            />
            <label className="signuplbl">Address</label>
            <input
              type="text"
              className="signupinp"
              value={address}
              onChange={(e) => updateField("address", e.target.value)}
              required
            />
            <label className="signuplbl">Password</label>
            <input
              type="password"
              className="signupinp"
              value={password}
              onChange={(e) => updateField("password", e.target.value)}
              required
            />
            <button id="signuppagebtn">Signup</button>
          </form>
        </div>
      </div>
      <span id="errorbox" className="signupspan">
        {errormes}
      </span>
      <span id="signlogin" className="signupspan">
        <span>Already have an account? </span>
        <br />
        <span id="loginsec" onClick={() => navigate("/login")}>
          Login
        </span>
      </span>
    </div>
  );
};

export default Signuppage;
