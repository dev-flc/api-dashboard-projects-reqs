import { CONTENT_TYPE } from './../../constants/constants.js'
import {
  controllerAuthLogin,
  controllerConfirmAccount
} from './../../controllers/auth/controllerAuth.js'

// SignIn
export const postSignIn = async (request, response) => {
  const resp = await controllerAuthLogin(request.body)
  response.set({ 'Content-Type': CONTENT_TYPE.JSON })
  response.status(resp.code).send(resp)
}

// SignIn
export const getConfirmAccount = async (request, response) => {
  const { token } = request.params
  const resp = await controllerConfirmAccount(token)
  response.set({ 'Content-Type': CONTENT_TYPE.JSON })
  response.status(resp.code).send(resp)
}
