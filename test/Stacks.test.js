import Stack from '../src/Stacks'

describe('Stack', () => {
  const stack = new Stack()
  test('init & push', () => {
    expect(stack.dataStore).toEqual([])
    stack.push(1)
    expect(stack.dataStore).toEqual([1])
    expect(stack.top).toBe(1)
  })

  test('pop', () => {
    stack.push('2')
    expect(stack.top).toBe(2)
    expect(stack.pop()).toBe('2')
    expect(stack.top).toBe(1)
  })

  test('peek', () => {
    expect(stack.peek()).toBe(1)
    stack.push(123)
    expect(stack.peek()).toBe(123)
  })

  test('length', () => {
    expect(stack.length()).toBe(2)
  })

  test('clear', () => {
    stack.clear()
    expect(stack.top).toBe(0)
    expect(stack.length()).toBe(0)
  })
})
