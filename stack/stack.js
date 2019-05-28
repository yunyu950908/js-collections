const { List } = require('../list/list');

class Stack {
  /**
   * @private
   * @type {List}
   */
  stack = new List();

  /**
   * @public
   * @return {number}
   */
  Len() {
    return this.stack.Len();
  }

  /**
   * @public
   * @param {*} v
   */
  Push(v) {
    this.stack.PushBack(v);
  }

  /**
   * @public
   * @param {*} v
   * @return {*}
   */
  Pop(v) {
    return this.stack.Remove(this.stack.Back());
  }

  /**
   * @public
   * @return {ListNode}
   */
  Peek() {
    return this.stack.Back();
  }
}

module.exports = {
  Stack,
};
