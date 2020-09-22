import React from "react";
import "./ToolPill.css"

class ToolPill extends React.Component {
  render() {
    return(
      <div className={"tool-pill " + this.props.tool[1]}>
        {this.props.tool[0]}
      </div>
    );
  }
}

export default ToolPill;