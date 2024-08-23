// App.js
// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import RecipeList from "./RecipeList";
// import RecipeDetails from "./RecipeDetails";
// import AddRecipeForm from "./AddRecipeForm";

// const App = () => {
//   return (
//     <Router>
//       <div>
//         <h1>Recipe Sharing Application</h1>
//         <AddRecipeForm />
//         <Routes>
//           <Route path="/" element={<RecipeList />} />
//           <Route path="/recipe/:recipeId" element={<RecipeDetails />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// };

// export default App;

// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import RecipeList from "./components/RecipeList";
// import RecipeDetails from "./components/RecipeDetails";
// import AddRecipeForm from "./components/AddRecipeForm";
// import SearchBar from "./components/SearchBar";

// const App = () => {
//   return (
//     <Router>
//       <div>
//         <h1>Recipe Sharing Application</h1>
//         <AddRecipeForm />
//         <SearchBar />
//         <Routes>
//           <Route path="/" element={<RecipeList />} />
//           <Route path="/recipe/:recipeId" element={<RecipeDetails />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// };

// export default App;

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RecipeList from "./components/RecipeList";
import RecipeDetails from "./components/RecipeDetails";
import AddRecipeForm from "./components/AddRecipeForm";
import SearchBar from "./components/SearchBar";
import FavoritesList from "./components/FavoritesList";
import RecommendationsList from "./components/RecommendationsList";

const App = () => {
  return (
    <Router>
      <div>
        <h1>Recipe Sharing Application</h1>
        <AddRecipeForm />
        <SearchBar />
        <FavoritesList />
        <RecommendationsList />
        <Routes>
          <Route path="/" element={<RecipeList />} />
          <Route path="/recipe/:recipeId" element={<RecipeDetails />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
