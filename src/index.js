import dotenv from 'dotenv'
import express from 'express'
import { router } from './router/router.js'

dotenv.config()
const { PORT } = process.env
const NEW_PORT = PORT || 3002
const APP = express()

APP.use('/', router)

APP.get('*', (request, response) => {
  response.send(' W E L C O M E - 404')
})

APP.listen(NEW_PORT, () => console.log(`Server, http://localhost:${NEW_PORT}`))
