import React from 'react';

import Recipe from './Recipe';

function RecipeList(props) {
  // const { recipes } = props;

  return (
    <div>
      {props.recipes.map((recipe, index) => (
        <Recipe key={index} recipe={recipe} />
      ))}

      {/* {recipes.map(function(recipe, index) {
        return <Recipe key={index} recipe={recipe} />;
      })} */}
    </div>
  );
}

// export { RecipeList, RecipeList2 };
export default RecipeList;
