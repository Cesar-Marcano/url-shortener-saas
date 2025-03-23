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
}
