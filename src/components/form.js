import React from "react";
import axios from "axios";
import PreLodader from "../components/preLoader";
import Ribbon from "../components/ribbon";
import Results from "../components/results";
import "../css/form.scss";
import { Button, Container, Form, Row } from "react-bootstrap";
import { TweenMax } from "gsap";

class MyForm extends React.Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      secondName: "",
      showLoading: false,
      showResults: false,
      showForm: true,
      loadingText: "finding your stats...",
      topLine: "Enter your details below to find out your compatablity!",
      topLineColor: "white",
      returnData: [],
      errors: {
        firstName: "",
        secondName: ""
      }
    };

    this.loveText = null;
    this.t = null;

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  componentDidMount() {
    this.animatePage();
  }

  validateInputs() {
    let formIsValid = true;
    let errors = {};

    if (!this.state.firstName || this.state.firstName.length < 3) {
      errors.firstName = "* First name needs to be minimum 3 characters long";
      // errors.outlineName = redBorder
      formIsValid = false;
    } else {
      // errors.name = ""
      // errors.outlineName = normalBorder
    }

    if (!this.state.secondName || this.state.secondName.length < 3) {
      errors.secondName = "* Second name needs to be minimum 3 characters long";
      // errors.outlineName = redBorder
      formIsValid = false;
    } else {
      // errors.name = ""
      // errors.outlineName = normalBorder
    }

    console.log(this.handleForm);

    this.setState({
      errors: errors
    });

    return formIsValid;
  }

  handleSubmit(e) {
    e.preventDefault();

    if (!this.validateInputs()) {
      return;
    }

    let formThis = this;

    this.setState({
      showLoading: true,
      showForm: false
    });

    let headers = {
      "X-RapidAPI-Host": "love-calculator.p.rapidapi.com",
      "X-RapidAPI-Key": "36f157f25amsh8e948fed8f46962p116379jsne2308a7d5a93"
    };

    let fName = this.state.firstName;
    let lName = this.state.secondName;

    // Make a request for a user with a given ID
    axios
      .get(
        `https://love-calculator.p.rapidapi.com/getPercentage?fname=${fName}&sname=${lName}`,
        { headers: headers }
      )
      .then(response => {
        this.setState({ returnData: response.data });

        setTimeout(function() {
          formThis.setState({
            showLoading: false,
            showResults: true,
            topLineColor: "white",
            topLine: "See your results below!"
          });
        }, 3000);
      })
      .catch(function(error) {
        // handle error
        console.log(error);
        formThis.setState({
          showLoading: false,
          showResults: false,
          showForm: true,
          topLineColor: "#efff00",
          topLine: "Something went wrong, can you submit again please?"
        });
      })
      .then(function() {
        // always executed
      });

    this.setState({
      firstName: "",
      secondName: ""
    });
  }

  handleReset(e) {
    e.preventDefault();

    let resetState = this;

    resetState.setState({
      showLoading: true,
      showResults: false,
      showForm: true,
      loadingText: "loading..."
    });

    setTimeout(function() {
      resetState.setState({
        showLoading: false
      });
    }, 3000);
  }

  animatePage() {
    let speed = 0.2; //seconds
    this.t = TweenMax.to(this.loveText, 1, {
      scale: 0.9,
      ease: "Elastic.easeOut",
      z: 0.1,
      rotationZ: 0.01,
      force3D: true,
      repeat: -1,
      repeatDelay: speed
    });
  }

  render() {
    let errorLine = {
      color: this.state.topLineColor
    };
    let errorsStyle = {
      fontSize: "20px",
      textAlign: "left",
      color: "#edff00",
      fontWeight: "bold"
    };

    return (
      <div>
        <Container className="formInfo">
          <Row className="rowTop">
            <h1 className="loveText" ref={e => (this.loveText = e)}>
              LOVE MATCH
            </h1>
          </Row>
          <Row>
            <h3 style={errorLine}>{this.state.topLine}</h3>
          </Row>
          <Ribbon />
        </Container>
        {this.state.showForm && (
          <div>
            <Form onSubmit={e => this.handleSubmit(e)}>
              <Container>
                <Form.Group>
                  <Form.Label className="inputName">
                    Please enter person number one!
                  </Form.Label>
                  <Form.Control
                    size="lg"
                    type="text"
                    placeholder="Add first name"
                    onChange={e => this.setState({ firstName: e.target.value })}
                  />
                  <p style={errorsStyle}>{this.state.errors.firstName}</p>
                </Form.Group>
                <Form.Group>
                  <Form.Label className="inputName">
                    Please enter person number two!
                  </Form.Label>
                  <Form.Control
                    size="lg"
                    type="text"
                    placeholder="Add Second name"
                    onChange={e =>
                      this.setState({ secondName: e.target.value })
                    }
                  />
                  <p style={errorsStyle}>{this.state.errors.secondName}</p>
                </Form.Group>
                <Button
                  className="formBtn"
                  type="submit"
                  size="lg"
                  variant="primary"
                >
                  Test our match!
                </Button>
              </Container>
            </Form>
          </div>
        )}
        {this.state.showLoading && (
          <PreLodader loadingText={this.state.loadingText} />
        )}
        {this.state.showResults && (
          <Container>
            <div>
              <Results props={this.state.returnData} />
              <Button
                className="formBtn"
                size="lg"
                variant="success"
                onClick={e => this.handleReset(e)}
              >
                Enter New Names
              </Button>
            </div>
          </Container>
        )}
      </div>
    );
  }
}

export default MyForm;
