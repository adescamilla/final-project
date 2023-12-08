/* eslint-disable prettier/prettier */

const recipes = []

export const getRecipes = () => recipes

export const getRecipe = (author) => {
  return recipes.find((recipe) => recipe.author === author)
}

export const createRecipe = (recipe) => {
  const author = 'Fake name'
  recipes.push({ author, ...recipe })
  return getRecipe(author)
}

export const updateRecipe = (author, recipe) => {
  const databaseRecipe = getRecipe(author)
  if (databaseRecipe) {
    const recipeIndex = recipes.findIndex((r) => r.author === author)
    recipes[recipeIndex] = { author, ...recipe }
  }
  return getRecipe(author)
}

export const deleteRecipe = (name) => {
  const recipeIndex = recipes.findIndex((r) => r.name === name)
  if (recipeIndex !== -1) {
    recipes.splice(recipeIndex, 1)
    return true
  }
  return false
}