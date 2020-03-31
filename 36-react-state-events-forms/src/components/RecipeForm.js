import React, { Component } from 'react';

class RecipeForm extends Component {
  state = {
    recipeName: ''
  };

  handleChange = e => {
    this.setState({
      recipeName: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    console.log(this.state.recipeName);
    this.setState({ recipeName: '' });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Recipe Name"
            onChange={this.handleChange}
            value={this.state.recipeName}
          />
          <input type="submit" value="Create Recipe" />
        </form>
      </div>
    );
  }
}

export default RecipeForm;
