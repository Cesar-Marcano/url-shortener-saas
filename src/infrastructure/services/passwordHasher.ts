import bcrypt from 'bcryptjs'
import { IPasswordHasher } from '../interfaces/passwordHasher.interface'

export class PasswordHasher implements IPasswordHasher {
  async hashPassword(password: string): Promise<string> {
    const salt = await bcrypt.genSalt(10)

    const hash = await bcrypt.hash(password, salt)

    return hash
  }

  async arePasswordsEqual(password: string, hash: string): Promise<boolean> {
    const arePasswordsEqual = await bcrypt.compare(password, hash)

    return arePasswordsEqual
  }
}
