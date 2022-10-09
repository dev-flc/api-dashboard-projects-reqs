import { User } from './../../models/user/modelUser.js'
import {
  decode64,
  generateAccessToken,
  validationMongoErrors,
  verifyAccessToken
} from '../../utils/utils.js'
import {
  JWT_VALID_TIME,
  SEND_CODE_STATUS
} from './../../constants/constants.js'

export const controllerAuthLogin = async ({ email, password }) => {
  return await User.findOne({ email })
    .then(async user => {
      if (!user) throw new Error('Invalid user')

      if (!user.confirmAccount) throw new Error('Account not confirm')

      if (!(await user.comparePassword(password)))
        throw new Error('Invalid password')

      user.password = undefined
      const token = generateAccessToken(
        { user },
        JWT_VALID_TIME.EXPIRE_JWT_SESSION
      )
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

      verifyAccessToken(decode64(tokenConfirm))

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
