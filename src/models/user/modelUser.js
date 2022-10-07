import bcrypt from 'bcrypt'
import { model, Schema } from 'mongoose'

const schemeUser = new Schema(
  {
    confirmAccount: {
      default: false,
      type: Boolean
    },
    email: {
      index: { unique: true },
      lowercase: true,
      require: [true, 'Please enter your email'],
      trim: true,
      type: String,
      unique: true
    },
    password: {
      require: [true, 'Please enter your password'],
      trim: true,
      type: String
    },
    tokenConfirm: {
      default: null,
      trim: true,
      type: String
    },
    userName: {
      index: { unique: true },
      lowercase: true,
      require: [true, 'Please enter your user name'],
      trim: true,
      type: String,
      unique: true
    }
  },
  {
    timestamps: true,
    versionKey: false
  }
)
schemeUser.pre('save', async function (next) {
  const user = this
  if (!user.isModified('password')) return next()
  const salt = await bcrypt.genSalt(10)
  const hash = await bcrypt.hash(user.password, salt)
  user.password = hash
  next()
})

const User = model('User', schemeUser)
export { User }
