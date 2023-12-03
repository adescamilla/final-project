/* eslint-disable prettier/prettier */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable prettier/prettier */
import { Router } from 'express'

import logger from '../utils/logger'

const router = Router()

router.get('/', (req, res) => {
  logger.info('Inside the root path')
  const title = process.env.TITLE || 'Server'
  res.send({ msg: title })
})

export default router