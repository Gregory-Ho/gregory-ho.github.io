import React from "react";
import "./Experience.css"
import TimelineWrapper from "../util/timeline/TimelineWrapper";
import TimelineContent from "../util/timeline/TimelineContent";
import * as Tools from "../util/tool-pill/Tools";

const JobsList = [
{
    "layoutClass": " right",
    "company": "Ultimate Software",
    "date": "Jan 2021 - Apr 2021",
    "location": "Toronto, ON",
    "tools": [Tools.GRAFANA, Tools.KUBERNETES, Tools.RABBITMQ, Tools.KAFKA, Tools.SPRING_BOOT, Tools.JAVA],
    "title": "Software Engineer",
    "description":
        <ul className="item-description-list right">
            <li>Worked on building a suite of scalable microservices to process and dispatch over 200,000 SMS, email and other notification requests on a weekly basis using Spring, RabbitMQ, Kafka, MongoDB, and Kubernetes</li>
            <li>Launched an external facing gateway to access our services using Spring Cloud Gateway and secured it using OAuth 2.0</li>
            <li>Created visualization dashboards to monitor events and the behaviour of our microservices using Micrometer, InfluxDB, Grafana, and Kibana</li>
        </ul>
},
{
  "layoutClass": " left",
  "company": "StackAdapt",
  "date": "Sep 2019 - Dec 2019",
  "location": "Toronto, ON",
  "tools": [Tools.REACT, Tools.REDUX, Tools.RUBY, Tools.GO, Tools.JAVASCRIPT, Tools.HTML, Tools.CSS],
  "title": "Full Stack Developer",
  "description":
    <ul className="item-description-list left">
      <li>Implemented an automation system to detect similar ads which had already been reviewed to reduce the auditing team’s workload by 20%</li>
      <li>Redesigned our audience webpage to display metrics, which are aggregated over millions of trackers, in new formats</li>
      <li>Worked with product managers and designers to analyze and implement new features from front-end to database using React, Ruby, and Go</li>
    </ul>
}, {
  "layoutClass": " right",
  "company": "Ultimate Software",
  "date": "Jan 2019 - Apr 2019",
  "location": "Toronto, ON",
  "tools": [Tools.INTELLIJ, Tools.POSTMAN, Tools.RABBITMQ, Tools.ANGULAR, Tools.SPRING_BOOT, Tools.JAVA],
  "title": "Software Test Engineer",
  "description":
    <ul className="item-description-list right">
      <li>Wrote integration and unit tests using Junit and Mockito to ensure microservices functioned as expected and maintained a 99% uptime</li>
      <li>Improved existing tests by refactoring code structure and redesigning time sensitive tests to ensure consistent test reliability</li>
      <li>Automated integration and contract tests between microservices</li>
    </ul>
}, {
    "layoutClass": " left",
    "company": "Allstream",
    "date": "May 2018 - Aug 2018",
    "location": "Toronto, ON",
    "tools": [Tools.SALESFORCE, Tools.VISUALFORCE, Tools.APEX, Tools.JAVA, Tools.JIRA, Tools.SQL],
    "title": "IT Co-op - Salesforce Development",
    "description":
      <ul className="item-description-list right">
        <li>Implemented new functionality using Visualforce pages, Apex classes and triggers, validation rules, and workflows</li>
        <li>Wrote Apex test classes which tested over 8000 lines of code to improve code coverage</li>
      </ul>
  }
];

class Experience extends React.Component {
  render() {
    return (
      <div id="experience">
        <TimelineWrapper title="Experience">
          {
            JobsList.map((job) => {
              return (
                <TimelineContent
                  {...job}
                />
              );
            })
          }
        </TimelineWrapper>
      </div>
    );
  }
}

export default Experience;