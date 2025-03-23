import { Router } from 'express'
import { AuthController } from '../controllers/auth.controller'

export const authRouter = Router()

authRouter.post('/login', AuthController.login)

authRouter.post('/register', AuthController.register)

authRouter.get('/verify/:token', AuthController.verifyEmail)

authRouter.post('/2fa/enable', AuthController.enable2FA)

authRouter.post('/2fa/verify', AuthController.verify2FA)

authRouter.post('/2fa/disable', AuthController.disable2FA)
