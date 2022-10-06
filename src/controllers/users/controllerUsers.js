import { user } from './../../models/user/modelUser.js'
import { validationMongoErrors } from '../../utils/utils.js'

export const controllerUserList = async () => {
  return await user
    .find()
    .then(data => {
      const objData = data.reduce(
        (obj, item) => ({ ...obj, [item._id]: item }),
        {}
      )
      return { code: 200, data: objData }
    })
    .catch(error => {
      return validationMongoErrors(error)
    })
}

export const controllerUserSave = async body => {
  return await user(body)
    .save()
    .then(data => {
      return { code: 200, data }
    })
    .catch(error => {
      return validationMongoErrors(error)
    })
}
