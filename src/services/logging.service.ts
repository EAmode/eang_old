import { Injectable, Optional } from '@angular/core'

export enum LogLevel {
  error = 0,
  warn = 1,
  info = 2,
  verbose = 3,
  debug = 4,
  silly = 5
}

export class LoggingConfig {
  logLevel: LogLevel
}

@Injectable()
export class LoggingService {
  private _logLevel = LogLevel.silly

  constructor(@Optional() config?: LoggingConfig) {
    if (config) {
      this._logLevel = config.logLevel ? config.logLevel : LogLevel.silly
    }
  }
  private _format = (level, msg) => {
    return `[${LogLevel[level]}]: ${msg}`
  }

  error(message, ...params) {
    if (this._logLevel >= LogLevel.error) {
      console.error(this._format(LogLevel.error, message), ...params)
    }
  }

  warn(message, ...params) {
    if (this._logLevel >= LogLevel.warn) {
      console.log(this._format(LogLevel.warn, message), ...params)
    }
  }

  info(message, ...params) {
    if (this._logLevel >= LogLevel.info) {
      console.log(this._format(LogLevel.info, message), ...params)
    }
  }

  verbose(message, ...params) {
    if (this._logLevel >= LogLevel.verbose) {
      console.log(this._format(LogLevel.verbose, message), ...params)
    }
  }

  debug(message, ...params) {
    if (this._logLevel >= LogLevel.debug) {
      console.log(this._format(LogLevel.debug, message), ...params)
    }
  }

  silly(message, ...params) {
    if (this._logLevel >= LogLevel.silly) {
      console.log(this._format(LogLevel.silly, message), ...params)
    }
  }
}
