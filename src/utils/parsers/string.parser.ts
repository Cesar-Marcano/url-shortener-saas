import { ParseStrategy } from '../../types/parseStrategy.type'

export class StringParseStrategy implements ParseStrategy<string> {
  parse(value: string): string {
    return value
  }
}
