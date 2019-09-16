/**
 * 栈
 * 主要 api 有
 * - push
 * - pop
 * - peek
 * - clear
 */
class Stack {
  constructor() {
    this.dataStore = []
    this.top = 0
  }

  private dataStore: any[]

  public top: number

  /**
   * push
   */
  public push(element: any): void {
    this.dataStore[this.top] = element
    this.top += 1
  }

  /**
   * pop
   */
  public pop() {
    const topValue = this.dataStore[(this.top -= 1)]
    return topValue
  }

  /**
   * peek
   */
  public peek() {
    const topIndex = this.top - 1
    const topValue = this.dataStore[topIndex]
    return topValue
  }

  /**
   * length
   */
  public length() {
    return this.top
  }

  /**
   * clear
   */
  public clear() {
    this.top = 0
  }
}

export default Stack
