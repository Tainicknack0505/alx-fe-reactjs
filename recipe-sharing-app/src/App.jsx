import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import RecipeList from "./components/RecipeList";
import AddRecipeForm from "./components/AddRecipeForm";
import RecipeDetails from "./components/RecipeDetails";

const App = () => {
  return (
    <div>
      <h1>Recipe Sharing App</h1>
      <AddRecipeForm />
      <RecipeList />
      <RecipeList />
      <Switch>
        <Route path="/recipe/:id" component={RecipeDetails} />
      </Switch>
    </div>
  );
};

export default App;
