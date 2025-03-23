import { ParseStrategy } from '../types/parseStrategy.type'
import { parseStrategyRegistry } from '../strategy-registries/parseStrategy.registry'

export function getEnv<T>(key: string, defaultValue?: T): T | null {
  const value = process.env[key]

  if (value === undefined) {
    return defaultValue ?? null
  }

  const strategyType = typeof defaultValue as keyof typeof parseStrategyRegistry

  const StrategyClass =
    parseStrategyRegistry[strategyType] || parseStrategyRegistry['default']

  const strategy: ParseStrategy<T> = new StrategyClass() as ParseStrategy<T>

  return strategy.parse(value)
}
