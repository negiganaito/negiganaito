import {
  FORCED_KEY,
  PREVIOUS_DIR,
  PREVIOUS_FILE,
  PREVIOUS_FRAME,
} from '../utils/taal-opcodes'
import { Error2 } from './error-2'

const taalOpcodesValue = (taalOpcodes: number[] | undefined) =>
  taalOpcodes != null ? taalOpcodes : []

const blameToPreviousFile = (error: Error2) => {
  error.taalOpcodes = taalOpcodesValue(error.taalOpcodes)
  error.taalOpcodes.push(PREVIOUS_FILE)
  return error
}

const blameToPreviousFrame = (error: Error2) => {
  error.taalOpcodes = taalOpcodesValue(error.taalOpcodes)
  error.taalOpcodes.push(PREVIOUS_FRAME)
  return error
}

const blameToPreviousDirectory = (error: Error2) => {
  error.taalOpcodes = taalOpcodesValue(error.taalOpcodes)
  error.taalOpcodes.push(PREVIOUS_DIR)
  return error
}

const TAAL = {
  blameToPreviousFile,
  blameToPreviousFrame,
  blameToPreviousDirectory,
}

export default TAAL
export { blameToPreviousFile, blameToPreviousFrame, blameToPreviousDirectory }
