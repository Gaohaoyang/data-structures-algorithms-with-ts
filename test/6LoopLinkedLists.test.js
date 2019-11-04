/**
 * 循环链表 测试
 */

import LoopLinkedLists from '../src/6LoopLinkedLists'

describe('loop linked lists', () => {
  const lll = new LoopLinkedLists()
  test('should loop insert and display', () => {
    expect(lll.display()).toEqual([['head', 'head']])
    lll.insert('zz', 'head')
    expect(lll.display()).toEqual([['head', 'zz'], ['zz', 'head']])
    lll.insert('zzz', 'zz')
    expect(lll.display()).toEqual([['head', 'zz'], ['zz', 'zzz'], ['zzz', 'head']])
  })

  test('should loop remove and display', () => {
    lll.remove('zz')
    expect(lll.display()).toEqual([['head', 'zzz'], ['zzz', 'head']])
    lll.remove('zzz')
    expect(lll.display()).toEqual([['head', 'head']])
  })
})
