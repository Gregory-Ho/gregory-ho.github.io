import React from "react";
import "./TimelineWrapper.css"

class TimelineWrapper extends React.Component {

  render() {
    return(
      <div className="container">
        <div className="row ">
          <div className="col-lg-12">
            <div className="section-title text-center">
              <h2>{this.props.title}</h2>
              <div className="under-line">
                <div className="line-up">
                  <div className="dot"></div>
                  <div className="dot"></div>
                  <div className="dot"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="timeline-page">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default TimelineWrapper;