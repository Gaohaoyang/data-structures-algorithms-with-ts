/**
 * 双向链表节点类
 * Node
 */
class Node {
  /**
   * 当前节点元素
   */
  public element: any

  /**
   * 后继
   */
  public next: Node

  /**
   * 前驱
   */
  public previous: Node

  constructor(element: any) {
    this.element = element
    this.next = null
    this.previous = null
  }
}
export default Node
