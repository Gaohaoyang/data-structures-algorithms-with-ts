/**
 * 一维数组升维为二维数组
 * @example
 *  arrTo2d([1,2,3,4,5,6,7,8,9,10], 3)
 *  => [[1, 2, 3], [4, 5, 6], [7, 8, 9], [10]]
 */
const arrTo2d: <T>(arr: T[], num: number) => T[][] = (arr, num) => {
  const res = []
  for (let i = 0; i < arr.length; i += 1) {
    if (i % num === 0) {
      const tempArr = []
      for (let j = 0; j < num; j += 1) {
        if (arr[i + j]) {
          tempArr.push(arr[i + j])
        }
      }
      res.push(tempArr)
    }
  }
  return res
}

export default arrTo2d
