import { UserEntity } from '../../domain/entities/user.entity'
import { IUserRepository } from '../../domain/repositories/user.repository'
import { IPasswordHasher } from '../../infrastructure/interfaces/passwordHasher.interface'
import { UseCase } from '../interfaces/useCase.interface'

interface Request {
  email: string
  password: string
}

type Response = Omit<UserEntity, 'password'>

export class RegisterUserUseCase implements UseCase<Request, Response> {
  constructor(
    private readonly userRepository: IUserRepository,
    private readonly passwordHasher: IPasswordHasher,
  ) {}

  public async execute(request: Request) {
    const passwordHashed = await this.passwordHasher.hashPassword(
      request.password,
    )

    return this.userRepository.createUser(request.email, passwordHashed)
  }
}
