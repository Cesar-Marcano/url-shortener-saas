import { PrismaClient } from '@prisma/client'

export class DatabaseConfig {
  private prismaClient: PrismaClient

  constructor() {
    this.prismaClient = new PrismaClient()
  }

  public getClient(): PrismaClient {
    return this.prismaClient
  }
}
