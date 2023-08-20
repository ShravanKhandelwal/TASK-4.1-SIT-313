import React from "react";
import "./bottom_navbar.css";

function Bottom_navbar() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <h2 id="Sign_up">SIGN UP FOR DAILY INSIDER</h2>
          </li>
          <li>
            <input type="text" id="bottom_input" placeholder="ENTER YOUR EMAIL" />
          </li>
          <li>
            <button id="Sub_button">SUBSCRIBE</button>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Bottom_navbar;
