import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import data from "../data.json";

const HomePage = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    // Load recipe data from the JSON file
    setRecipes(data);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold text-center mb-6">
        Recipe Sharing Platform
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
        {recipes.map((recipe) => (
          <Link
            key={recipe.id}
            to={`/recipe/${recipe.id}`}
            className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <img
              src={recipe.image}
              alt={recipe.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{recipe.title}</h2>
              <p className="text-gray-700">{recipe.summary}</p>
            </div>
          </Link>
        ))}
      </div>
      <div className="text-center mb-6 mt-8">
        <Link
          to="/add-recipe"
          className="inline-block bg-indigo-600 text-white py-2 px-4 rounded-md shadow-sm hover:bg-indigo-700"
        >
          Add New Recipe
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
