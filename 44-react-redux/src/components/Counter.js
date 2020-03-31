import React, { Component } from "react";
import { connect } from "react-redux";

class Counter extends Component {
  increment = () => {
    // store.dispatch({ type: "UPDATE", amount: 1 });
    this.props.update(1);
  };

  decrement = () => {
    // store.dispatch({ type: "UPDATE", amount: -1 });
    this.props.update(-1);
  };

  render() {
    return (
      <div className="Counter">
        <h1>{this.props.count && this.props.count.number}</h1>
        <h2>{this.props.text}</h2>
        <button onClick={this.decrement}> - </button>
        <button onClick={this.increment}> + </button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { count: state.count, text: state.text };
};

const mapDispatchToProps = dispatch => {
  return { update: amount => dispatch({ type: "UPDATE", amount: amount }) };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
