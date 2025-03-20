import "./homepage.css";
import Logmodel from "../models/logwithflowers.jsx";

const Homepage = () => {
  return (
    <div id="extra_div">
      <div id="logmodel">
        <Logmodel />
      </div>
      <p id="p_homepage">Select a friend to chart</p>
    </div>
  );
};

export default Homepage;
