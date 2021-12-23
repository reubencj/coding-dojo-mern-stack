import React, { Component } from "react";

class BirthdayList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      JaneAge: 45,
      JohnAge: 88,
    };
  }

  render() {
    return (
      <div>
        <div>
          <h1>Doe, Jane</h1>
          <p>Age: {this.state.JaneAge}</p>
          <p>hair color: Black</p>
          <button
            onClick={() => this.setState({ JaneAge: this.state.JaneAge + 1 })}
          >
            Birthday Button for Jane
          </button>
        </div>
        <div>
          <h1>Smith, John</h1>
          <p>Age: {this.state.JohnAge}</p>
          <p>hair color: Brown</p>
          <button
            onClick={() => this.setState({ JohnAge: this.state.JohnAge + 1 })}
          >
            Birthday Button for Jane
          </button>
        </div>
      </div>
    );
  }
}

export default BirthdayList;
