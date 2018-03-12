const MS_PER_S = 1e3;
const NS_PER_MS = 1e6;

class Timer {
  constructor() {
    this.timerMap = {};
  }

  start(name) {
    this.timerMap[name] = process.hrtime();
  }

  stop(name) {
    // Get original start timer
    const startTimer = this.timerMap[name];
    // Clear start timer
    delete this.timerMap[name];

    // Get elapsed time since calling start
    let [elapsedSeconds, elapsedNanoSeconds] = process.hrtime(startTimer);
    // Convert to milliseconds
    let elapsedMilliseconds = (elapsedSeconds * MS_PER_S) + (elapsedNanoSeconds / NS_PER_MS);

    return elapsedMilliseconds;
  }
}

module.exports = new Timer();