const _ = require('underscore');

// Enum for log level verbosity
const Levels = {
  none: 0,
  normal: 1,
  debug: 2,

  isValid(level) {
    let isValid = false;
    Object.keys(this).forEach((key) => {
      if (!_.isNumber(this[key])) {
        return;
      } else if (this[key] === level) {
        isValid = true;
      }
    });

    return isValid;
  }
};

let logLevel = Levels.none;

function performLog(method, message, level = Levels.normal) {
  if (logLevel !== Levels.none && logLevel >= level) {
    console[method](`[${new Date().toLocaleTimeString()}] ${message}`);
  }
}

// Singleton for managing logging
const Logger = {
  // Expose Levels enum through singleton
  level: Levels,

  setLogLevel(newLogLevel) {
    if (!Levels.isValid(newLogLevel)) {
      throw new Error("Cannot set log level to '" + newLogLevel + "'. This is not a valid log level. Please use `Logger.level.____` when setting log level");
    }

    logLevel = newLogLevel;
  },

  log(message, level) {
    performLog('log', message, level);
  },
  logError(message, level) {
    performLog('error', message, level);
  },
  logWarning(message, level) {
    performLog('warn', message, level);
  },
};

module.exports = Logger;