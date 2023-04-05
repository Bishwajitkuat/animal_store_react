import React from "react";
import "./Header.css";

const Header = (props) => {
  return (
    <header>
      <h1>Online Zoo</h1>
      <nav>
        <ul>
          <li>Animals</li>
          <li>Birds</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
