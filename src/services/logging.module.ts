import { NgModule, Optional, SkipSelf } from '@angular/core'
import { LoggingService, LogLevel } from './logging.service'

@NgModule({
  imports: [],
  providers: [LoggingService]
})
export class LoggingModule {
  constructor(
    @Optional()
    @SkipSelf()
    parentModule: LoggingModule
  ) {
    if (parentModule) {
      throw new Error(
        'EaLoggingModule is already loaded. Only import it in the root AppModule!'
      )
    }
  }

  static forRoot(logLevel: LogLevel) {
    return {
      ngModule: LoggingModule,
      providers: [{ provide: LogLevel, useValue: logLevel }]
    }
  }
}
