import React from 'react';

import Recipe from './Recipe';

function RecipeList(props) {
  return (
    <div>
      <ul>
        {props.recipes.map((recipe, i) => (
          <Recipe key={i} recipe={recipe} />
        ))}
      </ul>
    </div>
  );
}

export default RecipeList;
