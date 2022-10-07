import { CONTENT_TYPE } from './../../constants/constants.js'
import { controllerAuthLogin } from './../../controllers/auth/controllerAuth.js'

// Login
export const postAuthLogin = async (request, response) => {
  const resp = await controllerAuthLogin(request.body)
  response.set({ 'Content-Type': CONTENT_TYPE.JSON })
  response.status(resp.code).send(resp)
}
