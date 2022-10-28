import { CONTENT_TYPE } from './../../constants/constants.js'
import {
  controllerUserDelete,
  controllerUserList,
  controllerUserRegister,
  controllerUserUpdate
} from './../../controllers/users/controllerUsers.js'

// List users
export const getUserList = async (request, response) => {
  const resp = await controllerUserList()
  response.set({ 'Content-Type': CONTENT_TYPE.JSON })
  response.status(resp.code).send(resp)
}

// Register user
export const postUserRegister = async (request, response) => {
  console.log('request.body==>', request.body)
  const resp = await controllerUserRegister(request.body)
  response.set({ 'Content-Type': CONTENT_TYPE.JSON })
  response.status(resp.code).send(resp)
}

// Update user
export const putUserUpdate = async (request, response) => {
  const { params, body } = request
  const resp = await controllerUserUpdate(params, body)
  response.set({ 'Content-Type': CONTENT_TYPE.JSON })
  response.status(resp.code).send(resp)
}

// Delete user
export const deleteUserDelete = async (request, response) => {
  const resp = await controllerUserDelete(request.params)
  response.set({ 'Content-Type': CONTENT_TYPE.JSON })
  response.status(resp.code).send(resp)
}
