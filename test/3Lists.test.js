import List from '../src/3Lists'

describe('Lists', () => {
  const list = new List()

  test('append', () => {
    list.append(123)
    expect(list.dataStore).toEqual([123])
    list.append('cs')
    expect(list.dataStore).toEqual([123, 'cs'])
  })

  test('listSize', () => {
    expect(list.listSize).toBe(2)
    list.append('cs2')
    expect(list.listSize).toBe(3)
  })

  test('find', () => {
    expect(list.find('cs')).toBe(1)
    expect(list.find('ghy')).toBe(-1)
  })

  test('remove', () => {
    const originListSize = list.listSize
    const res = list.remove('cs')
    expect(res).toBe(true)
    expect(list.listSize).toBe(originListSize - 1)
    expect(list.dataStore).toEqual([123, 'cs2'])

    const originListSize2 = list.listSize
    const res2 = list.remove('ghy')
    expect(res2).toBe(false)
    expect(list.listSize).toBe(originListSize2)
    expect(list.dataStore).toEqual([123, 'cs2'])
  })

  test('length', () => {
    expect(list.length()).toBe(2)
  })

  test('toString', () => {
    expect(list.toString()).toBe('123,cs2')
  })

  test('insert', () => {
    const originListSize = list.listSize
    const insertRes = list.insert('gaohaoyang', 123)
    expect(insertRes).toBe(true)
    expect(list.listSize).toBe(originListSize + 1)
    expect(list.toString()).toBe('123,gaohaoyang,cs2')

    const originListSize2 = list.listSize
    const insertRes2 = list.insert('age', 1234)
    expect(insertRes2).toBe(false)
    expect(list.listSize).toBe(originListSize2)
    expect(list.toString()).toBe('123,gaohaoyang,cs2')
  })

  test('clear', () => {
    list.clear()
    expect(list.listSize).toBe(0)
    expect(list.toString()).toBe('')
  })

  test('contains', () => {
    expect(list.contains('123')).toBe(false)
    list.append(1)
    expect(list.contains(1)).toBe(true)
  })

  test('iterator ', () => {
    list.append('123')
    list.append('765')
    list.append('ghy')
    list.append('cs')
    list.front()
    expect(list.getElement()).toBe(1)
    list.next()
    expect(list.getElement()).toBe('123')
    list.prev()
    expect(list.getElement()).toBe(1)
    list.end()
    expect(list.getElement()).toBe('cs')
    list.moveTo(2)
    expect(list.getElement()).toBe('765')
    expect(list.currPos()).toBe(2)

    list.front()
    list.prev()
    expect(list.currPos()).toBe(0)
    list.end()
    list.next()
    expect(list.currPos()).toBe(list.listSize - 1)
  })
})
