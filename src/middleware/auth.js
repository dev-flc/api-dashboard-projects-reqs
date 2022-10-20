import { verifyAccessToken } from './../utils/redis.js'
import { APPLY_AUTH, SEND_CODE_STATUS } from './../constants/constants.js'

export const AUTH = async (req, res, next) => {
  if (process.env.APPLY_AUTH === APPLY_AUTH.ON) {
    const tokenHeader =
      req.body.token || req.query.token || req.headers.authorization
    const token = tokenHeader && tokenHeader.split(' ')[1]

    if (!token) {
      const { code, name } = SEND_CODE_STATUS[403]
      return res.status(code).send(name)
    }
    try {
      const decoded = await verifyAccessToken(token)
      req.user = decoded
    } catch (err) {
      const { code, name } = SEND_CODE_STATUS[401]
      return res.status(code).send(name)
    }
  }
  return next()
}
