import { getEnv } from './getEnv'
import { describe, beforeEach, jest, it, expect } from '@jest/globals'

describe('getEnv', () => {
  beforeEach(() => {
    jest.resetModules()
    process.env = {}
  })

  it('should return the default value if the environment variable is not set', () => {
    const result = getEnv('NON_EXISTENT_KEY', 'default')
    expect(result).toBe('default')
  })

  it('should return null if the environment variable is not set and no default value is provided', () => {
    const result = getEnv('NON_EXISTENT_KEY')
    expect(result).toBeNull()
  })

  it('should parse boolean values correctly', () => {
    process.env.BOOL_KEY = 'true'
    const result = getEnv('BOOL_KEY', false)
    expect(result).toBe(true)
  })

  it('should parse number values correctly', () => {
    process.env.NUMBER_KEY = '123'
    const result = getEnv('NUMBER_KEY', 0)
    expect(result).toBe(123)
  })

  it('should parse string values correctly', () => {
    process.env.STRING_KEY = 'test'
    const result = getEnv('STRING_KEY', '')
    expect(result).toBe('test')
  })
})
