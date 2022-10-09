import { AUTH } from './../middleware/auth.js'
import express from 'express'
import {
  getUserList,
  postUserDelete,
  postUserSave,
  postUserUpdate
} from './../services/users/users.js'

import { getConfirmAccount, postSignIn } from './../services/auth/auth.js'

const router = express.Router()

// Auth
router.post('/sign-in', postSignIn)
router.get('/confirm-account/:token', getConfirmAccount)

// User
router.get('/user-list', getUserList)
router.post('/user-save', AUTH, postUserSave)
router.put('/user-update/:id', AUTH, postUserUpdate)
router.delete('/user-delete/:id', AUTH, postUserDelete)

export { router }
