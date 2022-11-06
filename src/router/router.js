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

// Auth
router.post('/api/auth/sign-in', postSignIn)
router.get('/api/auth/confirm-account/:token', getConfirmAccount)

// User
router.get('/api/user/list', getUserList)
router.post('/api/user/register', postUserRegister)
router.put('/api/user/update/:id', AUTH, putUserUpdate)
router.delete('/api/user/delete/:id', AUTH, deleteUserDelete)

// NOTE
router.get('/api/note/list', CACHE, getNoteList)

export { router }
