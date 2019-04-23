import React from 'react';
import '../css/App.css';
import Form from "./form";
import PreLodader from "../components/preLoader"

class App extends React.Component{
  constructor(){
      super();
      this.state = {
        loading: true,
        loadingTime: 4000,
      }

    }
  
  componentDidMount() {
    demoAsyncCall().then(() => this.setState({ loading: false }));
  }

    render() {
    const { loading }  = this.state;

    if (loading) {
      return (  
        <div>
          <PreLodader ></PreLodader>
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
  return new Promise(resolve => setTimeout(() => resolve(), 5000));
}

export default App;
