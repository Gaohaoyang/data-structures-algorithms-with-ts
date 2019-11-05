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

describe('advance back and show', () => {
  const ll = new DoublyLinkedList()
  test('should show', () => {
    ll.insert('a1', 'head')
    ll.insert('a2', 'head')
    ll.insert('a3', 'head')
    expect(ll.show()).toEqual([null, 'head', 'a3'])
  })
  test('should display', () => {
    expect(ll.display()).toEqual([
      [null, 'head', 'a3'],
      ['head', 'a3', 'a2'],
      ['a3', 'a2', 'a1'],
      ['a2', 'a1', null],
    ])
  })
  test('should advance show', () => {
    ll.advance(2)
    expect(ll.show()).toEqual(['a3', 'a2', 'a1'])
  });
  test('should back show', () => {
    ll.back(1)
    expect(ll.show()).toEqual(['head', 'a3', 'a2'])
    ll.back(1)
    expect(ll.show()).toEqual([null, 'head', 'a3'])
    ll.advance(3)
    expect(ll.show()).toEqual(['a2', 'a1', null])
  });

  const ll2 = new DoublyLinkedList()
  test('should show', () => {
    expect(ll2.show()).toEqual([null, 'head', null])
  })
})
