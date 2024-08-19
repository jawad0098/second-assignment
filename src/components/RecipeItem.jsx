import React from 'react';

function RecipeItem({ recipe }) {
  return (
    <div>
      <h2>{recipe.name}</h2>
      <p>{recipe.description}</p>
    </div>
  );
}

export default RecipeItem;
