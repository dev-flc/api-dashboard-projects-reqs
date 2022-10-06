import { CONTENT_TYPE } from './../../constants/constants.js'
import {
  controllerUserList,
  controllerUserSave
} from './../../controllers/users/controllerUsers.js'

// List users
export const getUserList = async (request, response) => {
  const resp = await controllerUserList()
  response.set({ 'Content-Type': CONTENT_TYPE.JSON })
  response.status(resp.code).send(resp)
}

// Save user
export const postUserSave = async (request, response) => {
  const resp = await controllerUserSave(request.body)
  response.set({ 'Content-Type': CONTENT_TYPE.JSON })
  response.status(resp.code).send(resp)
}
