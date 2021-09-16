import React from "react";
import "./Header.css";
import headerImg from "../images/At the office-amico.svg";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSkype } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import Navbar from "../Navbar/Navbar";
const Header = () => {
  return (
    <>
        <Navbar></Navbar>

      <header className="header_section" id="header">
        <div className="container">
          <div className="row mt-3">
            <div className="col-md-6">
              <div className="header_content text-left">
                <h3>Hello There!</h3>

                <h1>
                  We are Professional <br /> <span>Web Developer</span>.
                </h1>
                <p>
                  We have members of experts here. we will support and maintain
                  your WordPress website for all time. Here we Design &
                  Development any type of WordPress website. we work with every
                  sector of WordPress.
                </p>
                <button class="btn  btn-outline-primary text-left">
                  {" "}
                  Contact Us
                </button>
              </div>
            </div>
            <div className="col-md-6">
              <div className="header_img">
                <img src={headerImg} alt="" />
              </div>
            </div>
          </div>
        </div>

        <div class="icon-bar">
          <a href="https://www.facebook.com/webaidpro" class="facebook">
            <i>
              <FaFacebookSquare />
            </i>
          </a>
          <a href="#" class="twitter">
            <i>
              <FaSkype />
            </i>
          </a>
          <a href="#" class="google">
            <i>
              <FaGoogle />
            </i>
          </a>
          <a href="#" class="linkedin">
            <i>
              <FaLinkedin />
            </i>
          </a>
        </div>
      </header>
    </>
  );
};

export default Header;
