/* This is example code for explanation purposes only!
It will not render anything! */
import * as React from "react";
import * as ReactDOM from "react-dom";

export class Clock extends React.Component {
  // constructor(props) {
  //   super(props); // We need this as a derived class
  //   /* If we have a constructor, 
  //   we need to be initializing something here */
  // }

  myFunctionHere() {
    /* This is optional, and we can define
      as many functions as we need, or override
      a function from our base class! */
  }

  // This is a required function that should
  // say what the desired HTML should look like
  render() {
    return (
      // TODO our "HTML" goes here
      <div>
        <h1>Hello World</h1>
        <h2>It is {this.props.time}</h2>
        
      </div>
    );
  }
}
