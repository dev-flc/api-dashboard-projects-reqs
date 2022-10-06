import { user } from './../../models/user/user.js'

const getUserList = async (request, response) => {
  await user
    .find()
    .then(data => {
      const result = data.reduce(
        (obj, item) => ({ ...obj, [item._id]: item }),
        {}
      )
      return response.status(200).send(result)
    })
    .catch(error => {
      return response.status(422).send({ message: error.message })
    })
}

export { getUserList }
