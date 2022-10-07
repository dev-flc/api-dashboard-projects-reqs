import jwt from 'jsonwebtoken'

/*
  decode: [Function (anonymous)],
  verify: [Function (anonymous)],
  sign: [Function (anonymous)],
  JsonWebTokenError: [Function: JsonWebTokenError],
  NotBeforeError: [Function: NotBeforeError],
  TokenExpiredError: [Function: TokenExpiredError]
*/

export const AUTH = (req, res, next) => {
  const tokenHeader =
    req.body.token || req.query.token || req.headers.authorization
  const token = tokenHeader && tokenHeader.split(' ')[1]

  if (!token) {
    return res.status(403).send('A token is required for authentication')
  }
  try {
    const { JWT_SECRET } = process.env
    const decoded = jwt.verify(token, JWT_SECRET)
    req.user = decoded
  } catch (err) {
    return res.status(401).send('Invalid Token')
  }
  return next()
}
