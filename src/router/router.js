import { AUTH } from './../middleware/auth.js'
import express from 'express'

import { getNoteList } from './../services/note/note.js'
import {
  deleteUserDelete,
  getUserList,
  postUserRegister,
  putUserUpdate
} from './../services/users/users.js'
import {
  getConfirmAccount,
  getSignOut,
  postSignIn
} from './../services/auth/auth.js'

const router = express.Router()

// Auth
router.post('/sign-in', postSignIn)
router.get('/sign-out/:token', getSignOut)
router.get('/confirm-account/:token', getConfirmAccount)

// User
router.get('/user-list', getUserList)
router.post('/user-register', AUTH, postUserRegister)
router.put('/user-update/:id', AUTH, putUserUpdate)
router.delete('/user-delete/:id', AUTH, deleteUserDelete)

// NOTE
router.get('/note-list', AUTH, getNoteList)

export { router }
