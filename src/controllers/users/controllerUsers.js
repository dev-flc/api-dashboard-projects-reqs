import { User } from './../../models/user/modelUser.js'
import {
  encode64,
  generateAccessToken,
  validationMongoErrors
} from '../../utils/utils.js'
import {
  JWT_VALID_TIME,
  SEND_CODE_STATUS
} from './../../constants/constants.js'

export const controllerUserList = async () => {
  return await User.find()
    .then(dataList => {
      const data = dataList.reduce(
        (obj, item) => ({ ...obj, [item._id]: item }),
        {}
      )
      const { code, name } = SEND_CODE_STATUS[200]
      return { code, data, message: name }
    })
    .catch(error => {
      return validationMongoErrors(error)
    })
}

export const controllerUserSave = async body => {
  const { email, userName } = body
  const token = generateAccessToken(
    { email, userName },
    JWT_VALID_TIME.EXPIRE_JWT_CONFIRM_ACCOUNT
  )
  return await User({ ...body, tokenConfirm: encode64(token) })
    .save()
    .then(data => {
      // enviar correo con la confirmacion de la cuenta
      const { code, name } = SEND_CODE_STATUS[200]
      return { code, data, message: name }
    })
    .catch(error => {
      return validationMongoErrors(error)
    })
}

export const controllerUserUpdate = async (params, body) => {
  return await User.findByIdAndUpdate(params.id, body, { new: true })
    .then(data => {
      const { code, name } = SEND_CODE_STATUS[200]
      return { code, data, message: name }
    })
    .catch(error => {
      return validationMongoErrors(error)
    })
}

export const controllerUserDelete = async ({ id }) => {
  return await User.findByIdAndDelete(id)
    .then(() => {
      const { code, name } = SEND_CODE_STATUS[200]
      return { code, message: name }
    })
    .catch(error => {
      return validationMongoErrors(error)
    })
}
