import { Error2 } from './error-2'
import ErrorSerializer from './error-serializer'
import ErrorNormalizeUtils from './error-normalize-utils'
import { err } from './err'
import ErrorPubSub from './error-pubsub'
import { ErrorMetadata } from './error-metadata'
import { LogTypeString, NormalizeErrorProps } from './types'
import {
  PREVIOUS_DIR,
  PREVIOUS_FILE,
  PREVIOUS_FRAME,
} from '../utils/taal-opcodes'

class FBLogMessage {
  project: string
  events: any[]
  metadata: ErrorMetadata
  taalOpcodes: number[]
  blameModule?: string
  forcedKey?: string
  normalizedError?: NormalizeErrorProps
  error?: Error2

  constructor(projectName: string) {
    this.project = projectName
    this.events = []
    this.metadata = new ErrorMetadata()
    this.taalOpcodes = []
  }

  $1(type: LogTypeString, msgFormat: string, ...params: any) {
    const messageFormat = String(msgFormat)
    const { events, project, metadata, blameModule, forcedKey } = this
    let error = this.error
    let normalizeErrorObj: NormalizeErrorProps
    if (this.normalizedError) {
      const obj = {
        message:
          this.normalizedError.messageFormat +
          ' [Caught in: ' +
          messageFormat +
          ']',
        params: ([] as any[]).concat(
          this.normalizedError.messageParams,
          params,
        ),
        forcedKey,
      }

      normalizeErrorObj = Object.assign(this.normalizedError, {
        message: obj.message,
        messageFormat: obj.message,
        messageParams: ErrorSerializer.toStringParams(obj.params),
        project,
        type,
        loggingSource: 'FBLOGGER',
      })

      // this.normalizedError.message = obj.message;
      // this.normalizedError.messageFormat = obj.message;
      // this.normalizedError.messageParams = ErrorSerializer.toStringParams(
      //   obj.params
      // );
      // this.normalizedError.project = project;
      // this.normalizedError.type = type;
      // this.normalizedError.loggingSource = "FBLOGGER";
    } else if (error) {
      this.taalOpcodes.length > 0 &&
        new FBLogMessage('fblogger')
          .blameToPreviousFrame()
          .blameToPreviousFrame()
          .warn('Blame helpers do not work with catching')
      ErrorSerializer.aggregateError(error, {
        messageFormat: messageFormat,
        messageParams: ErrorSerializer.toStringParams(params),
        errorName: error.name,
        forcedKey,
        project,
        type,
        loggingSource: 'FBLOGGER',
      })
      normalizeErrorObj = ErrorNormalizeUtils.normalizeError(error)
    } else {
      error = new Error2(messageFormat)
      if (error.stack === undefined) {
        try {
          throw error
        } catch (error) {
          //
        }
      }
      error.messageFormat = messageFormat
      error.messageParams = ErrorSerializer.toStringParams(params)
      error.blameModule = blameModule
      error.forcedKey = forcedKey
      error.project = project
      error.type = type
      error.loggingSource = 'FBLOGGER'
      error.taalOpcodes = [PREVIOUS_FRAME, PREVIOUS_FRAME].concat(
        this.taalOpcodes,
      )
      normalizeErrorObj = ErrorNormalizeUtils.normalizeError(error)
      normalizeErrorObj.name = 'FBLogger'
    }
    metadata.isEmpty() || (normalizeErrorObj!.metadata = metadata.format())
    if (events.length > 0) {
      if (normalizeErrorObj?.events != undefined) {
        let q
        ;(q = normalizeErrorObj.events).push.apply(q, events)
      } else normalizeErrorObj!.events = events
    }
    ErrorPubSub.reportNormalizedError(normalizeErrorObj!)
    return error as Error2
  }

  fatal = (msg: string, ...params: any) => {
    this.$1('fatal', msg, ...params)
  }

  mustfix = (msg: string, ...params: any) => {
    this.$1('error', msg, ...params)
  }

  warn = (msg: string, ...params: any) => {
    this.$1('warn', msg, ...params)
  }

  info = (msg: string, ...params: any) => {
    this.$1('info', msg, ...params)
  }

  debug(msg: any) {
    /** */
  }

  mustfixThrow(msg: string, ...params: any) {
    let error = this.$1('error', msg, params)
    error ||
      ((error = err('mustfixThrow does not support catchingNormalizedError')),
      (error.taalOpcodes = error.taalOpcodes || []),
      error.taalOpcodes.push(PREVIOUS_FRAME))
    throw error
  }

  //!
  catching(err: Error2) {
    if (!(err instanceof Error)) {
      new FBLogMessage('fblogger')
        .blameToPreviousFrame()
        .warn('Catching non-Error object is not supported')
    } else {
      this.error = err
    }
    return this
  }

  catchingNormalizedError(normalErr: NormalizeErrorProps) {
    this.normalizedError = normalErr
    return this
  }

  event(event: any) {
    this.events.push(event)
    return this
  }

  blameToModule(msg: string) {
    this.blameModule = msg
  }

  blameToPreviousFile() {
    this.taalOpcodes.push(PREVIOUS_FILE)
    return this
  }

  blameToPreviousFrame() {
    this.taalOpcodes.push(PREVIOUS_FRAME)
    return this
  }

  blameToPreviousDirectory() {
    this.taalOpcodes.push(PREVIOUS_DIR)
    return this
  }

  addToCategoryKey(forcedKey: string) {
    this.forcedKey = forcedKey
    return this
  }

  addMetadata(a: string, b: string, c: string) {
    this.metadata.addEntry(a, b, c)
    return this
  }
}

export default FBLogMessage
