/* eslint-disable prettier/prettier */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable prettier/prettier */
import { v4 as uuid } from 'uuid'

const recipes = []

export const getRecipes = () => recipes

export const getRecipe = (id) => {
  return recipes.find((recipe) => recipe.id === id)
}

export const createRecipe = (recipe) => {
  const id = uuid()
  recipes.push({ id, ...recipe })
  return getRecipe(id)
}

export const updateRecipe = (id, recipe) => {
  const databaseRecipe = getRecipe(id)
  if (databaseRecipe) {
    const recipeIndex = recipes.findIndex((r) => r.id === id)
    recipes[recipeIndex] = { id, ...recipe }
  }
  return getRecipe(id)
}

export const deleteRecipe = (id) => {
  const recipeIndex = recipes.findIndex((r) => r.id === id)
  if (recipeIndex !== -1) {
    recipes.splice(recipeIndex, 1)
    return true
  }
  return false
}