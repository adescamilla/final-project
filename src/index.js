/* eslint-disable prettier/prettier */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable prettier/prettier */
import './utils/config'

import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import helmet from 'helmet'
import bodyParser from 'body-parser'

import logger from './utils/logger'
import router from './routes'
import { notFound, errorHandler } from './utils/errors'

const port = Number(process.env.PORT)

const app = express()
app.use(morgan(process.env.MORGAN_LOG))
app.use(cors({ origin: process.env.CORS_ORIGIN, exposedHeaders: ['x-total-count', 'x-total-pages'], }))
app.use(helmet())
app.use(bodyParser.json())

app.use('/', router)

app.use(notFound)
app.use(errorHandler)

app.listen(port, () => {
  logger.info(`Server running on port ${port}`)
})