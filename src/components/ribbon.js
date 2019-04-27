import React, { Component } from 'react'
import '../css/ribbon.scss'
import { TweenMax } from "gsap/TweenMax";

export class Ribbon extends Component {

  componentDidMount() {
    this.myTween = TweenMax.to(this.reactRibbon, 0.75, { y: "125", ease: "Sine.easeInOut" });
  }

  render() {
    // reference to the DOM node
    this.percentBars = null;
    // reference to the animation
    this.myTween = null;

    return (
      <div>
        <div className="reactRibbon" ref={div => (this.reactRibbon = div)}>
          <h4>This website was built with React</h4>
          <a
            href="https://github.com/mansim123/loveMatch/"
            target="_blank"
            rel="noopener noreferrer"
          >
            See Github Repo here
          </a>
        </div>
      </div>
    );
  }
}

export default Ribbon;
