import express from 'express'
import { setupMiddlewares } from './middlewares'
import { setupRouter } from './router'

export const app = express()

setupMiddlewares(app)

setupRouter(app)
