import express from 'express'
import { getUserList, postUserSave } from './../services/users/users.js'

const router = express.Router()

router.get('/users-list', getUserList)
router.post('/user-save', postUserSave)

export { router }
