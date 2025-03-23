import { Application, Router } from 'express'
import { authRouter } from '../routes/auth.route'

function setupApiRoutes() {
  const apiRoutes = Router()

  apiRoutes.use('/auth', authRouter)

  return apiRoutes
}

export function setupRouter(app: Application) {
  app.use('/api', setupApiRoutes())
}
