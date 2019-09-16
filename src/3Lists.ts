/**
 * 列表
 * 主要 api 有
 * - listSize
 * - append
 * - remove
 * - find
 * - insert
 * - clear
 * - contains
 * - front
 * - end
 * - next
 * - prev
 */
class List {
  constructor() {
    this.dataStore = []
  }

  private dataStore: any[]

  public listSize: number = 0

  public pos: number = 0

  /**
   * append
   */
  public append(element: any): void {
    this.dataStore[this.listSize] = element
    this.listSize += 1
  }

  /**
   * remove
   */
  public remove(element: any): boolean {
    const index: number = this.find(element)
    if (index === -1) {
      return false
    }
    this.dataStore.splice(index, 1)
    this.listSize -= 1
    return true
  }

  /**
   * find
   */
  public find(element: any): number {
    return this.dataStore.indexOf(element)
  }

  /**
   * length
   */
  public length(): number {
    return this.listSize
  }

  /**
   * toString
   */
  public toString(): string {
    return this.dataStore.join(',')
  }

  /**
   * insert
   */
  public insert(element: any, afterElement: any): boolean {
    const insertPos = this.find(afterElement)
    if (insertPos === -1) {
      return false
    }
    this.dataStore.splice(insertPos + 1, 0, element)
    this.listSize += 1
    return true
  }

  /**
   * clear
   */
  public clear(): void {
    this.dataStore = []
    this.listSize = 0
    this.pos = this.listSize
  }

  /**
   * contains
   */
  public contains(element: any): boolean {
    return this.find(element) !== -1
  }

  /**
   * front
   */
  public front(): void {
    this.pos = 0
  }

  /**
   * end
   */
  public end(): void {
    this.pos = this.listSize - 1
  }

  /**
   * prev
   */
  public prev(): void {
    if (this.pos > 0) {
      this.pos -= 1
    }
  }

  /**
   * next
   */
  public next(): void {
    if (this.pos < this.listSize - 1) {
      this.pos += 1
    }
  }

  /**
   * currPos
   */
  public currPos(): number {
    return this.pos
  }

  /**
   * moveTo
   */
  public moveTo(postion: number): void {
    this.pos = postion
  }

  /**
   * getElement
   */
  public getElement() {
    return this.dataStore[this.pos]
  }
}

export default List
