import LinkedLists from '../src/6LinkedLists'

describe('LinkedLists', () => {
  const ll = new LinkedLists()
  test('insert and display', () => {
    ll.insert('a', 'head')
    expect(ll.display()).toEqual([
      ['head', 'a'],
      ['a', null],
    ])
    ll.insert('chuanshi', 'a')
    expect(ll.display()).toEqual([
      ['head', 'a'],
      ['a', 'chuanshi'],
      ['chuanshi', null],
    ])
    ll.insert('mid', 'a')
    expect(ll.display()).toEqual([
      ['head', 'a'],
      ['a', 'mid'],
      ['mid', 'chuanshi'],
      ['chuanshi', null],
    ])
  })
  test('remove and display', () => {
    ll.remove('c')
    expect(ll.display()).toEqual([
      ['head', 'a'],
      ['a', 'mid'],
      ['mid', 'chuanshi'],
      ['chuanshi', null],
    ])
    ll.remove('mid')
    expect(ll.display()).toEqual([
      ['head', 'a'],
      ['a', 'chuanshi'],
      ['chuanshi', null],
    ])
  })
})
