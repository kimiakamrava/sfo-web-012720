import React from "react";

import Recipe from "./Recipe";

function RecipeList() {
  const recipes = ["Salami Pizza", "Spaghetti", "Potatoes"];

  return (
    <ul>
      {recipes.map(recipeName => (
        <Recipe recipe={recipeName} anotherProp="Potato" />
      ))}
    </ul>
  );
}

export default RecipeList;
