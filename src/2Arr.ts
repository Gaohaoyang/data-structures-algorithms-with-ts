class Arr extends Array {
  /**
   * matrix
   * 二维数组
   */
  public static matrix<T>(numRows: number, numCols: number, inital: T): T[][] {
    const arr = []
    for (let i = 0; i < numRows; i += 1) {
      const cols = []
      for (let j = 0; j < numCols; j += 1) {
        cols[j] = inital
      }
      arr[i] = cols
    }
    return arr
  }
}

export default Arr
