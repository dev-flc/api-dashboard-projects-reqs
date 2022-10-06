import express from 'express'
import { router } from './router/router.js'

const PORT = process.env.PORT || 3002
const APP = express()

APP.use('/', router)

APP.get('*', (request, response) => {
  response.send(' W E L C O M E - 404')
})

APP.listen(PORT, () => console.log(`Server, http://localhost:${PORT}`))
