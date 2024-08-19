import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from './Card';
import { Link } from 'react-router-dom';

const RecipeList = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    axios.get('https://dummyjson.com/recipes')
      .then(res => setRecipes(res.data.recipes));
  }, []);

  return (
    <div className="grid-container ">
      {recipes.map(recipe => (
        <Link to={`/recipe/${recipe.id}`} key={recipe.id} style={{ textDecoration: 'none' }}>
          <Card
            title={recipe.name}
            description={recipe.description}
            imageUrl={recipe.image || 'https://via.placeholder.com/300'}
          />
        </Link>
      ))}
    </div>
  );
};

export default RecipeList;
