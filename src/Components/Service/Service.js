import React from "react";
import "./Service.css";
import service1 from "../images/html1.svg";
import service2 from "../images/ecom1.svg";
import service3 from "../images/res.svg";
import service4 from "../images/react.svg";
import service5 from "../images/security.svg";
import service6 from "../images/bug.svg";
const Service = () => {
  const serviceItem = [
    {
      name: "Static Site",
      img: service1,
      content:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus magnam exercitationem quae?",
    },
    {
      name: "E-Commerce Site",
      img: service2,
      content:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus magnam exercitationem quae?",
    },
    {
      name: "Fully Responsive",
      img: service3,
      content:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus magnam exercitationem quae?",
    },
    {
      name: "React.Js",
      img: service4,
      content:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus magnam exercitationem quae?",
    },
    {
      name: "Security Safe",
      img: service5,
      content:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus magnam exercitationem quae?",
    },
    {
      name: "Bug Fixing",
      img: service6,
      content:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus magnam exercitationem quae?",
    },
  ];

  return (
    <section className="services" id="service">
      <div className="container">
        <div className="section_header">
          <h1>Our Services</h1>
          <h5><b>We Provide Digital Services</b></h5>
        </div>
        <div className="row">
          {serviceItem.map((service) => (
            <div className="col-md-4">
              <div className="service_box">
                <div className="service_icon">
                  <img src={service.img} alt="" />
                </div>
                <div className="service_contect">
                  <h3>{service.name}</h3>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Error, provident.
                  </p>
                  <a href="#"> Read more..</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Service;
