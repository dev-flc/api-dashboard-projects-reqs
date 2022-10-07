import { SEND_CODE_STATUS } from './../../constants/constants.js'
import { User } from './../../models/user/modelUser.js'
import { validationMongoErrors } from '../../utils/utils.js'

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
  return await User(body)
    .save()
    .then(data => {
      const { code, name } = SEND_CODE_STATUS[200]
      return { code, data, message: name }
    })
    .catch(error => {
      return validationMongoErrors(error)
    })
}

export const controllerUserUpdate = async (params, body) => {
  return await User.findByIdAndUpdate(params.id, body)
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
