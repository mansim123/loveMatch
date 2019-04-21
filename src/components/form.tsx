import * as React from "react";

class Form extends React.Component<{}, IState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      firstName: "",
      secondName: ""
    };
  }
  handleSubmit(e: any) {
    e.preventDefault();

    console.log(this);

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

interface IState {
  firstName: string;
  secondName: string;
}

export default Form;
