/* eslint-disable prettier/prettier */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable prettier/prettier */
import { Router } from 'express'
import basicAuth from 'express-basic-auth'

import recipes from './recipes'

const router = Router()

router.use(
  basicAuth({
    users: { [process.env.ADMIN_USER]: process.env.ADMIN_PASSWORD },
  }),
)

router.get('/', (req, res) => {
  res.send({ msg: 'Inside API Endpoints' })
})

router.use('/recipes', recipes)

export default router
