import { getEnv } from './utils/getEnv'

export const config = {
  paypalClientId: getEnv<string>('PAYPAL_CLIENT_ID'),
  paypalClientSecret: getEnv<string>('PAYPAL_CLIENT_SECRET'),
  jwtAccessTokenSecret: getEnv<string>('JWT_ACCESS_TOKEN_SECRET'),
  jwtRefreshTokenSecret: getEnv<string>('JWT_REFRESH_TOKEN_SECRET'),
  isProduction: getEnv<string>('NODE_ENV') === 'PRODUCTION',
  port: getEnv<number>('PORT', 3000),
}
