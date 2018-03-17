// Enum for log level verbosity
export enum LogLevel {
  none = 1,
  normal,
  debug,
}

// Singleton for managing logging
export default class Logger {
  private static currentLogLevel: LogLevel = LogLevel.normal;

  private constructor() { }

  public static setLogLevel(newLogLevel: LogLevel) {
    this.currentLogLevel = newLogLevel;
  }

  public static testLevel(level: LogLevel) {
    return this.currentLogLevel !== LogLevel.none && this.currentLogLevel >= level;
  }

  public static log(message: string, level: LogLevel = LogLevel.normal): void {
    this.performLog(console.log, message, level);
  }
  public static logError(message: string, level: LogLevel = LogLevel.normal): void {
    this.performLog(console.error, message, level);
  }
  public static logWarning(message: string, level: LogLevel = LogLevel.normal): void {
    this.performLog(console.warn, message, level);
  }
  private static performLog(logFunction: (s: string) => void, message: string, level: LogLevel = LogLevel.normal): void {
    if (this.testLevel(level)) {
      logFunction(`[${new Date().toLocaleTimeString()}] ${message}`);
    }
  }
}