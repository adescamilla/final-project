/* eslint-disable prettier/prettier */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable prettier/prettier */
import { Router } from 'express'

import root from './root'

const router = Router()

router.use('/', root)

export default router