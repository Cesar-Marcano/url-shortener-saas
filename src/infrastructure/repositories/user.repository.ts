import { UserEntity } from '../../domain/entities/user.entity'
import { IUserRepository } from '../../domain/repositories/user.repository'

export class UserRepository implements IUserRepository {
  createUser(email: string, password: string): Promise<UserEntity> {
    throw new Error('Method not implemented.')
  }
  findUserByEmail(email: string): Promise<UserEntity> {
    throw new Error('Method not implemented.')
  }
  findUserByUsername(username: string): Promise<UserEntity> {
    throw new Error('Method not implemented.')
  }
}
