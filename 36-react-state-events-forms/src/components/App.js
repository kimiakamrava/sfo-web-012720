import React, { Component } from 'react';

import RecipeList from './RecipeList';
import RecipeForm from './RecipeForm';

class App extends Component {
  state = {
    recipes: ['Pizza', 'Pasta', 'Tacos']
  };

  addRecipe = recipeName => {
    this.setState({
      recipes: [...this.state.recipes, recipeName]
    });

    // this.setState((state, props) => ({
    //   recipes: [...state.recipes, recipeName]
    // }));
  };

  render() {
    return (
      <div>
        <h1>Recipe List</h1>
        <RecipeList recipes={this.state.recipes} />
        <RecipeForm addRecipe={this.addRecipe} />
        {/* <button onClick={() => this.addRecipe('Pasta')}>Click to add recipe</button> */}
      </div>
    );
  }
}

export default App;
