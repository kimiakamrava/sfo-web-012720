import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';

import './index.css';
import './App.css';
import logo from './logo.svg';

const initialState = { count: 0 };

const reducer = (oldState, action) => {
  // action is a plain JS object
  // This is our set of rules on how our state changes

  switch(action.type) {
    case 'UPDATE':
      return { count: oldState.count + action.amount };
    // case 'INCREMENT':
    //   return { count: oldState.count + 1 };
    // case 'DECREMENT':
    //   return { count: oldState.count - 1 };
    default:
      return oldState
  }
};

const store = createStore(reducer, initialState);

class App extends Component {
  componentDidMount() {
    store.subscribe(() => this.forceUpdate())
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
    return `The current count is less than ${store.getState().count + upToNext}`;
  };

  render() {
    return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">{this.renderDescription()}</h1>
      </header>
    );
  }
}

class Counter extends Component {
  increment = () => {
    store.dispatch({ type: 'UPDATE', amount: 1 });
    // store.dispatch({ type: 'INCREMENT' });
  };

  decrement = () => {
    store.dispatch({ type: 'UPDATE', amount: -1 });
    // store.dispatch({ type: 'DECREMENT' });
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

ReactDOM.render(<App />, document.getElementById('root'));
