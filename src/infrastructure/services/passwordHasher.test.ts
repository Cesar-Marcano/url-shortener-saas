import { describe, expect, it } from '@jest/globals'
import { PasswordHasher } from './passwordHasher'

describe('PasswordHasher', () => {
  const password = 'testPassword123'

  it('should hash a password', async () => {
    const hash = await new PasswordHasher().hashPassword(password)
    expect(hash).toBeDefined()
    expect(hash).not.toBe(password)
  })

  it('should return true for matching passwords', async () => {
    const hash = await new PasswordHasher().hashPassword(password)
    const result = await new PasswordHasher().arePasswordsEqual(password, hash)
    expect(result).toBe(true)
  })

  it('should return false for non-matching passwords', async () => {
    const hash = await new PasswordHasher().hashPassword(password)
    const result = await new PasswordHasher().arePasswordsEqual('wrongPassword', hash)
    expect(result).toBe(false)
  })
})
