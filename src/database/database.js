import { connect } from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()

const { TOKEN_MONGODB } = process.env

const connectMongo = async () => connect(TOKEN_MONGODB)

export { connectMongo }
