import { Note } from '../../models/note/modelNote.js'
import { SEND_CODE_STATUS } from '../../constants/constants.js'
import { validationMongoErrors } from '../../utils/utils.js'

export const controllerNoteList = async () => {
  return await Note.find()
    .then(async dataList => {
      const data = dataList.reduce(
        (obj, item) => ({ ...obj, [item._id]: item }),
        {}
      )
      const { code, name } = SEND_CODE_STATUS[200]
      return { code, data, message: name }
    })
    .catch(error => {
      return validationMongoErrors(error)
    })
}
