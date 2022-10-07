import express from 'express'
import {
  getUserList,
  postUserDelete,
  postUserSave,
  postUserUpdate
} from './../services/users/users.js'

const router = express.Router()

router.get('/user-list', getUserList)
router.post('/user-save', postUserSave)
router.put('/user-update/:id', postUserUpdate)
router.delete('/user-delete/:id', postUserDelete)

export { router }
