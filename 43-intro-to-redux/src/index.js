import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import logo from "./logo.svg";
import "./App.css";
import { createStore } from "redux";

const initialState = { count: 0 };

const reducer = (oldState, action) => {
  console.log("oldState", oldState, "action", action);

  switch (action.type) {
    case "UPDATE":
      return { ...oldState, count: oldState.count + action.amount };
    case "INCREMENT":
      return { ...oldState, count: oldState.count + 1 };
    // case "DECREMENT":
    //   return { ...oldState, count: oldState.count - 1 };
    default:
      return oldState;
  }
};

const store = createStore(reducer, initialState);

class App extends Component {
  // state = { count: 0 };
  componentDidMount() {
    store.subscribe(() => this.forceUpdate());
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Counter />
      </div>
    );
  }
}

class Header extends Component {
  renderDescription = () => {
    const remainder = store.getState().count % 5;
    const upToNext = 5 - remainder;
    return `The current count is less than ${store.getState().count +
      upToNext}`;
  };

  render() {
    return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to React</h1>
        <h3>{this.renderDescription()}</h3>
      </header>
    );
  }
}

class Counter extends Component {
  increment = () => {
    // this.setState(prevState => ({ count: prevState.count + 1 }));
    store.dispatch({ type: "UPDATE", amount: 5 });
  };

  decrement = () => {
    // this.setState(prevState => ({ count: prevState.count - 1 }));
    // store.dispatch({ type: "DECREMENT" });
    store.dispatch({ type: "UPDATE", amount: -3 });
  };

  render() {
    return (
      <div className="Counter">
        <h1>{store.getState().count}</h1>
        <button onClick={this.decrement}> - </button>
        <button onClick={this.increment}> + </button>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
