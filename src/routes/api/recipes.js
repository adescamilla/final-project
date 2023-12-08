/* eslint-disable prettier/prettier */
import { Router } from 'express'

import {
  getRecipes,
  getRecipe,
  createRecipe,
  updateRecipe,
  deleteRecipe,
} from '../../models/recipes'

const router = Router()

router.get('/', (req, res) => {
  const recipes = getRecipes()
  res.send(recipes)
})

router.get('/:author', (req, res) => {
  const recipe = getRecipe(req.params.author)
  if (recipe) {
    res.send(recipe)
  }
  res.status(404).send({ msg: 'Recipe not found '})
})

router.post('/', (req, res) => {
  const newRecipe = createRecipe(req.body)
  if (newRecipe) {
    res.status(201).send(newRecipe)
  }
  res.status(400).send({ msg: 'Bad request' })
})

router.put('/:author', (req, res) => {
  const updatedRecipe = updateRecipe(req.params.author, req.body)
  if (updatedRecipe) {
    res.send(updatedRecipe)
  }
  res.status(404).send({ msg: 'Recipe not found' })
})

router.delete('/:author', (req, res) => {
  const deleted = deleteRecipe(req.params.author)
  if (deleted) {
    res.send({ msg: `Recipe ${req.params.author} Deleted` })
  }
  res.status(404).send({ msg: 'Recipe not found' })
})

export default router