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
router.post('/sign-in', postSignIn)
router.get('/confirm-account/:token', getConfirmAccount)

// User
router.get('/user-list', AUTH, getUserList)
router.post('/user-register', AUTH, postUserRegister)
router.put('/user-update/:id', AUTH, putUserUpdate)
router.delete('/user-delete/:id', AUTH, deleteUserDelete)

// NOTE
router.get('/note-list', AUTH, CACHE, getNoteList)

export { router }
