import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    counter: 0
  };
  render() {
    return (
      <div data-test="component-app" className="App">
        <h1 data-test="counter-display">
          The counter is currently {this.state.counter}
        </h1>
        <button
          onClick={() => this.setState({ counter: this.state.counter + 1 })}
          data-test="increment-button"
        >
          Increment counter
        </button>
      </div>
    );
  }
}

export default App;
