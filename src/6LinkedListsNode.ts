/**
 * 链表节点类
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

  constructor(element: any) {
    this.element = element
    this.next = null
  }
}
export default Node
