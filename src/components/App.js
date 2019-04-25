import React from 'react';
import '../css/App.scss';
import MyForm from "./form";
import PreLodader from "../components/preLoader"

class App extends React.Component{
  constructor(){
      super();
      this.state = {
        loading: true,
        loadingTime: 200,
        loadingText: "loading..."
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
          <PreLodader loadingText={this.state.loadingText}></PreLodader>
        </div>
      );
    }
    return (
      <div className="App">
        <MyForm />
      </div>
    );
  }
}



export default App;
