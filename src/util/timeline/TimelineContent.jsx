import React from "react";

import ToolPill from "../tool-pill/ToolPill";

import BusinessIcon from '@material-ui/icons/Business';
import DateRangeIcon from '@material-ui/icons/DateRange';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import BuildIcon from '@material-ui/icons/Build';
import PublicIcon from '@material-ui/icons/Public';
import GitHubIcon from '@material-ui/icons/GitHub';

import "./TimelineContent.css"

class TimelineContent extends React.Component {
  render() {
    let layoutClass = this.props.layoutClass

    let toolList = [];
    if (this.props.tools) {
      this.props.tools.forEach((tool) => {
        if (layoutClass === " left") {
          toolList.push(<ToolPill tool={tool}/>);
        } else {
          toolList.unshift(<ToolPill tool={tool}/>);
        }
      });
    }


    let info = <div className="col-lg-6">
      <div className={"item-info item-box" + layoutClass}>
        {
          this.props.company &&
          <div className="company">
            {this.props.company}
            <BusinessIcon className={"company-icon" + layoutClass}/>
          </div>
        }
        {
          this.props.date &&
          <div className="date">
            {this.props.date}
            <DateRangeIcon className={"date-icon" + layoutClass}/>
          </div>
        }
        {
          this.props.location &&
          <div className="location">
            {this.props.location}
            <LocationOnIcon className={"location-icon" + layoutClass}/>
          </div>
        }
        {
          this.props.github &&
            <div className="github">
              <a href={this.props.github}>
                Check it out on GitHub!
              </a>
              <GitHubIcon className={"github-icon" + layoutClass}/>
            </div>
        }
        {
          this.props.linkText &&
          <div className="project-link">
            {
              this.props.link ?
                <a href={this.props.link}>
                  {this.props.linkText}
                </a>
              :
                this.props.linkText
            }
            <PublicIcon className={"link-icon" + layoutClass}/>
          </div>
        }
        {
          this.props.tools &&
          <div className="tools">
            {toolList}
            <BuildIcon className={"tools-icon" + layoutClass}/>
          </div>
        }
      </div>
    </div>;

    let description = <div className="col-lg-6">
      <div className={"item-description item-box" + layoutClass} >
        <div className={"arrow" + layoutClass}/>
        <h3>
          {this.props.title}
        </h3>
        <p className="timeline-subtitle">
          {this.props.description}
        </p>
      </div>
    </div>;

    return(
      <div className="timeline-item">
        <div className="row">
          {layoutClass === " left" ? info : description}
          {layoutClass === " left" ? description : info}
        </div>
      </div>
    );
  }
}

export default TimelineContent;