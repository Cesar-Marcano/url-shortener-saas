import { UserEntity } from '../entities/user.entity'

export interface IUserRepository {
  createUser(email: string, password: string): Promise<UserEntity>
  findUserByEmail(email: string): Promise<UserEntity>
  findUserByUsername(username: string): Promise<UserEntity>
}
