import jwt from 'jsonwebtoken'

export const verifyAccessToken = token =>
  jwt.verify(token, process.env.JWT_SECRET)

export const generateAccessToken = async (data, timeExpireJwt = '1h') =>
  jwt.sign({ data }, process.env.JWT_SECRET, {
    expiresIn: timeExpireJwt
  })
