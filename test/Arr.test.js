import Arr from '../src/Arr'

describe('matrix Arr', () => {
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
})
