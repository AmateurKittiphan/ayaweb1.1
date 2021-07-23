import React, { Component } from "react";
import { connect } from "react-redux";

export class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div
        className=""
        style={{
          position: "absolute",
          right: 0,
          bottom: 0,
          left: 0,
          padding: "1rem",
          textAlign: "center",
          color: "white",
          fontSize: 24,
          backgroundColor: "#0005",
        }}
      >
        <h5>Aya Uliwan</h5>
      </div>
    );
  }
}
const mapStateToprops = (state) => {
  return {
    project: state.project.projects,
  };
};

export default connect(mapStateToprops)(Footer);
