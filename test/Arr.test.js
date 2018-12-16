import Arr from '../src/Arr'

describe('create Arr', () => {
  it('length', () => {
    expect(new Arr([]).length).toBe(0)
  })
  it('length2', () => {
    expect(new Arr([1, 2, 3, 4, 5]).length).toBe(5)
  })
  it('length3', () => {
    expect(new Arr().length).toBe(0)
  })
  it('length4', () => {
    expect(new Arr(10).length).toBe(10)
  })
})
