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
      trim: true,
      type: String,
      unique: true
    },
    password: {
      trim: true,
      type: String
    },
    personalInformation: {
      firstName: {
        lowercase: true,
        trim: true,
        type: String
      },
      lastName: {
        lowercase: true,
        trim: true,
        type: String
      },
      name: {
        lowercase: true,
        trim: true,
        type: String
      }
    },
    tokenConfirm: {
      default: null,
      trim: true,
      type: String
    },
    userName: {
      index: { unique: true },
      lowercase: true,
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

schemeUser.pre('findOneAndUpdate', async function (next) {
  const user = this
  if (user.getUpdate().password !== undefined) {
    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(this.getUpdate().password, salt)
    user.getUpdate().password = hash
    return next()
  } else {
    return next()
  }
})

schemeUser.methods.comparePassword = async function (candidatePassword) {
  return await bcrypt.compare(candidatePassword, this.password)
}

const User = model('users', schemeUser)
export { User }
