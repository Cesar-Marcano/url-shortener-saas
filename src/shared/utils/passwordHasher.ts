import bcrypt from 'bcrypt'

export class PasswordHasher {
  static async hashPassword(password: string): Promise<string> {
    const salt = await bcrypt.genSalt(10)

    const hash = await bcrypt.hash(password, salt)

    return hash
  }

  static async arePasswordsEqual(
    password: string,
    hash: string,
  ): Promise<boolean> {
    const arePasswordsEqual = await bcrypt.compare(password, hash)

    return arePasswordsEqual
  }
}
