import React, { Component, Fragment } from 'react';

export default class HogTile extends Component {
  state = {
    clicked: false,
  };

  clickFunction = () => {
    // this.setState({ clicked: this.state.clicked === true ? false : true })
    this.setState({ clicked: !this.state.clicked });
  };

  getImage = (hogName) => {
    let imageSlug = hogName.split(' ').join('_').toLowerCase();
    let hogImage = require(`../hog-imgs/${imageSlug}.jpg`);

    return hogImage;
  };

  render() {
    const { specialty, greased, weight, name } = this.props.hog;

    return (
      <div className="ui card" onClick={this.props.hogTileClick}>
        {this.state.clicked ? (
          <Fragment>
            <p>Specialty: {specialty}</p>
            <p>Greased: {greased.toString()}</p>
            <p>Weight: {weight}</p>
          </Fragment>
        ) : (
          <Fragment>
            <h1>{name}</h1>
            <img src={this.getImage(name)} alt={`pig-image-${name}`} />
          </Fragment>
        )}
      </div>
    );
  }
}
