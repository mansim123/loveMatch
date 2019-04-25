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
    this.heartBg1 = null;
    this.heartBg2 = null;
    this.heartBg3 = null;
    this.heartBg4 = null;

    this.t = null;

    //this.animateHeart = this.animateHeart.bind(this);
    this.animateHeartBg = this.animateHeartBg.bind(this);
  }

  componentDidMount() {
    const heartBackgrounds = [
      this.heartBg1,
      this.heartBg2,
      this.heartBg3,
      this.heartBg4
    ];

    for (let i = 0; i < heartBackgrounds.length; i++) {
      this.t = TweenMax.to(heartBackgrounds[i], 0, { scale: 0.75 });
    }

    this.t = TweenMax.to(this.heart, 0, { scale: 0.75 });

    this.t = TweenMax.delayedCall(0, this.animateHeartBg, [heartBackgrounds, 0]);
  }

  componentWillUnmount() {
    this.t = TweenMax.killAll();
  }

  animateHeartBg(whichBg, b) {

    this.t = TweenMax.to(whichBg[b], 0, { scale: 0.75 });
    this.t = TweenMax.to(whichBg[b], 0.5, { delay: 0.25, scale: 15 , onComplete(){
    }});

    this.t = TweenMax.to(this.heart, 0, { scale: 0.75 });
    this.t = TweenMax.to(this.heart, 0.5, { delay: 0.25, scale: 1 });
    this.t = TweenMax.to(this.heart, 0.25, { delay: 0.5, scale: 0.75 });

    b++;
    var c = b - 1;

      if (b < 4) {
        
        this.t = TweenMax.delayedCall(1.5, this.animateHeartBg, [whichBg, b]);
        this.t = TweenMax.to(whichBg[c], 0.25, { delay: 1.5, css: { zIndex: 99 } });
        this.t = TweenMax.to(whichBg[c], 0.25, { delay: 1.5, scale: 0.75 });
      }
      else{
        b = 0;
        this.t = TweenMax.delayedCall(1.5, this.animateHeartBg, [whichBg, b]);
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
          <h1>{this.state.loadingText}</h1>
        </div>
      </div>
    );
  }
}

export default preLodaer;
