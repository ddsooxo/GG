import React from "react";
import "./Header.css";
import logo1 from "../../assets/img/GG-Logo.png";
import profilePicture from "../../assets/img/2.jpg";

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <div>
          <title>User Dropdown Header</title>
          <link rel="stylesheet" href="./Header.css" />
          <link
            href="http://fonts.googleapis.com/css?family=Cookie"
            rel="stylesheet"
            type="text/css"
          />
          <header className="header">
            <div className="header-limiter">
              <img src={logo1} alt="super cool logo" className="logo" />
              <nav>
                <a href="#">Current Challenges</a>
                <a href="#">Previous Challenges</a>
                <a href="#">Charities</a>
                <a href="#">
                  Awards <span className="header-new-feature">new</span>
                </a>
              </nav>
              <div className="header-user-menu">
                <img src={profilePicture} alt="User Image" />
                <ul>
                  <li>
                    <a href="#">Settings</a>
                  </li>
                  <li>
                    <a href="#">Payments</a>
                  </li>
                  <li>
                    <a href="#" className="highlight">
                      Logout
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </header>
        </div>
      </div>
    );
  }
}
export default Header;
