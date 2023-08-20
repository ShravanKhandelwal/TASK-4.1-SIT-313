import React from "react";
import "./navbar.css";

const NavBar = () => {
  return (
    <nav>
      
      <a href="#">DevDekin</a>
      <input type="text" placeholder="Enter Your Name" />
      <div id="nav-end">
      <a href="#">Post</a>
      <a href="#">Login</a>
      </div>
    </nav>
  );
};

export default NavBar;
