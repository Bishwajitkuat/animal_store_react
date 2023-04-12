import React from "react";
import { NavLink } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <div className="homeLinkParent">
      <NavLink to="/animals">
        <div className="animalLinkDiv">
          <h2>Animal</h2>
        </div>
      </NavLink>
      <NavLink to="/birds">
        <div className="birdLinkDiv">
          <h2>Birds</h2>
        </div>
      </NavLink>
    </div>
  );
};

export default Home;
