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
    this.props.addRecipe(this.state.recipeName);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.recipeName}
            onChange={this.handleChange}
            placeholder="Recipe Name"
          />
          <input type="submit" value="Create Recipe" />
        </form>
      </div>
    );
  }
}

export default RecipeForm;
