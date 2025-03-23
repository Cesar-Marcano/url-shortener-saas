import { BooleanParseStrategy } from '../parsers/boolean.parser'
import { DefaultParseStrategy } from '../parsers/default.parser'
import { NumberParseStrategy } from '../parsers/number.parser'
import { StringParseStrategy } from '../parsers/string.parser'

export const parseStrategyRegistry = {
  boolean: BooleanParseStrategy,
  number: NumberParseStrategy,
  string: StringParseStrategy,
  default: DefaultParseStrategy,
}
