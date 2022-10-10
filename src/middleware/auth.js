import jwt from 'jsonwebtoken'
import { APPLY_AUTH, SEND_CODE_STATUS } from './../constants/constants.js'

/*
  decode: [Function (anonymous)],
  verify: [Function (anonymous)],
  sign: [Function (anonymous)],
  JsonWebTokenError: [Function: JsonWebTokenError],
  NotBeforeError: [Function: NotBeforeError],
  TokenExpiredError: [Function: TokenExpiredError]
*/

export const AUTH = (req, res, next) => {
  if (process.env.APPLY_AUTH === APPLY_AUTH.ON) {
    const tokenHeader =
      req.body.token || req.query.token || req.headers.authorization
    const token = tokenHeader && tokenHeader.split(' ')[1]

    if (!token) {
      const { code, name } = SEND_CODE_STATUS[403]
      return res.status(code).send(name)
    }
    try {
      const { JWT_SECRET } = process.env
      const decoded = jwt.verify(token, JWT_SECRET)
      req.user = decoded
    } catch (err) {
      const { code, name } = SEND_CODE_STATUS[401]
      return res.status(code).send(name)
    }
  }
  return next()
}
