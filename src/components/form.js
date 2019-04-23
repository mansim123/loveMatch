import React from 'react';

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