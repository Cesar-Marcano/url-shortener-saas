import { Application, json } from 'express'

export function setupMiddlewares(app: Application) {
  app.use(json({ limit: '5mb' }))
}
