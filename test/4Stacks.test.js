import Stack from '../src/4Stacks'

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

// 判断算式括号是否匹配
// 遇到左括号入栈，遇到右括号出栈，到最后判断栈是否为空，为空则说明左右括号是匹配的
const checkBracket = (ex) => {
  const stack = new Stack()
  for (let i = 0; i < ex.length; i += 1) {
    if (ex[i] === '(') {
      stack.push(i)
    }
    if (ex[i] === ')') {
      if (stack.top > 0) {
        stack.pop()
      } else {
        stack.push(i)
      }
    }
  }
  if (stack.top > 0) {
    const pos = []
    for (let i = 0; i < stack.top; i += 1) {
      pos.push(stack.dataStore[i])
    }
    return pos.join(',')
  }
  return '-1'
}

test('checkBracket ', () => {
  const expression = '2.3+23/12+(3.14159*0.24'
  expect(checkBracket(expression)).toBe('10')
  const expression2 = '2.3+23/12+(3.14159)*0.24'
  expect(checkBracket(expression2)).toBe('-1')
  expect(checkBracket('(')).toBe('0')
  expect(checkBracket(')')).toBe('0')
  expect(checkBracket('()()((')).toBe('4,5')
  expect(checkBracket(')()(')).toBe('0,3')
})
