import jwt from 'jsonwebtoken'
import { SEND_CODE_STATUS } from './../../constants/constants.js'

const generateAccessToken = data => {
  const { JWT_SECRET } = process.env
  return jwt.sign({ user: data }, JWT_SECRET, {
    expiresIn: '1800s'
  })
}

export const controllerAuthLogin = async ({ user, password }) => {
  console.log('password==>', password)

  const token = generateAccessToken({ user })
  const { code, name } = SEND_CODE_STATUS[200]
  return { code, message: name, token }
}
