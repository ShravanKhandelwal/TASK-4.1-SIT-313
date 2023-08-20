import React from "react";
import "./header.css";
import header_img from "./dekin.jpeg";

function Header() {
  return(
  <div>
    <div class="img-section">
      <img src={header_img} alt="" className="header_img" />
    </div>
  </div>
  );
};

export default Header;