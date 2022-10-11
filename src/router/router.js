import { AUTH } from './../middleware/auth.js'
import express from 'express'
import {
  deleteUserDelete,
  getUserList,
  postUserSave,
  putUserUpdate
} from './../services/users/users.js'

import { getConfirmAccount, postSignIn } from './../services/auth/auth.js'

const router = express.Router()

// Auth
router.post('/sign-in', postSignIn)
router.get('/confirm-account/:token', getConfirmAccount)

// User
router.get('/user-list', getUserList)
router.post('/user-save', AUTH, postUserSave)
router.put('/user-update/:id', AUTH, putUserUpdate)
router.delete('/user-delete/:id', AUTH, deleteUserDelete)

export { router }
