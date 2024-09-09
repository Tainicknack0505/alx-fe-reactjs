import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const AddRecipeForm = () => {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      // Submit form data
      console.log({ title, ingredients, steps });
    } else {
      setErrors(validationErrors);
    }
  };

  const validateForm = () => {
    const errors = {};
    if (!title) errors.title = "Title is required";
    if (!ingredients) errors.ingredients = "Ingredients are required";
    if (!steps) errors.steps = "Preparation steps are required";
    if (ingredients.split(",").length < 2)
      errors.ingredients = "Please include at least two ingredients";
    return errors;
  };

  return (
    <div className="flex items-center justify-center w-screen min-h-screen bg-gray-200">
      <form
        onSubmit={handleSubmit}
        className="max-w-lg w-full p-6 bg-white shadow-lg rounded-lg"
      >
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="title"
          >
            Recipe Title
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          {errors.title && (
            <p className="text-red-500 text-xs italic">{errors.title}</p>
          )}
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="ingredients"
          >
            Ingredients (comma separated)
          </label>
          <textarea
            id="ingredients"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          {errors.ingredients && (
            <p className="text-red-500 text-xs italic">{errors.ingredients}</p>
          )}
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="steps"
          >
            Preparation Steps
          </label>
          <textarea
            id="steps"
            value={steps}
            onChange={(e) => setSteps(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          {errors.steps && (
            <p className="text-red-500 text-xs italic">{errors.steps}</p>
          )}
        </div>
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Submit
          </button>
          <button
            onClick={() => navigate("/")}
            className="mb-4 text-blue-500 hover:underline"
          >
            &larr; Back to Home
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddRecipeForm;
