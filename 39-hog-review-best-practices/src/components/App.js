import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav';
import hogs from '../porkers_data';
import HogsList from './HogsList';
import Filter from './Filter';
import GreasedHogs from './GreasedHogs';

class App extends Component {
  state = {
    hogs: hogs,
    greased: false,
  };

  toggleGreased = () => {
    if (this.state.greased) {
      this.setState({
        hogs: hogs,
        greased: false,
      });
    } else {
      // this.setState({
      //   hogs: this.state.hogs.filter((hog) => hog.greased),
      //   greased: true,
      // });

      this.setState((prevState) => {
        return {
          hogs: prevState.hogs.filter((hog) => hog.greased),
          greased: true,
        };
      });
    }
  };

  logPig = () => {
    console.log('this is rendered through the hoglist component');
  };

  logGreasedPig = () => {
    console.log('this is rendered through the greasedhogs component');
  };

  render() {
    return (
      <div className="ui grid container">
        <Nav />
        <Filter toggleGreased={this.toggleGreased} />
        {this.state.greased ? (
          <GreasedHogs hogs={this.state.hogs} logGreasedPig={this.logGreasedPig} />
        ) : (
          <HogsList hogs={this.state.hogs} logPig={this.logPig} />
        )}
      </div>
    );
  }
}

export default App;
