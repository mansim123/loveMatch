import React from 'react';
import '../css/App.css';
import Form from "./form";
import PreLodader from "../components/preLoader"

class App extends React.Component{
  constructor(){
      super();
      this.state = {
        loading: true,
        loadingTime: 1000,
      }

    this.demoAsyncCall = this.demoAsyncCall.bind(this);

    }
  
  componentDidMount() {
    this.demoAsyncCall().then(() => this.setState({ loading: false }));
  }

  demoAsyncCall() {
    return new Promise(resolve => setTimeout(() => resolve(), this.state.loadingTime));
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



export default App;
