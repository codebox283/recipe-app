import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchRecipes } from '../api';

interface Recipe {
  attributes_id: string;
  name: string;
  image: string;
  category: 'veg' | 'nonveg';
}

const RecipeList: React.FC = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);

  useEffect(() => {
    const getRecipes = async () => {
      const response = await fetchRecipes();
      setRecipes(response.data);
    };

    getRecipes();
  }, []);

  return (
    <div>
      <h1>Recipes</h1>
      {recipes.map(recipe => (
        <div key={recipe.attributes_id}>
          <Link to={`/details/${recipe.attributes_id}`}>
            <img src={recipe.image} alt={recipe.name} />
            <h2>{recipe.name}</h2>
            <p>Category: {recipe.category}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
