import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import data from '../data.json'; // Adjust the path if needed

const RecipeDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const fetchedRecipe = data.find(recipe => recipe.id === parseInt(id));
    setRecipe(fetchedRecipe);
  }, [id]);

  if (!recipe) return <div>Loading...</div>;

  return (
    <div className="w-screen min-h-screen bg-gray-100 p-6">
      <button
        onClick={() => navigate('/')}
        className="mb-4 text-blue-500 hover:underline"
      >
        &larr; Back to Home
      </button>
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-64 object-cover"
        />
        <div className="p-6">
          <h1 className="text-4xl font-bold mb-4">{recipe.title}</h1>
          <p className="text-gray-700 mb-4">{recipe.summary}</p>
          <div className="mb-6">
            <h2 className="text-2xl font-semibold mb-2">Ingredients</h2>
            <ul className="list-disc list-inside text-gray-700">
              {recipe.ingredients ? recipe.ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              )) : <li>No ingredients listed.</li>}
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-2">Instructions</h2>
            <ol className="list-decimal list-inside text-gray-700">
              {recipe.instructions ? recipe.instructions.map((step, index) => (
                <li key={index}>{step}</li>
              )) : <li>No instructions listed.</li>}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;
