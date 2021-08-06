import React from "react";
import "./Contact.css";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaBusinessTime } from "react-icons/fa";
import emailjs from 'emailjs-com';

const Contact = () => {

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_5rnkxme', 'template_1lc35eg', e.target, 'user_09arrQ2mylcG2xaPRftvY')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  }



  const contactinfo = [
    {
      icon: <FaMapMarkerAlt />,
      subject: "Web Aid Pro",
      location: "Dhaka, Bangladesh",
    },
    {
      icon: <FaPhoneAlt />,
      subject: "Contact Number",
      location: <a href="tel:+8801870941293">+8801870941293</a>,
    },
    {
      icon: <FaBusinessTime />,
      subject: "Opening Hours",
      location: "Mon-Fri 9am-6pm",
    },
  ];
  return (
    <section className="contact_section" id="contact">
      <div className="container">
        <div className="section_header">
          <h1>Contact Us</h1>
        </div>
        <div className="row">
          {contactinfo.map((contact) => (
            <div className="col-md-4">
              <div className="contact_info_main">
                <div className="contact_icon">
                  <i>
                    {/* <FaMapMarkerAlt /> */}
                    {contact.icon}
                  </i>
                </div>
                <div className="contact_info">
                  <h6>{contact.subject}</h6>
                  <h4>{contact.location}</h4>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* input area */}
        <form className="contact-form" onSubmit={sendEmail}>
          <div className="row input_row">
            <div className="col-md-6">
              <div className="input_sec">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Full Name:"
                  name="name"
                />
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email:"
                  name="email"
                />
                <input
                  type="text"
                  className="form-control"
                  placeholder="Subject:"
                  name="subject"
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="massage_input">
                <textarea
                  name="text"
                  id=""
                  cols="20"
                  rows="7"
                  className="form-control"
                  placeholder="Massage"
                  name="message"
                />
              </div>
              <div className="input_btn" >
                <input
                  type="submit"
                  value="Send Massege"
                  className="btn btn-outline-primary "
                />
              </div>
            </div>
          </div>
        </form>
        {/* text area */}
      </div>
    </section>
  );
};

export default Contact;
