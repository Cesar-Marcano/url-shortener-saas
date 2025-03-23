import { UserEntity } from '../entities/user.entity'

export interface IUserRepository {
  createUser(
    email: string,
    password: string,
  ): Promise<Omit<UserEntity, 'password'>>
  findUserByEmail(email: string): Promise<UserEntity>
  findUserByUsername(username: string): Promise<UserEntity>
}
