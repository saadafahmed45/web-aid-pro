import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <footer className="footer_section">
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <div className="logo_bottom">
              <h3>
                <b>Web Aid Pro</b>
              </h3>
              <div className="cnt_content">
                <h5>Call us:</h5>
                <h6>+8801870941293</h6>
                <br></br>

                <h6>Jatrabari,Kadamtolly-1263</h6>
                <h6>Dhaka, Bangladesh</h6>

                <h6>webaidpro@support.com</h6>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="imp_sec">
              <h4>Important Link</h4>
              <div className="imp_link">
                <ul>
                  <li>
                    <a href="#">about</a>
                  </li>
                  <li>
                    <a href="#">services</a>
                  </li>
                  <li>
                    <a href="#">legal Notice</a>
                  </li>
                  <li>
                    <a href="#">siteMap</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="contact_sec">
              <h4>Contact Us</h4>
              <h6>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/> Nobis
                deleniti quis ullam.
              </h6>
              <div className="cnt_btn">
                <button className="btn btn-primary">Contact</button>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="suscribe_sec">
              <h4>Newsletter</h4>
              <div className="sub_input">
                <input
                  placeholder="Enter your email address"
                  className="form-control"
                  type="email"
                  name=""
                  id=""
                />
                <br />
                <button className="btn btn-outline-primary">Suscribe</button>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="row">
            <div className="col-12">
                <div className="copyright text-center">
                  
                    <p>Copyright © 2021 webaidpro.org</p>
                </div>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
