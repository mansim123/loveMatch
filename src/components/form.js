import React from 'react';
import axios from 'axios'
import PreLodader from "../components/preLoader"

class Form extends React.Component {
  constructor(props) {
    super();
    this.state = {
      firstName: "",
      secondName: ""
    };
  }

  handleSubmit(e) {
    e.preventDefault();

    // let headers = {
    //   'X-RapidAPI-Host': "love-calculator.p.rapidapi.com",
    //   'X-RapidAPI-Key': "36f157f25amsh8e948fed8f46962p116379jsne2308a7d5a93"
    // }

    // // Make a request for a user with a given ID
    // axios.get('https://love-calculator.p.rapidapi.com/getPercentage?fname=John&sname=Alice', { headers: headers })
    //   .then(function (response) {
    //     // handle success
    //     console.log(response);
    //   })
    //   .catch(function (error) {
    //     // handle error
    //     console.log(error);
    //   })
    //   .then(function () {
    //     // always executed
    //   });

    // this.setState({
    //   firstName: "",
    //   secondName: ""
    // });
  }

  render() {
    console.log(this.state);
    return (
      <div>
        <h1>React typescript todo list</h1>
        <form onSubmit={e => this.handleSubmit(e)}>
          <input
            type="text"
            placeholder="add first name"
            onChange={e => this.setState({ firstName: e.target.value })}
          />
          <input
            type="text"
            placeholder="add second name"
            onChange={e => this.setState({ secondName: e.target.value })}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default Form;