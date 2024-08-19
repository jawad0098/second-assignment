import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const RecipeDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState();

  useEffect(() => {
    axios.get(`https://dummyjson.com/recipes/${id}`).then(res => setRecipe(res.data));
  }, [id]);

  if (!recipe) return <p>Loading...</p>;

  return (
    
    <div className='redf'>
      <h1>{recipe.name}</h1>
      <p>{recipe.description}</p>
      <p>Ingredients: {recipe.ingredients.join(', ')}</p>
      <button className='hovew' style={buttonStyle}>Buy Now</button>
    </div>
  );
};
const buttonStyle = {
  padding: '10px 15px',
  backgroundColor: '#007bff',
  color: '#fff',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
  fontSize: '1rem',
  textAlign: 'center',
  marginTop: '10px', 
  transition:'0.5s'
};
export default RecipeDetail;