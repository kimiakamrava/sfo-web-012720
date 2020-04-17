import React, { Component } from 'react';
import { connect } from 'react-redux';

class Counter extends Component {
  increment = () => {
    // this.props.increment();
    this.props.updateCount(5);
  };

  decrement = () => {
    this.props.updateCount(-5);
  };

  render() {
    return (
      <div className="Counter">
        <h1>{this.props.count}</h1>
        <button onClick={this.decrement}> - </button>
        <button onClick={this.increment}> + </button>
      </div>
    );
  }
}

const mapReduxStateToPropsOfThisComponent = (state) => {
  return {
    count: state.count,
  };
};

const mapDispatchToProps = (dispatch) => {
  // return {
  //   increment: function () {
  //     return dispatch({ type: 'INCREMENT' });
  //   },
  // };

  return {
    increment: () => dispatch({ type: 'INCREMENT' }),
    updateCount: (amount) => dispatch({ type: 'UPDATE', amount: amount }),
  };
};

export default connect(mapReduxStateToPropsOfThisComponent, mapDispatchToProps)(Counter);
