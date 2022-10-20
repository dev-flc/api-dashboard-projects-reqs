import { createClient } from 'redis'
import JWTR from 'jwt-redis'

const JWTRD = JWTR.default

export const clientRedis = createClient({
  host: process.env.REDIS_HOST,
  port: process.env.REDIS_PORT
})

clientRedis.on('error', err => console.log('Redis Client Error', err))

export const verifyAccessToken = async token => {
  const jwtr = new JWTRD(clientRedis)
  return await jwtr.verify(token, process.env.JWT_SECRET)
}

export const generateAccessToken = async (data, timeExpireJwt = '1h') => {
  const jwtr = new JWTRD(clientRedis)
  return await jwtr.sign(data, process.env.JWT_SECRET, {
    expiresIn: timeExpireJwt
  })
}

export const destroyAccessToken = async token => {
  const jwtr = new JWTRD(clientRedis)
  const decodeJWT = jwtr.decode(token)
  return await jwtr.destroy(decodeJWT.jti, process.env.JWT_SECRET)
}
