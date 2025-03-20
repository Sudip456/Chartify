import React from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import "./loginpage.css";
import Loginmodel from "../models/loginpage3d";
import useLoginStore from "../models/loginstore.js";

const loginpage = () => {
  const navigate = useNavigate();
  const { email, password, updateField, submitForm, resetForm } =
    useLoginStore();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { status, message, data } = await submitForm();
      console.log(status, message, data);
      const { token, id } = data;
      if (status === 200 || status === 201) {
        Cookies.set("token", token, { expires: 1 }); // Expires in 1 day
        navigate(`/messages/${id}`);

        resetForm();
      } else {
        alert(message);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div id="loginpagemain">
      <div id="secloginpage">
        <Loginmodel />
      </div>
      <div id="loginformfill">
        <form id="loginform" onSubmit={handleSubmit}>
          <label className="loginlbl">Email</label>
          <input
            type="email"
            className="logininp"
            value={email}
            onChange={(e) => updateField("email", e.target.value)}
            required
          />
          <label className="loginlbl">Password</label>
          <input
            type="password"
            className="logininp"
            value={password}
            onChange={(e) => updateField("password", e.target.value)}
            required
          />
          <button id="loginbtn">Login</button>
        </form>
      </div>
      <span id="loginspan">
        <span>Donot have any account?</span>
        <span
          id="loginregister"
          onClick={() => {
            navigate("/signup");
          }}
        >
          Register
        </span>
      </span>
    </div>
  );
};

export default loginpage;
