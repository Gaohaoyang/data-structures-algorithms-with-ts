import Node from './6DoublyLinkedListNode'

/**
 * 双向链表
 */
class DoublyLinkedList {
  /**
   * 头节点
   */
  private head: Node

  constructor() {
    this.head = new Node('head')
  }

  /**
   * find
   */
  private find(item: any): Node {
    let currNode = this.head
    while (currNode.element && currNode.element !== item) {
      currNode = currNode.next
    }
    return currNode
  }

  /**
   * insert
   * @param newElement 新节点的内容
   * @param item 某一个节点后面
   */
  public insert(newElement: any, item: any): void {
    const newNode = new Node(newElement)
    const currNode = this.find(item)
    newNode.next = currNode.next
    currNode.next = newNode
    newNode.previous = currNode
    if (newNode.next) {
      newNode.next.previous = newNode
    }
  }

  /**
   * remove
   */
  public remove(item: any) {
    const currentNode = this.find(item)
    if (currentNode.next) {
      currentNode.next.previous = currentNode.previous
    } else {
      currentNode.previous.next = null
    }
    currentNode.previous.next = currentNode.next
    currentNode.next = null
    currentNode.previous = null
  }

  /**
   * display
   */
  public display() {
    const result: Array<Array<string>> = []
    let currNode = this.head
    result.push([currNode.previous, currNode.element, currNode.next.element])
    while (currNode.next) {
      currNode = currNode.next
      if (currNode.next) {
        result.push([currNode.previous.element, currNode.element, currNode.next.element])
      } else {
        result.push([currNode.previous.element, currNode.element, currNode.next])
      }
    }
    return result
  }

  /**
   * 找到最后一个节点
   */
  private findLast() {
    let currNode = this.head
    while (currNode.next) {
      currNode = currNode.next
    }
    return currNode
  }

  /**
   * displayReverse
   * 反向输出
   */
  public displayReverse() {
    const result: Array<Array<string>> = []
    let currNode = this.head
    currNode = this.findLast()
    result.push([currNode.previous.element, currNode.element, currNode.next])
    while (currNode.previous) {
      currNode = currNode.previous
      if (currNode.previous) {
        result.push([currNode.previous.element, currNode.element, currNode.next.element])
      } else {
        result.push([currNode.previous, currNode.element, currNode.next.element])
      }
    }
    return result
  }
}

export default DoublyLinkedList
