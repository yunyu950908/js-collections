const { List } = require('../list/list');

class Stack {
  /**
   * @constructor
   */
  constructor() {
    /**
     * @private
     * @type {List}
     */
    this.stack = new List();
  }

  /**
   * @public
   * @return {number}
   */
  len() {
    return this.stack.len();
  }

  /**
   * @public
   * @param {*} v
   */
  push(v) {
    this.stack.pushBack(v);
  }

  /**
   * @public
   * @return {*}
   */
  pop() {
    return this.stack.remove(this.stack.back());
  }

  /**
   * @public
   * @return {ListNode}
   */
  peek() {
    return this.stack.back();
  }
}

module.exports = {
  Stack,
};
