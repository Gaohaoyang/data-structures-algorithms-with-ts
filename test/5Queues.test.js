import Queue from '../src/5Queues'

describe('Queue', () => {
  const q = new Queue()
  q.enqueue(1123)
  q.enqueue('chuanshi')
  q.enqueue('666')
  test('queue', () => {
    expect(q.toString()).toBe('1123,chuanshi,666')
    q.dequeue()
    expect(q.toString()).toBe('chuanshi,666')
    expect(q.front()).toBe('chuanshi')
    expect(q.back()).toBe('666')
    expect(q.isEmpty()).toBe(false)
    q.dequeue()
    q.dequeue()
    expect(q.isEmpty()).toBe(true)
  })
})
