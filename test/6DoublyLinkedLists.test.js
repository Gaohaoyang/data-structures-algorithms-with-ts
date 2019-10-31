import DoublyLinkedList from '../src/6DoublyLinkedList'

describe('DoublyLinkedList', () => {
  const ll = new DoublyLinkedList()
  test('insert and display', () => {
    ll.insert('a1', 'head')
    expect(ll.display()).toEqual([[null, 'head', 'a1'], ['head', 'a1', null]])
    ll.insert('a2', 'a1')
    ll.insert('a3', 'a2')
    ll.insert('b1', 'a2')
    expect(ll.display()).toEqual([
      [null, 'head', 'a1'],
      ['head', 'a1', 'a2'],
      ['a1', 'a2', 'b1'],
      ['a2', 'b1', 'a3'],
      ['b1', 'a3', null],
    ])
  })
  test('remove and display', () => {
    ll.remove('a1')
    expect(ll.display()).toEqual([
      [null, 'head', 'a2'],
      ['head', 'a2', 'b1'],
      ['a2', 'b1', 'a3'],
      ['b1', 'a3', null],
    ])
    ll.remove('a3')
    expect(ll.display()).toEqual([[null, 'head', 'a2'], ['head', 'a2', 'b1'], ['a2', 'b1', null]])
  })
  test('should find last', () => {
    expect(ll.findLast().element).toBe('b1')
  })
  test('displayReverse', () => {
    expect(ll.display()).toEqual([[null, 'head', 'a2'], ['head', 'a2', 'b1'], ['a2', 'b1', null]])
    ll.insert('hi', 'a2')
    expect(ll.display()).toEqual([
      [null, 'head', 'a2'],
      ['head', 'a2', 'hi'],
      ['a2', 'hi', 'b1'],
      ['hi', 'b1', null],
    ])
    ll.insert('hi2', 'a2')
    expect(ll.display()).toEqual([
      [null, 'head', 'a2'],
      ['head', 'a2', 'hi2'],
      ['a2', 'hi2', 'hi'],
      ['hi2', 'hi', 'b1'],
      ['hi', 'b1', null],
    ])
    expect(ll.displayReverse()).toEqual([
      ['hi', 'b1', null],
      ['hi2', 'hi', 'b1'],
      ['a2', 'hi2', 'hi'],
      ['head', 'a2', 'hi2'],
      [null, 'head', 'a2'],
    ])
  })
})
