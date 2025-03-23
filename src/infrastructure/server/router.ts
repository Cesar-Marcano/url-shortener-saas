import { Application, Router } from 'express'

const router = Router()

export function setupRouter(app: Application) {
  app.use(router)
}
