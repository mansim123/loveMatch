import * as React from "react";
import "../css/PreLoader.scss";
import { TweenMax } from "gsap";

class preLodaer extends React.Component {
  constructor(props) {
    super();

    this.state = {
      loadingText: props.loadingText
    }

    this.heart = null;
    this.loadingCopy = null;
    this.heartBg1 = null;
    this.heartBg2 = null;
    this.heartBg3 = null;
    this.heartBg4 = null;

    this.t = null;

    this.animateHeartBg = this.animateHeartBg.bind(this);
  }

  componentDidMount() {
    document.body.style.overflow = "hidden";
    let heartBackgrounds = [
      this.heartBg1,
      this.heartBg2,
      this.heartBg3,
      this.heartBg4
    ];

    for (let i of heartBackgrounds) {

      this.t = TweenMax.to(heartBackgrounds, 0, { scale: 0.75 });
      
    }

    this.t = TweenMax.to(this.heart, 0, { scale: 0.75 });
    this.t = TweenMax.to(this.loadingCopy, 0, { scale: 200,alpha:0 });

    this.t = TweenMax.delayedCall(0, this.animateHeartBg, [heartBackgrounds, 0]);
  }

  componentWillUnmount() {
    document.body.style.overflow = "visible";
    this.t = TweenMax.killAll(false, false, true, false);
  }

  animateHeartBg(whichBg, b) {

    this.t = TweenMax.to(this.loadingCopy, 1, { scale: 1, alpha: 1, ease: "Powers3.easeOut"});

    this.t = TweenMax.to(whichBg[b], 0, { scale: 0.75 });
    this.t = TweenMax.to(whichBg[b], 0.5, { delay: 0.25, scale: 15 , onComplete(){
    }});

    this.t = TweenMax.to(this.heart, 0, { scale: 0.75 });
    this.t = TweenMax.to(this.heart, 0.5, { delay: 0.25, scale: 1 });
    this.t = TweenMax.to(this.heart, 0.25, { delay: 0.5, scale: 0.75 });

    b++;
    let c = b - 1;
    let d = [whichBg,b]

      if (b < 4) {
        this.t = TweenMax.delayedCall(1.5, this.animateHeartBg, [...d]);
        this.t = TweenMax.to(whichBg[c], 0.25, { delay: 1.5, css: { zIndex: 99 } });
        this.t = TweenMax.to(whichBg[c], 0.25, { delay: 1.5, scale: 0.75 });
      }
      else{
        d[1] = 0;
        this.t = TweenMax.delayedCall(1.5, this.animateHeartBg, [...d]);
        this.t = TweenMax.to(whichBg[c], 0.25, { delay: 1.5, css: { zIndex: 99 } });
        this.t = TweenMax.to(whichBg[c], 0.25, { delay: 1.5, scale: 0.75 });

      }
  }

  render() {
    return (
      <div className="loadingCont">
        <div className="loadingGif">
          <div className="heart" ref={e => (this.heart = e)} />
          <div className="heartBg1" ref={e => (this.heartBg1 = e)} />
          <div className="heartBg2" ref={e => (this.heartBg2 = e)} />
          <div className="heartBg3" ref={e => (this.heartBg3 = e)} />
          <div className="heartBg4" ref={e => (this.heartBg4 = e)} />
          <h1 ref={e => (this.loadingCopy = e)}>{this.state.loadingText}</h1>
        </div>
      </div>
    );
  }
}

export default preLodaer;
