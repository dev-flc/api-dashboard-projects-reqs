import { connectDatabase } from './database/connectDatabase.js'
import dotenv from 'dotenv'
import express from 'express'
import { router } from './router/router.js'

dotenv.config()

const { PORT } = process.env
const NEW_PORT = PORT || 3002
const APP = express()

APP.use(express.json())

APP.use('/', router)

APP.get('*', (request, response) => {
  response.send('4 0 4')
})

APP.listen(NEW_PORT, () => {
  connectDatabase()
  console.log(`Server successfull: http://localhost:${NEW_PORT}`)
})
