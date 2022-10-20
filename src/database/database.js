import { connect } from 'mongoose'

export const connectMongo = async () => connect(process.env.TOKEN_MONGODB)
