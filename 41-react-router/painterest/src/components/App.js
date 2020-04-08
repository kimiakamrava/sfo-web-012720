import React, { Component } from 'react';
import Navbar from './Navbar';
import { Route, Switch } from 'react-router-dom';

import About from './About';
import Login from './Login';
import PaintingsContainer from './PaintingsContainer';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar
          color="green"
          title="Painterest"
          description="our app"
          icon="paint brush"
        />
        <div className="ui container grid">
          <div id="content" className="sixteen wide column"></div>
        </div>

        <Switch>
          <Route path="/signin" component={Login} />
          <Route path="/paintings" component={PaintingsContainer} />
          <Route exact path="/" component={About} />
        </Switch>
      </div>
    );
  }
}

export default App;
