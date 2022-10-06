import express from 'express'
import { getUserList } from './../services/users/users.js'

const router = express.Router()

router.get('/users-list', getUserList)

export { router }
