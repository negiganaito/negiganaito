import { expect } from '../utils'
import { PREVIOUS_FRAME } from '../utils/TAALOpcodes'
import { Error2 } from './Error2'

function err(msg: string, ...agrs: any[]) {
  const error = new Error2(msg)
  if (expect.toBeUndefined(error.stack))
    try {
      throw error
    } catch (a) {
      //
    }

  error.messageFormat = msg

  error.messageParams = agrs.map(agr => String(agr))

  error.taalOpcodes = [PREVIOUS_FRAME]
  return error
}

export default err
export { err }
