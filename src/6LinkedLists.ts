/**
 * 链表
 * 每个节点都使用一个对象的引用指向它的后继
 * 主要 api 包含
 * - insert
 * - remove
 */

import Node from './6LinkedListsNode'

class LinkedLists {
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
    let result: string = ''
    let currNode = this.head
    while (currNode.next) {
      result += `,${currNode.next.element}`
      currNode = currNode.next
    }
    return result.substr(1)
  }
}

export default LinkedLists
