import LinkedLists from '../src/6LinkedLists'

describe('LinkedLists', () => {
  const ll = new LinkedLists()
  test('insert and display', () => {
    ll.insert('a', 'head')
    expect(ll.display()).toBe('a')
    ll.insert('chuanshi', 'a')
    expect(ll.display()).toBe('a,chuanshi')
    ll.insert('mid', 'a')
    expect(ll.display()).toBe('a,mid,chuanshi')
  })
  test('remove and display', () => {
    ll.remove('c')
    expect(ll.display()).toBe('a,mid,chuanshi')
    ll.remove('mid')
    expect(ll.display()).toBe('a,chuanshi')
  })
})
