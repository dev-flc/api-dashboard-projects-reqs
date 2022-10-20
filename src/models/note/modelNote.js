import { model, Schema } from 'mongoose'

const schemeNote = new Schema(
  {
    date: {
      default: null,
      trim: true,
      type: String
    },
    description: {
      require: [true, 'Please enter your description'],
      trim: true,
      type: String
    },
    name: {
      index: { unique: true },
      lowercase: true,
      require: [true, 'Please enter your name'],
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
const Note = model('notes', schemeNote)

export { Note }
