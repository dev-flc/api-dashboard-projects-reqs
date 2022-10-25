import { CONTENT_TYPE } from './../../constants/constants.js'
import {
  controllerAuthSignIn,
  controllerConfirmAccount
} from './../../controllers/auth/controllerAuth.js'

// Sign in
export const postSignIn = async (request, response) => {
  const resp = await controllerAuthSignIn(request.body)
  response.set({ 'Content-Type': CONTENT_TYPE.JSON })
  response.status(resp.code).send(resp)
}

// Confirm account
export const getConfirmAccount = async (request, response) => {
  const { token } = request.params
  const resp = await controllerConfirmAccount(token)
  response.set({ 'Content-Type': CONTENT_TYPE.JSON })
  response.status(resp.code).send(resp)
}
