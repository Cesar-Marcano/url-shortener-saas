import { $Enums, User } from '@prisma/client'
import { PasswordHasher } from '../../shared/utils/passwordHasher'

export class UserEntity implements User {
  constructor(
    public name: string | null,
    public id: number,
    public email: string,
    public password: string,
    public username: string | null,
    public bio: string | null,
    public profilePic: string | null,
    public emailVerified: boolean,
    public twoFactorAuthEnabled: boolean,
    public role: $Enums.UserRole,
    public accountStatus: $Enums.AccountStatus,
    public disabledUntil: Date | null,
    public createdAt: Date,
    public tierId: number,
    public paymentModeId: number,
  ) {}

  static async create(email: string, password: string): Promise<UserEntity> {
    const hashedPassword = await PasswordHasher.hashPassword(password)

    return new UserEntity(
      null,
      0,
      email,
      hashedPassword,
      null,
      null,
      null,
      false,
      true,
      $Enums.UserRole.USER,
      $Enums.AccountStatus.ENABLED,
      null,
      new Date(),
      1,
      1,
    )
  }
}
