/* eslint-disable prettier/prettier */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable prettier/prettier */
import { Router } from 'express'

import root from './root'
import api from './api'

const router = Router()

router.use('/', root)
router.use('/api', api)

export default router