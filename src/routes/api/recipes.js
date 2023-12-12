/* eslint-disable prettier/prettier */
import { Router } from 'express'

import {
  getRecipe,
  getRecipes,
  addRecipe,
  updateRecipe,
  deleteRecipe,
} from '../../models/recipes'

const router = Router()

router.get('/', async (req, res) => {
  const size = Number(req.query.size) || 10
  const page = Number(req.query.page) || 1
  const skip = size * (page - 1)
  const take = size
  const { count, recipes } = await getRecipes(skip, take)
  res.set({
    'X-Total-Count': count,
    'X-Total-Pages': Math.ceil(count / size),
  })
  res.send(recipes)
})

router.get('/:id', async (req, res) => {
  const recipe = await getRecipe(req.params.id)
  if (recipe) {
    res.send(recipe)
  } else {
    res.status(404).send({ msg: 'Recipe not found' })
  }
})

router.post('/', async (req, res) => {
  const recipe = await addRecipe(req.body)
  res.send(recipe)
})

router.put('/:id', async (req, res) => {
  const recipe = await updateRecipe(req.params.id, req.body)
  if (recipe) {
    res.send(recipe)
  } else {
    res.status(404).send({ msg: 'Recipe not found' })
  }
})

router.delete('/:id', async (req, res) => {
  const recipe = await deleteRecipe(req.params.id)
  if (recipe) {
    res.send(recipe)
  } else {
    res.status(404).send({ msg: 'Recipe not found' })
  }
})

export default router