import { $Enums, User } from '@prisma/client'

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

  static create(email: string, password: string): UserEntity {
    return new UserEntity(
      null,
      0,
      email,
      password,
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

  toPublicEntity(): Omit<UserEntity, 'password'> {
    const { password, ...publicEntity } = this
    return publicEntity as Omit<UserEntity, 'password'>
  }

  static fromPrisma(user: User): UserEntity {
    return new UserEntity(
      user.name,
      user.id,
      user.email,
      user.password,
      user.username,
      user.bio,
      user.profilePic,
      user.emailVerified,
      user.twoFactorAuthEnabled,
      user.role,
      user.accountStatus,
      user.disabledUntil,
      user.createdAt,
      user.tierId,
      user.paymentModeId,
    )
  }
}
