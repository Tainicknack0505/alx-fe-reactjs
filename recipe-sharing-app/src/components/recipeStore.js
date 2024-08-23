// import create from 'zustand';

// const useRecipeStore = create(set => ({
//   recipes: [],
//   addRecipe: (newRecipe) => set(state => ({ recipes: [...state.recipes, newRecipe] })),
//   updateRecipe: (updatedRecipe) => set(state => ({
//     recipes: state.recipes.map(recipe =>
//       recipe.id === updatedRecipe.id ? updatedRecipe : recipe
//     ),
//   })),
//   deleteRecipe: (recipeId) => set(state => ({
//     recipes: state.recipes.filter(recipe => recipe.id !== recipeId),
//   })),
//   setRecipes: (recipes) => set({ recipes })
// }));

// export default useRecipeStore;

// import create from 'zustand';

// const useRecipeStore = create(set => ({
//   recipes: [],
//   searchTerm: '',
//   filteredRecipes: [],
//   addRecipe: (newRecipe) => set(state => ({ recipes: [...state.recipes, newRecipe] })),
//   updateRecipe: (updatedRecipe) => set(state => ({
//     recipes: state.recipes.map(recipe =>
//       recipe.id === updatedRecipe.id ? updatedRecipe : recipe
//     ),
//     filteredRecipes: state.filteredRecipes.map(recipe =>
//       recipe.id === updatedRecipe.id ? updatedRecipe : recipe
//     ),
//   })),
//   deleteRecipe: (recipeId) => set(state => ({
//     recipes: state.recipes.filter(recipe => recipe.id !== recipeId),
//     filteredRecipes: state.filteredRecipes.filter(recipe => recipe.id !== recipeId),
//   })),
//   setRecipes: (recipes) => set({ recipes, filteredRecipes: recipes }),
  
//   setSearchTerm: (term) => set({ searchTerm: term }),
//   filterRecipes: () => set(state => ({
//     filteredRecipes: state.recipes.filter(recipe =>
//       recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
//     )
//   })),
// }));

// export default useRecipeStore;

import create from 'zustand';

const useRecipeStore = create(set => ({
  recipes: [],
  searchTerm: '',
  filteredRecipes: [],
  favorites: [],
  recommendations: [],

  // Add a recipe to the list
  addRecipe: (newRecipe) => set(state => ({ recipes: [...state.recipes, newRecipe] })),
  
  // Update a recipe in the list
  updateRecipe: (updatedRecipe) => set(state => ({
    recipes: state.recipes.map(recipe =>
      recipe.id === updatedRecipe.id ? updatedRecipe : recipe
    ),
    filteredRecipes: state.filteredRecipes.map(recipe =>
      recipe.id === updatedRecipe.id ? updatedRecipe : recipe
    ),
  })),
  
  // Delete a recipe from the list
  deleteRecipe: (recipeId) => set(state => ({
    recipes: state.recipes.filter(recipe => recipe.id !== recipeId),
    filteredRecipes: state.filteredRecipes.filter(recipe => recipe.id !== recipeId),
    favorites: state.favorites.filter(id => id !== recipeId),
    recommendations: state.recommendations.filter(recipe => recipe.id !== recipeId),
  })),

  // Set recipes and filter recipes based on search term
  setRecipes: (recipes) => set({ recipes, filteredRecipes: recipes }),
  setSearchTerm: (term) => set({ searchTerm: term }),
  filterRecipes: () => set(state => ({
    filteredRecipes: state.recipes.filter(recipe =>
      recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
    )
  })),
  
  // Add a recipe to favorites
  addFavorite: (recipeId) => set(state => ({
    favorites: [...state.favorites, recipeId]
  })),
  
  // Remove a recipe from favorites
  removeFavorite: (recipeId) => set(state => ({
    favorites: state.favorites.filter(id => id !== recipeId)
  })),
  
  // Generate recommendations based on favorites
  generateRecommendations: () => set(state => {
    const recommended = state.recipes.filter(recipe =>
      state.favorites.includes(recipe.id) && Math.random() > 0.5
    );
    return { recommendations: recommended };
  }),
}));

export default useRecipeStore;

