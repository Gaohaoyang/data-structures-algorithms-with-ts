import Arr from '../src/2Arr'
import arrTo2d from '../src/2ArrTo2d'

describe('Arr', () => {
  test('matrix init', () => {
    expect(Arr.matrix(5, 5, 0)).toEqual([
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
    ])
  })

  test('matrix set value and get value', () => {
    const arr = Arr.matrix(6, 6, '')
    arr[1][2] = 'cs'
    expect(arr[1][2]).toBe('cs')
  })

  test('arr to 2d 1', () => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    expect(arrTo2d(arr, 3)).toEqual([
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
      [10],
    ])
  })

  test('arr to 2d 2', () => {
    const arr = ['1', 2, 3, 4, '5', 6, 7, 8, 9, {
      a: 123,
      b: 'cs',
    }]
    expect(arrTo2d(arr, 4)).toEqual([
      ['1', 2, 3, 4],
      ['5', 6, 7, 8],
      [9, {
        a: 123,
        b: 'cs',
      }],
    ])
  })
})
