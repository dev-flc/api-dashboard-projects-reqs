import { model, Schema } from 'mongoose'

const schemeUser = new Schema(
  {
    done: {
      default: false,
      type: Boolean
    },

    first_name: {
      trim: true,
      type: String
    },

    last_name: {
      trim: true,
      type: String
    },

    name: {
      required: [true, 'Please enter your name'],
      trim: true,
      type: String
    },

    rfc: {
      required: [true, 'Please enter your rfc'],
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
const user = model('users', schemeUser)
export { user }
