import { AUTH } from './../middleware/auth.js'
import { CACHE } from './../middleware/cache.js'
import express from 'express'

import { getNoteList } from './../services/note/note.js'
import {
  deleteUserDelete,
  getUserList,
  postUserRegister,
  putUserUpdate
} from './../services/users/users.js'
import { getConfirmAccount, postSignIn } from './../services/auth/auth.js'

const router = express.Router()

router
  // Auth
  .post('/api/auth/sign-in', postSignIn)
  .get('/api/auth/confirm-account/:token', getConfirmAccount)

  // User
  .get('/api/user/list', getUserList)
  .post('/api/user/register', postUserRegister)
  .put('/api/user/update/:id', AUTH, putUserUpdate)
  .delete('/api/user/delete/:id', AUTH, deleteUserDelete)

  // NOTE
  .get('/api/note/list', CACHE, getNoteList)

export { router }
