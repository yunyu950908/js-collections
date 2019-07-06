const { List } = require('..');

class Stack {
  /**
   * @constructor
   */
  constructor() {
    /**
     * @private
     * @type {List}
     */
    this._stack = new List();
  }

  /**
   * @public
   * @return {number}
   */
  len() {
    return this._stack.len();
  }

  /**
   * @public
   * @param {*} v
   */
  push(v) {
    this._stack.pushBack(v);
  }

  /**
   * @public
   * @return {*}
   */
  pop() {
    return this._stack.remove(this._stack.back());
  }

  /**
   * @public
   * @return {ListNode}
   */
  peek() {
    return this._stack.back();
  }
}

module.exports = {
  Stack,
};
