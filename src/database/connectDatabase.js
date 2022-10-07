import { connectMongo } from './database.js'

const connectDatabase = async () => {
  try {
    const data = await connectMongo()
    const { port, name } = data.connections[0]
    console.log(`Connected database ${name}:${port}, successfully 🔌 🔌 🔌`)
  } catch (error) {
    console.log('Error connect database 🔥 🔥 🔥', error)
  }
}

export { connectDatabase }
