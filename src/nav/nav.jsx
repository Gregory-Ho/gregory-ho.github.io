import React from "react";
import "./nav.css"

class Nav extends React.Component {
    render() {
        return(
            <div className="nav-bar">
                <a href="/">About Me</a>
                <a href="#experience">Experience</a>
                <a href="#projects">Projects</a>
                <a href="#contact">Contact Me</a>
            </div>
        );
    }
}

export default Nav;