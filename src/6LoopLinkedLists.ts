/**
 * 循环链表
 */
import LinkedLists from './6LinkedLists'

class LoopLinkedLists extends LinkedLists {
  constructor() {
    super()
    this.head.next = this.head
  }

  public display() {
    const result: Array<Array<string>> = []
    let currNode = this.head
    result.push([currNode.element, currNode.next.element])
    while (currNode.next && currNode.next.element !== 'head') {
      currNode = currNode.next
      result.push([currNode.element, currNode.next.element])
    }
    return result
  }
}

export default LoopLinkedLists
