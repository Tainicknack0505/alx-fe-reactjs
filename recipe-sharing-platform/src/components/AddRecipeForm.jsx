// import React, { useState } from "react";

// const AddRecipeForm = () => {
//   const [title, setTitle] = useState("");
//   const [ingredients, setIngredients] = useState("");
//   const [steps, setSteps] = useState("");
//   const [errors, setErrors] = useState({});

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Validate form inputs
//     const newErrors = {};
//     if (!title) newErrors.title = "Title is required";
//     if (!ingredients) newErrors.ingredients = "Ingredients are required";
//     if (!steps) newErrors.instructions = "Instructions are required";

//     if (Object.keys(newErrors).length > 0) {
//       setErrors(newErrors);
//       return;
//     }

//     // Process form submission
//     const recipe = {
//       title,
//       ingredients: ingredients
//         .split("\n")
//         .map((item) => item.trim())
//         .filter((item) => item),
//       instructions: steps
//         .split("\n")
//         .map((step) => step.trim())
//         .filter((step) => step),
//     };

//     console.log("Recipe submitted:", recipe);

//     // Reset form fields
//     setTitle("");
//     setIngredients("");
//     setSteps("");
//     setErrors({});
//   };

//   return (
//     <div className="flex items-center justify-center w-screen min-h-screen bg-gray-100 p-6">
//       <div className="max-w-lg mx-auto bg-white rounded-lg shadow-lg p-6">
//         <h1 className="text-3xl font-bold mb-6">Add a New Recipe</h1>
//         <form onSubmit={handleSubmit}>
//           <div className="mb-4">
//             <label
//               htmlFor="title"
//               className="block text-sm font-medium text-gray-700"
//             >
//               Recipe Title
//             </label>
//             <input
//               id="title"
//               type="text"
//               value={title}
//               onChange={(e) => setTitle(e.target.value)}
//               className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//             />
//             {errors.title && (
//               <p className="text-red-500 text-sm mt-1">{errors.title}</p>
//             )}
//           </div>

//           <div className="mb-4">
//             <label
//               htmlFor="ingredients"
//               className="block text-sm font-medium text-gray-700"
//             >
//               Ingredients (one per line)
//             </label>
//             <textarea
//               id="ingredients"
//               value={ingredients}
//               onChange={(e) => setIngredients(e.target.value)}
//               rows="4"
//               className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//             />
//             {errors.ingredients && (
//               <p className="text-red-500 text-sm mt-1">{errors.ingredients}</p>
//             )}
//           </div>

//           <div className="mb-4">
//             <label
//               htmlFor="instructions"
//               className="block text-sm font-medium text-gray-700"
//             >
//               Instructions (one per line)
//             </label>
//             <textarea
//               id="instructions"
//               value={steps}
//               onChange={(e) => setSteps(e.target.value)}
//               rows="4"
//               className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//             />
//             {errors.steps && (
//               <p className="text-red-500 text-sm mt-1">{errors.steps}</p>
//             )}
//           </div>

//           <button
//             type="submit"
//             className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
//           >
//             Submit
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default AddRecipeForm;

// import React, { useState } from "react";

// const AddRecipeForm = () => {
//   const [title, setTitle] = useState("");
//   const [ingredients, setIngredients] = useState("");
//   const [steps, setSteps] = useState("");
//   const [errors, setErrors] = useState({});

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Validate form inputs
//     const newErrors = {};
//     if (!title) newErrors.title = "Title is required";
//     if (!ingredients) newErrors.ingredients = "Ingredients are required";
//     if (!steps) newErrors.steps = "Steps are required"; // Adjusted to match `steps`

//     if (Object.keys(newErrors).length > 0) {
//       setErrors(newErrors);
//       return;
//     }

//     // Process form submission
//     const recipe = {
//       title,
//       ingredients: ingredients
//         .split("\n")
//         .map((item) => item.trim())
//         .filter((item) => item),
//       steps: steps
//         .split("\n")
//         .map((step) => step.trim())
//         .filter((step) => step),
//     };

//     console.log("Recipe submitted:", recipe);

//     // Reset form fields
//     setTitle("");
//     setIngredients("");
//     setSteps("");
//     setErrors({});
//   };

