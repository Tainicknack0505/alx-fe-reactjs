// import create from 'zustand';

// const useRecipeStore = create((set) => ({
//   recipes: [],
//   filteredRecipes: [],

//   addRecipe: (newRecipe) =>
//     set((state) => ({
//       recipes: [...state.recipes, newRecipe],
//       filteredRecipes: [...state.filteredRecipes, newRecipe],
//     })),

//   updateRecipe: (updatedRecipe) =>
//     set((state) => ({
//       recipes: state.recipes.map((recipe) =>
//         recipe.id === updatedRecipe.id ? updatedRecipe : recipe
//       ),
//       filteredRecipes: state.filteredRecipes.map((recipe) =>
//         recipe.id === updatedRecipe.id ? updatedRecipe : recipe
//       ),
//     })),

//   deleteRecipe: (recipeId) =>
//     set((state) => ({
//       recipes: state.recipes.filter((recipe) => recipe.id !== recipeId),
//       filteredRecipes: state.filteredRecipes.filter(
//         (recipe) => recipe.id !== recipeId
//       ),
//     })),

//     currentRecipeId: null,
//     setCurrentRecipeId: (id) => set({ currentRecipeId: id }),


//   setFilteredRecipes: (filteredRecipes) => set({ filteredRecipes }),
// }));

// export default useRecipeStore;

import create from 'zustand';

const useRecipeStore = create((set) => ({
  recipes: [],
  searchTerm: '',
  filteredRecipes: [],
  setSearchTern: (term) => set(state => {
    const lowerCaseTerm = term.toLowerCase();
    return {
      searchTerm: term,
      filteredRecipes: state.recipes.filter(recipe =>
        recipe.title.toLowerCase().includes(lowerCaseTerm) ||
        recipe.ingredients.some(ingredient => ingredient.toLowerCase().includes(lowerCaseTerm)) ||
        recipe.preparationTime <= parseInt(lowerCaseTerm, 10)
      )
    };
  }),
// }));
  // })

  addRecipe: (newRecipe) =>
    set((state) => ({
      recipes: [...state.recipes, newRecipe],
      filteredRecipes: [...state.filteredRecipes, newRecipe],
    })),

  updateRecipe: (updatedRecipe) =>
    set((state) => ({
      recipes: state.recipes.map((recipe) =>
        recipe.id === updatedRecipe.id ? updatedRecipe : recipe
      ),
      filteredRecipes: state.filteredRecipes.map((recipe) =>
        recipe.id === updatedRecipe.id ? updatedRecipe : recipe
      ),
    })),

  deleteRecipe: (recipeId) =>
    set((state) => ({
      recipes: state.recipes.filter((recipe) => recipe.id !== recipeId),
      filteredRecipes: state.filteredRecipes.filter(
        (recipe) => recipe.id !== recipeId
      ),
    })),

    currentRecipeId: null,
    setCurrentRecipeId: (id) => set({ currentRecipeId: id }),


  setFilteredRecipes: (filteredRecipes) => set({ filteredRecipes }),
}));

export default useRecipeStore;
