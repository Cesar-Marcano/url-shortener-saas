import { Request, Response } from 'express'

export class AuthController {
  public static async login(req: Request, res: Response): Promise<void> {}
  public static async register(req: Request, res: Response): Promise<void> {}
}
