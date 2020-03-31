import React, { Component } from 'react';

import RecipeList from './RecipeList';
import RecipeForm from './RecipeForm';
// import { RecipeList, RecipeList2 } from './RecipeList';

class App extends Component {
  // constructor() {
  //   super();

  //   this.state = { recipes: ['Eggs', 'Zebra Cakes', 'In n out'] };
  //   this.addRecipe = this.addRecipe.bind(this);
  // }

  state = { recipes: ['Eggs', 'Zebra Cakes', 'In n out'] };

  addRecipe = recipeName => {
    this.setState({
      recipes: [...this.state.recipes, recipeName]
    });
  };

  render() {
    // const recipes = ['Eggs', 'Zebra Cakes', 'In n out'];

    return (
      <div>
        <h1>Recipe List</h1>
        <RecipeList recipes={this.state.recipes} />
        <RecipeForm />
        {/* <button onClick={this.addRecipe}>Add new recipe</button> */}
      </div>
    );
  }
}

export default App;
