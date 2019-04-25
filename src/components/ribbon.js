import React, { Component } from 'react'
import '../css/ribbon.scss'

export class Ribbon extends Component {
  render() {
    return (
      <div>
        <div className="reactRibbon" ref={div => (this.reactRibbon = div)}>
          <h2>This website was built with React</h2>
          <a
            href="https://github.com/mansim123/react-website"
            target="_blank"
          >
            See Github Repo here
          </a>
        </div>
      </div>
    );
  }
}

export default Ribbon;
