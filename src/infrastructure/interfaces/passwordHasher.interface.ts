export interface IPasswordHasher {
  hashPassword(password: string): Promise<string>

  arePasswordsEqual(password: string, hash: string): Promise<boolean>
}
