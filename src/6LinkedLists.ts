/**
 * 链表
 * 每个节点都使用一个对象的引用指向它的后继
 * 主要 api 包含
 * - insert
 * - remove
 *
 * JavaScript 中的数组的主要问题是，它是使用对象来实现的，如果发现数组在实际使用时很慢，可以考虑用链表来代替
 */

import Node from './6LinkedListsNode'

class LinkedLists {
  /**
   * 头节点
   */
  public head: Node

  constructor() {
    this.head = new Node('head')
  }

  /**
   * find
   */
  private find(item: any): Node {
    let currNode = this.head

    while (currNode.element !== item) {
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
    const pos = this.find(item)
    newNode.next = pos.next
    pos.next = newNode
  }

  /**
   * remove
   */
  public remove(item: any) {
    const prevNode = this.findPrev(item)
    if (prevNode.next) {
      prevNode.next = prevNode.next.next
    }
  }

  /**
   * findPrev
   * 查找前一个节点
   */
  private findPrev(item: any): Node {
    let currNode = this.head
    while (currNode.next && currNode.next.element !== item) {
      currNode = currNode.next
    }
    return currNode
  }

  /**
   * display
   */
  public display() {
    const result: Array<Array<string>> = []
    let currNode = this.head
    result.push([currNode.element, currNode.next.element])
    while (currNode.next) {
      currNode = currNode.next
      if (currNode.next) {
        result.push([currNode.element, currNode.next.element])
      } else {
        result.push([currNode.element, currNode.next])
      }
    }
    return result
  }
}

export default LinkedLists
