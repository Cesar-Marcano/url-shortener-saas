export interface ParseStrategy<T> {
  parse(value: string): T
}
