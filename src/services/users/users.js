import { controllerUserList } from './../../controllers/users/controllerUsers.js'

export const getUserList = async (request, response) => {
  const resp = await controllerUserList()
  response.status(resp.code).send(resp)
}
