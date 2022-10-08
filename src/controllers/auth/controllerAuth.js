import jwt from 'jsonwebtoken'
import { SEND_CODE_STATUS } from './../../constants/constants.js'
import { User } from './../../models/user/modelUser.js'
import { validationMongoErrors } from '../../utils/utils.js'

const generateAccessToken = data => {
  const { JWT_SECRET } = process.env
  return jwt.sign({ data }, JWT_SECRET, {
    expiresIn: '24h'
  })
}

export const controllerAuthLogin = async ({ email, password }) => {
  return await User.findOne({ email })
    .then(async user => {
      if (!user) throw new Error('Invalid user')
      if (!user.confirmAccount) throw new Error('Account not confirm')
      if (!(await user.comparePassword(password)))
        throw new Error('Invalid password')

      user.password = undefined

      const token = generateAccessToken({ user })
      const { code, name } = SEND_CODE_STATUS[200]
      const data = { token, user }

      return { code, data, message: name }
    })
    .catch(error => {
      return validationMongoErrors(error)
    })
}

export const controllerConfirmAccount = async tokenConfirm => {
  return await User.findOne({ tokenConfirm })
    .then(async user => {
      if (!user) throw new Error('Invalid token')
      user.tokenConfirm = null
      user.confirmAccount = true
      await user.save()
      const { code, name } = SEND_CODE_STATUS[200]
      return { code, message: name }
    })
    .catch(error => {
      return validationMongoErrors(error)
    })
}
