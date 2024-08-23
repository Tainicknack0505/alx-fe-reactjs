import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import RecipeList from "./RecipeList";
import RecipeDetails from "./RecipeDetails";
import SearchBar from "./SearchBar";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RecipeList />} />
        <Route path="/recipe/:id" element={<RecipeDetails />} />
        <SearchBar />
      </Routes>
    </Router>
  );
}

export default App;
