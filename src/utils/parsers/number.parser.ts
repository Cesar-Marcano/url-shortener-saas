import { ParseStrategy } from '../../types/parseStrategy.type'

export class NumberParseStrategy implements ParseStrategy<number> {
  parse(value: string): number {
    return parseFloat(value)
  }
}
