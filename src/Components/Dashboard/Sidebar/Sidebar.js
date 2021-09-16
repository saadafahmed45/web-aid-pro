import React from "react";
import { FaCpanel, FaElementor, FaGoogleDrive } from "react-icons/fa";
import "./Sidebar.css";
const Sidebar = () => {
  return (
    <div className="sidebar">
     <div className="row">
         <div className="col-md-4 side">
        <div className="logo">
          <h5>web aid pro</h5>
        </div>
        <div className="side_manu">
          <ul>
            <li>
              <FaElementor />
              <a href="">make admin</a>
            </li>
            <li>
              <FaElementor />
              <a href="">Dashboard</a>
            </li>
            <li>
              <FaElementor />
              <a href=""> All Orders</a>
            </li>
            <li>
              <FaElementor />
              <a href="">Add services</a>
            </li>
            <li>
              <FaElementor />
              <a href="">Add Portfolio</a>
            </li>
          </ul>
      </div>
         </div>
         .div
     </div>
    </div>
  );
};

export default Sidebar;