//   return (
//     <div className="flex items-center justify-center w-screen min-h-screen bg-gray-100 p-6">
//       <div className="max-w-lg mx-auto bg-white rounded-lg shadow-lg p-6">
//         <h1 className="text-3xl font-bold mb-6">Add a New Recipe</h1>
//         <form onSubmit={handleSubmit}>
//           <div className="mb-4">
//             <label
//               htmlFor="title"
//               className="block text-sm font-medium text-gray-700"
//             >
//               Recipe Title
//             </label>
//             <input
//               id="title"
//               type="text"
//               value={title}
//               onChange={(e) => setTitle(e.target.value)}
//               className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//             />
//             {errors.title && (
//               <p className="text-red-500 text-sm mt-1">{errors.title}</p>
//             )}
//           </div>

//           <div className="mb-4">
//             <label
//               htmlFor="ingredients"
//               className="block text-sm font-medium text-gray-700"
//             >
//               Ingredients (one per line)
//             </label>
//             <textarea
//               id="ingredients"
//               value={ingredients}
//               onChange={(e) => setIngredients(e.target.value)}
//               rows="4"
//               className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//             />
//             {errors.ingredients && (
//               <p className="text-red-500 text-sm mt-1">{errors.ingredients}</p>
//             )}
//           </div>

//           <div className="mb-4">
//             <label
//               htmlFor="steps"
//               className="block text-sm font-medium text-gray-700"
//             >
//               Steps (one per line)
//             </label>
//             <textarea
//               id="steps"
//               value={steps}
//               onChange={(e) => setSteps(e.target.value)}
//               rows="4"
//               className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//             />
//             {errors.steps && (
//               <p className="text-red-500 text-sm mt-1">{errors.steps}</p>
//             )}
//           </div>

//           <button
//             type="submit"
//             className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
//           >
//             Submit
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default AddRecipeForm;

import React, { useState } from "react";

const AddRecipeForm = () => {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form inputs
    const newErrors = {};
    if (!title) newErrors.title = "Title is required";
    if (!ingredients) newErrors.ingredients = "Ingredients are required";
    if (!steps) newErrors.steps = "Instructions are required";
    if (ingredients.split("\n").length < 2)
      newErrors.ingredients = "At least 2 ingredients are required";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Process form submission
    const recipe = {
      title,
      ingredients: ingredients
        .split("\n")
        .map((item) => item.trim())
        .filter((item) => item),
      steps: steps
        .split("\n")
        .map((step) => step.trim())
        .filter((step) => step),
    };

    console.log("Recipe submitted:", recipe);

    // Reset form fields
    setTitle("");
    setIngredients("");
    setSteps("");
    setErrors({});
  };

  return (
    <div className="flex items-center justify-center w-full min-h-screen bg-gray-100 p-6">
      <div className="max-w-lg mx-auto bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-3xl font-bold mb-6">Add a New Recipe</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="title"
              className="block text-sm font-medium text-gray-700"
            >
              Recipe Title
            </label>
            <input
              id="title"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500   
 focus:border-indigo-500 sm:text-sm"
            />
            {errors.title && (
              <p
                className="text-red-500   
 text-sm mt-1"
              >
                {errors.title}
              </p>
            )}
          </div>

          <div className="mb-4">
            <label
              htmlFor="ingredients"
              className="block text-sm font-medium text-gray-700"
            >
              Ingredients (one per line)
            </label>
            <textarea
              id="ingredients"
              value={ingredients}
              onChange={(e) => setIngredients(e.target.value)}
              rows="4"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
            {errors.ingredients && (
              <p className="text-red-500 text-sm mt-1">{errors.ingredients}</p>
            )}
          </div>

          <div className="mb-4">
            <label
              htmlFor="steps"
              className="block text-sm font-medium text-gray-700"
            >
              Instructions (one per line)
            </label>
            <textarea
              id="steps"
              value={steps}
              onChange={(e) => setSteps(e.target.value)}
              rows="4"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
            {errors.steps && (
              <p className="text-red-500 text-sm mt-1">{errors.steps}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddRecipeForm;
