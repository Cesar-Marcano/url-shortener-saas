import { ParseStrategy } from '../types/parseStrategy.type'

export class DefaultParseStrategy<T> implements ParseStrategy<T> {
  parse(value: string): T {
    return value as unknown as T
  }
}
