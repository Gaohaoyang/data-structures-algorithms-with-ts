// 队列
class Queue {
  constructor() {
    this.dataStore = []
  }

  private dataStore: any[]

  /**
   * enqueue
   */
  public enqueue(e: any): void {
    this.dataStore.push(e)
  }

  /**
   * dequeue
   */
  public dequeue() {
    this.dataStore.shift()
  }

  /**
   * front
   */
  public front() {
    return this.dataStore[0]
  }

  /**
   * back
   */
  public back() {
    return this.dataStore[this.dataStore.length - 1]
  }

  /**
   * empty
   */
  public isEmpty(): boolean {
    if (this.dataStore.length === 0) {
      return true
    }
    return false
  }

  /**
   * toString
   */
  public toString() {
    return this.dataStore.join(',')
  }
}

export default Queue
