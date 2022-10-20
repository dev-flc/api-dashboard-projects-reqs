import { CONTENT_TYPE } from '../../constants/constants.js'
import { controllerNoteList } from '../../controllers/note/controllerNote.js'

// List note
export const getNoteList = async (request, response) => {
  const resp = await controllerNoteList()
  response.set({ 'Content-Type': CONTENT_TYPE.JSON })
  response.status(resp.code).send(resp)
}
