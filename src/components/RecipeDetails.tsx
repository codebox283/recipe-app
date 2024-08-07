import React, { useEffect, useState } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { fetchRecipeById, addToFavorites } from '../api';

const RecipeDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const getRecipe = async () => {
      if (id) {
        console.log(`Fetching recipe with id: ${id}`); // Log the id
        try {
          const response = await fetchRecipeById(id);
          console.log('Recipe data:', response.data); // Log the recipe data
          setRecipe(response.data);
        } catch (error) {
          console.error('Failed to fetch recipe:', error);
        }
      }
    };

    getRecipe();
  }, [id]);

  if (!id) {
    return <Navigate to="/" />; // Redirect to home if id is undefined
  }

  if (!recipe) return <div>Loading...</div>;

  return (
    <div>
      <h1>{recipe.name}</h1>
      <img src={recipe.image} alt={recipe.name} />
      <p>{recipe.recipeDescription}</p>
      <p>Cooking Time: {recipe.cookingTime} minutes</p>
      <p>Serves: {recipe.serves}</p>
      <p>Category: {recipe.category}</p>
    </div>
  );
};

export default RecipeDetails;
