import React from "react";
import "./footer.css";
import instagram from "./insta.png";
import X from "./twitter.png";
import facebook from "./facebook.png";

function Footer() {
  return (
    <div>
      <div className="main_container">
        <div className="upper_footer">
          <div className="Explore">
            <h2>Explore</h2>
            <ul>
              <li>Home</li>
              <li>Questions</li>
              <li>Articles</li>
              <li>Tutorials</li>
            </ul>
          </div>
          <div className="Support">
            <h2>Support</h2>
            <ul>
              <li>FAQ'S</li>
              <li>Help</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div className="Socials">
            <ul>
              <li>
                <img src={instagram} alt="" className="logo" />
              </li>
              <li>
                <img src={facebook} alt="" className="logo" />
              </li>
              <li>
                <img src={X} alt="" className="logo" />
              </li>
            </ul>
          </div>
        </div>
        <div className="lower_footer">
          <h2>Dev@Dekin 2022</h2>
          <div className="content_lower">
            <li>Privacy Policy</li>
            <li>Terms</li>
            <li>Code Of Conduct</li>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
