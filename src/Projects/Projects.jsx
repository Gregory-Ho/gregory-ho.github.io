import React from "react";
import "./Projects.css"
import TimelineWrapper from "../util/timeline/TimelineWrapper";
import TimelineContent from "../util/timeline/TimelineContent";
import * as Tools from "../util/tool-pill/Tools";

const ProjectsList = [
{
  "layoutClass": " right",
  "date": "Jul 2020",
  "github": "https://github.com/Gregory-Ho/RLTicTacToe",
  "linkText": "Play Against The Model Here!",
  "link": "https://gregoryho.me/RLTicTacToe/",
  "tools": [Tools.OPENAI, Tools.REACT, Tools.NUMPY, Tools.TENSORFLOW, Tools.PYTHON],
  "title": "T-Cubed – Reinforcement Learning Tic Tac Toe Model",
  "description":
    <ul className="item-description-list right">
      <li>Created a Tic Tac Toe learning environment with OpenAI Gym and trained model using policy gradients</li>
      <li>Refactored model multiple times and modified learning parameters to achieve a 97% win rate against a random player</li>
      <li>Hosted model on AWS using TensorFlow Serving to serve model predictions over a REST API</li>
    </ul>
}, {
  "layoutClass": " left",
  "date": "Jul 2019",
  "tools": [Tools.C, Tools.DIPTRACE, Tools.CCC],
  "title": "CoolAid – Clap Controlled Fan",
  "description":
    <ul className="item-description-list right">
      <li>System which allows the user to control a fan’s speed using claps</li>
      <li>Designed an add-on PCB from scratch to attach to a Texas Instruments MSP430</li>
      <li>Uses an electret mic and op-amp circuit to get an input signal</li>
      <li>Followed the engineering process from prototyping to production</li>
    </ul>
}, {
  "layoutClass": " right",
  "date": "Mar 2019",
  "github": "https://github.com/Gregory-Ho/work-board",
  "tools": [Tools.GIT, Tools.MAVEN, Tools.AWS, Tools.SQL, Tools.SPRING_BOOT, Tools.ANGULAR],
  "title": "WorkBoard – Agenda and Planner",
  "description":
    <ul className="item-description-list right">
      <li>Responsive full stack web application that helps users track tasks and provides statistics on their productivity</li>
      <li>Used REST endpoints to communicate between front-end and back-end</li>
      <li>Hosted using AWS with a pipeline deploying from a GitHub repository</li>
    </ul>
}, {
  "layoutClass": " left",
  "date": "Aug 2018",
  "github": "https://github.com/Gregory-Ho/Daily-Dashboard",
  "tools": [Tools.HTML, Tools.CSS, Tools.JAVASCRIPT, Tools.JQUERY, Tools.BOOTSTRAP],
  "title": "DailyDash – News and Weather Feed",
  "description":
    <ul className="item-description-list right">
      <li>Designed a dashboard which displays live news and weather by location</li>
      <li>Used REST APIs from news and weather providers to populate the page</li>
      <li>Created custom circular progress bar animation using JavaScript</li>
    </ul>
}, {
  "layoutClass": " right",
  "date": "May 2017",
  "tools": [Tools.C, Tools.PIC32],
  "title": "Line Following Robot – High School Project",
  "description":
    <ul className="item-description-list right">
      <li>Designed a robot from scratch using IR sensors and servo motors</li>
      <li>Improved performance by adjusting timings and repositioning the sensors and motors</li>
    </ul>
}
];

class Projects extends React.Component {
  render() {
    return(
      <div id="projects">
        <TimelineWrapper title="Projects">
          {
            ProjectsList.map((project) => {
              return (
                <TimelineContent
                  {...project}
                />
              );
            })
          }
        </TimelineWrapper>
      </div>
    );
  }
}

export default Projects;