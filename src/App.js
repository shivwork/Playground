import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  componentDidMount() {
    const add = (one, two) => {
      const a = one + two;
      return a;
    };

    (() => {
      const a = "sdfdsf";
      console.log("parent : ->");
      add(1, 2);
    })();
  }
  render() {
    return (
      <div className="App">
        <button id="shivBtn">shiv</button>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
