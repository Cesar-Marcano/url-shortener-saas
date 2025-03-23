import { UserEntity } from '../../domain/entities/user.entity'
import { PasswordHasher } from '../../infrastructure/services/passwordHasher'

export class UserService {
  constructor(private readonly passwordHasherUtility: PasswordHasher) {}

  public async createUser(email: string, password: string) {
    const hashedPassword =
      await this.passwordHasherUtility.hashPassword(password)

    return UserEntity.create(email, hashedPassword)
  }
}
