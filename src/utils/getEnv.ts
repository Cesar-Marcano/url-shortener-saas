import { ParseStrategy } from '../types/parseStrategy.type'
import { BooleanParseStrategy } from './parsers/boolean.parser'
import { DefaultParseStrategy } from './parsers/default.parser'
import { NumberParseStrategy } from './parsers/number.parser'
import { StringParseStrategy } from './parsers/string.parser'

export function getEnv<T>(key: string, defaultValue?: T): T | null {
  const value = process.env[key]

  if (value === undefined) {
    return defaultValue ?? null
  }

  let strategy: ParseStrategy<T>

  if (typeof defaultValue === 'boolean') {
    strategy = new BooleanParseStrategy() as ParseStrategy<T>
  } else if (typeof defaultValue === 'number') {
    strategy = new NumberParseStrategy() as ParseStrategy<T>
  } else if (typeof defaultValue === 'string') {
    strategy = new StringParseStrategy() as ParseStrategy<T>
  } else {
    strategy = new DefaultParseStrategy<T>() as ParseStrategy<T>
  }

  return strategy.parse(value)
}
