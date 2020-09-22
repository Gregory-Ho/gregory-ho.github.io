import React from "react";
import "./Introduction.css"

import LinkedInIcon from "@material-ui/icons/LinkedIn";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import GitHubIcon from "@material-ui/icons/GitHub";
import Particles from "react-particles-js";

class Introduction extends React.Component {
     render() {
        return(
            <div className="introduction">
              <Particles className="particles-bg"
                         params={{
                           "particles": {
                             "color" : {
                               "value" : "#FFF"
                             },
                             "number": {
                               "value": 150,
                               "density": {
                                 "enable": false
                               }
                             },
                             "size": {
                               "value": 3,
                               "random": true,
                               "anim": {
                                 "speed": 1,
                                 "size_min": 0.1
                               }
                             },
                             "line_linked": {
                               "enable": false
                             },
                             "move": {
                               "random": true,
                               "speed": 1,
                               "direction": "random",
                               "out_mode": "out"
                             }
                           }
                         }}
              />
              <div className="introduction-content">
                <img className="profile-image" src={require("../assets/me.jpg")} alt="Gregory Ho"/>
                <h1 className="name">I'm Gregory Ho</h1>
                <h5 className="text-box">
                  I'm currently completing my 3rd year in Computer Engineering at the University of Waterloo. I decided to go into computer engineering because I have a strong interest in both software and hardware, as well as the bridge that connects them together. Most of my experience has been in web development, but I also plan on getting some hardware experience before I complete my degree. Besides work, I enjoy the outdoors and doing activities with friends and co-workers. I would never turn down an invite to go camping, canoeing, finishing, hiking, exploring, ... I think you get the point. If you are interested in my work, my hobbies, or just someone I have not talked to in a while feel free to connect with me through one of the links below. I would be happy to hear from you!
                </h5>
                <div className="social">
                  <a className="col-4 contact-icon linkedin-icon" href="https://www.linkedin.com/in/gregory-ho/">
                    <LinkedInIcon fontSize="large" style={{fontSize: '40px'}}/><span className="contact-text">linkedin.com/in/gregory-ho</span>
                  </a>
                  <a className="col-4 contact-icon" href="mailto:gregory.ho@uwaterloo.ca">
                    <MailOutlineIcon fontSize="large" style={{fontSize: '40px'}}/><span className="contact-text">gregory.ho@uwaterloo.ca</span>
                  </a>
                  <a className="col-4 contact-icon github-icon" href="https://github.com/Gregory-Ho">
                    <GitHubIcon fontSize="large" style={{fontSize: '40px'}}/><span className="contact-text">github.com/Gregory-Ho</span>
                  </a>
                </div>
              </div>
            </div>
        );
    }
}

export default Introduction;