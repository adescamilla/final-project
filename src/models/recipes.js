/* eslint-disable prettier/prettier */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable prettier/prettier */
import db from '../utils/db'

export const getRecipes = async (skip, take) => {
  const count = await db.recipe.count()
  const recipes = await db.recipe.findMany({
    skip,
    take,
  })
  return { count, recipes }
}

export const getRecipe = async (id) =>
  db.recipe.findUnique({ where: { recipeID: id } })

export const addRecipe = async (recipeData) =>
  db.recipe.create({ data: { ...recipeData } })

export const updateRecipe = async (id, recipeData) => {
  const recipe = await getRecipe(id)
  if (recipe) {
    return db.recipe.update({
      where: { recipeID: id },
      data: { ...recipe, ...recipeData, updatedAt: new Date() },
    })
  }
  return null
}

export const deleteRecipe = async (id) =>
  db.recipe.delete({ where: { recipeID: id } })