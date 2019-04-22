import React, { Component } from "react";
import logo from "../img/logo.svg";
import "../css/App.css";
import Form from "../components/form";
import PreLodader from "../components/preLoader"

class App extends Component {
  state = {
    loading: true
  };

  componentDidMount() {
    demoAsyncCall().then(() => this.setState({ loading: false }));
  }

  render() {
    const { loading } = this.state;
    if (loading) {
      return (
        <div>
          <PreLodader></PreLodader>
        </div>
      );
    }
    return (
      <div className="App">
          <Form />
        </div>
    )
  }
}

function demoAsyncCall() {
  return new Promise(resolve => setTimeout(() => resolve(), 100000));
}

export default App;
