import React from "react";
import axios from "axios";
import PreLodader from "../components/preLoader";
import Ribbon from "../components/ribbon";
import Results from "../components/results";
import "../css/form.scss";
import { Button, Container, Form, Row } from "react-bootstrap";

class MyForm extends React.Component {
  constructor(props) {
    super();
    this.state = {
      firstName: "",
      secondName: "",
      showLoading: false,
      showResults: false,
      loadingText: "finding your stats...",
      returnData: []
    };
  }

  handleSubmit(e) {
    e.preventDefault();

    this.setState({
      showLoading: true
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
        "https://love-calculator.p.rapidapi.com/getPercentage?fname=" +
          fName +
          "&sname=" +
          lName +
          "",
        { headers: headers }
      )
      .then(response => {
        this.setState({ returnData: response.data });

        setTimeout(
          function() {
            this.setState({ showLoading: false });
            this.setState({ showResults: true });
          }.bind(this),
          3000
        );
      })
      .catch(function(error) {
        // handle error
        console.log(error);
      })
      .then(function() {
        // always executed
      });

    this.setState({
      firstName: "",
      secondName: ""
    });
  }

  render() {
    console.log(this.state);
    return (
      <div>
        <Container className="formInfo">
          <Row className="rowTop">
            <h1>LOVE MATCH</h1>
          </Row>
          <Row>
            <h2>Enter your details below to find out your compatablity!</h2>
          </Row>
          <Ribbon />
        </Container>
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
            </Form.Group>
            <Button type="submit" size="lg" color="primary">
              Submit
            </Button>
          </Container>
        </Form>
        {this.state.showLoading && (
          <PreLodader loadingText={this.state.loadingText} />
        )}
        {this.state.showResults && (
          <Results props={this.state.returnData} />
        )}
      </div>
    );
  }
}

export default MyForm;
