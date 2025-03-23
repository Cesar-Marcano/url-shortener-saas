import { Request, Response } from 'express'

export class AuthController {
  public static async register(req: Request, res: Response): Promise<void> {}

  public static async login(req: Request, res: Response): Promise<void> {}

  public static async verifyEmail(req: Request, res: Response): Promise<void> {}

  public static async enable2FA(req: Request, res: Response): Promise<void> {}

  public static async verify2FA(req: Request, res: Response): Promise<void> {}

  public static async disable2FA(req: Request, res: Response): Promise<void> {}
}
