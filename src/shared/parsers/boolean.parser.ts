import { ParseStrategy } from '../types/parseStrategy.type'

export class BooleanParseStrategy implements ParseStrategy<boolean> {
  parse(value: string): boolean {
    return value.toLowerCase() === 'true'
  }
}
