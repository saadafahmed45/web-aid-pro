import React from "react";
import "./Team.css";
import team1 from "../images/fahim1.png";
import team2 from "../images/saadaf1.png";
import team3 from "../images/yousuf2.png";
import { FaFacebookSquare } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
const Team = () => {
  const teamsMembers = [
    {
      name: "Fahim Hasan",
      photo: team1,
      position: "CEO Of Web Aid Pro",
      facebook:'https://www.facebook.com/profile.php?id=100009618333588',
    },
    {
      name: "Saad-Af Ahmed",
      photo: team2,
      position: "Full Stack Developer",
      facebook:'https://www.facebook.com/saadafhmed.officials'
    },
    {
      name: "Yousuf Ahmed",
      photo: team3,
      position: "WordPress Theme Developer",
      facebook:'https://www.facebook.com/yousuf.islam.me'
    },
  ];

  return (
    <section id="team">
      <div className="container">
        <div className="section_header text-center">
          <h1>Meet The Team</h1>
          {/* <h2>{teamsMembers.length}</h2> */}
        </div>
        <div className="row">
          {teamsMembers.map((team) => (
            <div className="col-md-4">
              <div className="team_box text-center">
                <div className="team_img">
                  <img src={team.photo} alt="" />
                </div>
                <h3>{team.name}</h3>
                <h5>{team.position}</h5>
                <div className="teams_social-link">
                  <a href={team.facebook} className="team_facebook">
                    <i>
                      <FaFacebookSquare />
                    </i>
                  </a>
                  <a href="#" className="team_twitter">
                    <i>
                      <FaGithub />
                    </i>
                  </a>

                  <a href="#" className="team_linkedin">
                    <i>
                      <FaLinkedinIn />
                    </i>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
