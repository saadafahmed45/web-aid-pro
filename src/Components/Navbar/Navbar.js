import React, { useState } from "react";
import "./Navbar.css";
import { FaBars } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import { BiAlignRight } from "react-icons/bi";
import logo from "../images/logo1.png";
import { Link, NavLink } from "react-router-dom";
// import { HashLink as NavLink } from "react-router-hash-link";

const Navbar = () => {
  const [isMobile, setMobile] = useState(false);

  // dark mode start
  // const myFunction = () => {
  //   const element = document.body;
  //   element.classList.toggle("dark-mode");
  // };
  // dark mode end

  const [navbar, setNavbar] = useState(false);
  const changeBackground = () => {
    console.log(window.scrollY);
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  window.addEventListener("scroll", changeBackground);

  return (
    <div>
      <nav className={navbar ? "navbar scroll" : "navbar"}>
        {/* logo */}
        <div className="logo">
          <h5>
            <b>Web Aid Pro</b>
            {/* <i>
              <FcMindMap />
            </i> */}
          </h5>
        </div>
        {/* logo */}

        {/* nav link   */}

        <ul
          className={isMobile ? "mobile_link" : "nav_link"}
          onClick={() => setMobile(false)}
        >
          <li>
            <NavLink to="/" exact activeClassName="myActive">
              Home
            </NavLink>
          </li>

          <li>
            <NavLink to="/service" activeClassName="myActive">
              Services
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" activeClassName="myActive">
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/team" activeClassName="myActive">
              Team
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" activeClassName="myActive">
              Contact
            </NavLink>
          </li>
          {/* 
          <li className="signup">
            <Link to="/service">Login</Link>
          </li> */}

          {/* <div class="form-check form-switch">
                <input
                  onClick={myFunction}
                  class="form-check-input"
                  type="checkbox"
                  id="flexSwitchCheckDefault"
                />
                <label class="form-check-label" for="flexSwitchCheckDefault">
                  <small style={{color:'#000'}}>   Dark Mode</small>
                </label>
              </div> */}
        </ul>
        {/* nav link   */}

        {/* mobail menus btn*/}

        <div className="mobail_menu_icon" onClick={() => setMobile(!isMobile)}>
          {isMobile ? (
            <i>
              <FaTimes />
            </i>
          ) : (
            <i>
              <FaBars />
              {/* <BiAlignRight /> */}
            </i>
          )}
        </div>

        {/* mobail menus btn*/}
      </nav>
    </div>
  );
};

export default Navbar;
