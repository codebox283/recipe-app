import React, { useEffect, useState } from 'react';
import { fetchFavorites } from '../api';

const Favorites: React.FC = () => {
  const [favorites, setFavorites] = useState<any[]>([]);

  useEffect(() => {
    const getFavorites = async () => {
      const response = await fetchFavorites();
      setFavorites(response.data);
    };

    getFavorites();
  }, []);

  if (favorites.length === 0) {
    return <div>No favorites yet!</div>;
  }

  return (
    <div>
      <h1>Your Favorites</h1>
      {favorites.map((favorite) => (
        <div key={favorite.attributes_id}>
          <h2>{favorite.name}</h2>
          <img src={favorite.image} alt={favorite.name} />
          <p>Cooking Time: {favorite.cookingTime} minutes</p>
          <p>Serves: {favorite.serves}</p>
          <p>Category: {favorite.category}</p>
        </div>
      ))}
    </div>
  );
};

export default Favorites;
