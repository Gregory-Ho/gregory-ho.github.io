import React from "react";
import "./Contact.css"

import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import MailOutlineIcon from '@material-ui/icons/MailOutline';

class Contact extends React.Component {
  render() {
    return(
      <div id="contact" className="container-fluid">
        <div className="row">
          <a className="col-4 contact-icon linkedin-icon" href="https://www.linkedin.com/in/gregory-ho/"><LinkedInIcon fontSize="large"/><span className="contact-text">www.linkedin.com/in/gregory-ho</span></a>
          <a className="col-4 contact-icon" href="mailto:gregory.ho@uwaterloo.ca"><MailOutlineIcon fontSize="large"/><span className="contact-text">gregory.ho@uwaterloo.ca</span></a>
          <a className="col-4 contact-icon github-icon" href="https://github.com/Gregory-Ho"><GitHubIcon fontSize="large"/><span className="contact-text">github.com/Gregory-Ho</span></a>
        </div>
      </div>
    );
  }
}

export default Contact;