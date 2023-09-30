import React, { Component } from "react";

class ClassComp extends Component {
  constructor() {
    //if inheritence is present - use super()
    //to capture current obj address - use this keyword
    super();
    this.state = {
      name: "jet airways",
      date: "5th oct",
      dest: "delhi",
      price: 5000,
    };
  }
  render() {
    return (
      <div>
        <h2>I am a Class Component.</h2>
        <p>I am a paragraph inside a Class component.</p>
        <h3>{this.state.name}</h3>
        <h3>{this.state.dest}</h3>
        <h3>{this.state.date}</h3>
        <h3>{this.state.price}</h3>
      </div>
    );
  }
}

export default ClassComp;
