import { SEND_CODE_STATUS } from './../constants/constants.js'

const getKeyErrors = error => {
  const message = {}
  Object.keys(error.errors).forEach(key => {
    message[key] = error.errors[key].message
    message.key = key
  })
  return message
}

export const validationMongoErrors = async error => {
  const result = {
    code: SEND_CODE_STATUS[400].code,
    message: SEND_CODE_STATUS[400].name,
    nameError: SEND_CODE_STATUS[400].name
  }

  if (error.name === 'ValidationError') {
    const message = getKeyErrors(error)
    result.message = message[message.key]
    result.code = SEND_CODE_STATUS[422].code
    result.nameError = SEND_CODE_STATUS[400].name
  } else if (error.name === 'MongoServerError' && error.code === 11000) {
    result.message = `The data already exists: ${JSON.stringify(
      error.keyValue
    )}`
    result.code = SEND_CODE_STATUS[422].code
    result.nameError = SEND_CODE_STATUS[400].name
  } else if (error.name === 'CastError') {
    result.message = error.message
    result.code = SEND_CODE_STATUS[422].code
    result.nameError = SEND_CODE_STATUS[400].name
  }
  return result
}
