import React, { Component } from 'react'
import '../css/results.scss'

export class results extends Component {
    constructor (props) {
        super()
        this.state = {
            fName: props.props.fname,
            lName: props.props.sname,
            percentage: props.props.percentage,
            description: props.props.result
        }
    }
  render() {
    return (
      <div>
        <h1 className="firstName">First Person: {this.state.fName}</h1>
        <h1 className="secondName">Second Person: {this.state.lName}</h1>
        <h1>{this.state.percentage}% Match!</h1>
        <h1>{this.state.description}</h1>
      </div>
    );
  }
}

export default results
