import React from "react";
import { useNavigate } from "react-router-dom";
import Threemodel from "../models/3d";
import "./landingpage.css";

const landingpage = () => {
  const navigate = useNavigate("");
  return (
    <div id="landingpagemain">
      <div id="secmainlandingpage">
        <div id="firstpart">
          <h1 id="landingpageh1">Chartify</h1>
          <p id="landingpagep">
            Connect Beyond Words -- Seamless Messaging, Powerful Features, and
            Absolute Security!
          </p>
          <div id="landingbtn">
            <button
              className="landbtn"
              onClick={() => {
                navigate("/signup");
              }}
            >
              SignUp
            </button>
            <button
              className="landbtn"
              onClick={() => {
                navigate("/login");
              }}
            >
              Login
            </button>
          </div>
        </div>

        <div id="threemodel">
          <Threemodel />
        </div>
      </div>
    </div>
  );
};

export default landingpage;
