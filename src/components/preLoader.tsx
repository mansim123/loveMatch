import * as React from "react";
import "../css/PreLoader.css";
import { TweenMax } from "gsap";

interface IAppProps {}
interface IAppState {
  heartAnimate?: boolean;
  heartArray?: object;
}

class preLodaer extends React.Component<{}, IAppState> {
  constructor(props: IAppState) {
    super(props);

    this.heart = null;
    this.heartBg1 = null;
    this.heartBg2 = null;
    this.heartBg3 = null;
    this.heartBg4 = null;

    this.t = null;

    this.state = {
      heartAnimate: true,
      heartArray: []
    };

    //this.animateHeart = this.animateHeart.bind(this);
    this.animateHeartBg = this.animateHeartBg.bind(this);
  }

  heart: HTMLDivElement | any;
  heartBg1: HTMLDivElement | any;
  heartBg2: HTMLDivElement | any;
  heartBg3: HTMLDivElement | any;
  heartBg4: HTMLDivElement | any;
  t: ReturnType<typeof TweenMax.to> | any;

  componentDidMount() {
    const heartBackgrounds = [
      this.heartBg1,
      this.heartBg2,
      this.heartBg3,
      this.heartBg4
    ];

    //this.t = TweenMax.to(myHeartsBg[0], 0, { scale: 1.5 });
    //console.log(this.state.heartArray)

    for (let i = 0; i < heartBackgrounds.length; i++) {
      this.t = TweenMax.to(heartBackgrounds[i], 0, { scale: 0.75 });
    }

    this.animateHeartBg(heartBackgrounds, 0);
  }

  animateHeartBg(whichBg: Array<object>, b: number) {
    this.t = TweenMax.to(whichBg[b], 0, { scale: 0.75 });
    this.t = TweenMax.to(whichBg[b], 1.5, { delay: 0.25, scale: 15 });

    this.t = TweenMax.to(this.heart, 0, { scale: 0.75 });
    this.t = TweenMax.to(this.heart, 0.5, { delay: 0.25, scale: 1 });
    this.t = TweenMax.to(this.heart, 0.25, { delay: 0.5, scale: 0.75 });

    b++;

    if (b < 4) {
      this.t = TweenMax.delayedCall(1, this.animateHeartBg, [whichBg, b]);
    }
  }
  // animateHeart() {

  // }

  // animateHeartBg(whichStep: number) {
  //   console.log(this.state.exampleArray);
  //   if (this.state.heartAnimate == false) {
  //     switch (whichStep) {
  //       case 0:
  //         console.log(this.heartBg1);
  //         this.t = TweenMax.to(this.heartBg1, 0, { scale: 0.75 });
  //         this.t = TweenMax.to(this.heartBg1, 1, { delay: 0.25, scale: 15 });
  //         this.animateHeart();
  //         this.t = TweenMax.delayedCall(2, this.animateHeart, [1]);
  //         break;
  //       case 1:
  //         this.t = TweenMax.to(this.heartBg2, 0, { scale: 0.75 });
  //         this.t = TweenMax.to(this.heartBg2, 1, { delay: 0.25, scale: 15 });
  //         this.animateHeart();
  //         break;
  //     }

  //     // this.t = TweenMax.delayedCall(2, this.animateHeart);
  //   }
  // }

  render() {
    return (
      <div>
        <div className="loadingGif">
          <div className="heart" ref={e => (this.heart = e)} />
          <div className="heartBg1" ref={e => (this.heartBg1 = e)} />
          <div className="heartBg2" ref={e => (this.heartBg2 = e)} />
          <div className="heartBg3" ref={e => (this.heartBg3 = e)} />
          <div className="heartBg4" ref={e => (this.heartBg4 = e)} />
        </div>
      </div>
    );
  }
}

export default preLodaer;
