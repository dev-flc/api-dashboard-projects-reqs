import { CONTENT_TYPE } from './../../constants/constants.js'
import { controllerAuthLogin } from './../../controllers/auth/controllerAuth.js'

// SignIn
export const postSignIn = async (request, response) => {
  const resp = await controllerAuthLogin(request.body)
  response.set({ 'Content-Type': CONTENT_TYPE.JSON })
  response.status(resp.code).send(resp)
}
