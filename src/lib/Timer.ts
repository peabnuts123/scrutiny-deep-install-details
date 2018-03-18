// Types
type hrtimeResult = [number, number];
interface ITimerMap {
  [key: string]: hrtimeResult;
}

// Constants
// const MS_PER_S: number = 1e3;
// const NS_PER_MS: number = 1e6;
const NS_PER_S: number = 1e9;

export default class Timer {
  private static timerMap: ITimerMap = {};

  // Start a string-keyed timer
  public static start(name: string): void {
    this.timerMap[name] = process.hrtime();
  }

  // Delete and get the results of a string-keyed timer
  public static stop(name: string): number {
    // Get original start timer
    const startTimer: hrtimeResult = this.timerMap[name];
    // Clear start timer
    delete this.timerMap[name];

    // Get elapsed time since calling start
    let [elapsedSeconds, elapsedNanoSeconds]: [number, number] = process.hrtime(startTimer);

    // Convert to seconds
    return elapsedSeconds + (elapsedNanoSeconds / NS_PER_S);
  }
}