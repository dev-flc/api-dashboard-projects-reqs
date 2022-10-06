import { user } from './../../models/user/modelUser.js'

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
      return { code: 422, message: error.message }
    })
}
