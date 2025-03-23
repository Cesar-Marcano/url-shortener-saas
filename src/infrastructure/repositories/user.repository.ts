import { PrismaClient } from '@prisma/client'
import { UserEntity } from '../../domain/entities/user.entity'
import { IUserRepository } from '../../domain/repositories/user.repository'
import { DatabaseConfig } from '../config/database.config'

export class UserRepository implements IUserRepository {
  private prisma: PrismaClient

  constructor(databaseConfig: DatabaseConfig) {
    this.prisma = databaseConfig.getClient()
  }

  async createUser(
    email: string,
    password: string,
  ): Promise<Omit<UserEntity, 'password'>> {
    const newUser = await this.prisma.user.create({
      data: UserEntity.create(email, password),
    })

    const user = UserEntity.fromPrisma(newUser).toPublicEntity()

    return user
  }

  findUserByEmail(email: string): Promise<UserEntity> {
    throw new Error('Method not implemented.')
  }
  findUserByUsername(username: string): Promise<UserEntity> {
    throw new Error('Method not implemented.')
  }
}
