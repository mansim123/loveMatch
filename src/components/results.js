import React, { Component } from "react";
import "../css/results.scss";
import { Row } from "react-bootstrap";

export class results extends Component {
  constructor(props) {
    super();
    this.state = {
      fName: props.props.fname,
      lName: props.props.sname,
      percentage: props.props.percentage,
      description: props.props.result
    };
  }
  render() {
    return (
      <div className="resultsCont">
        <Row>
          <h2>First Person: {this.state.fName}</h2>
        </Row>
        <Row>
          <h2>Second Person: {this.state.lName}</h2>
        </Row>
        <Row>
          <h2>{this.state.percentage}% Match!</h2>
        </Row>
        <Row>
          <h2>{this.state.description}</h2>
        </Row>
      </div>
    );
  }
}

export default results;
