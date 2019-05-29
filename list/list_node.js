class ListNode {
  /**
   * @constructor
   * @param {*} v
   */
  constructor(v) {
    /**
     * @public
     * @type {*}
     */
    this.Value = v;
    /**
     * @type {ListNode}
     */
    this._next = null;

    /**
     * @type {ListNode}
     */
    this._prev = null;

    /**
     * @type {List}
     */
    this._list = null;
  }

  /**
   * @public
   * @return {ListNode}
   */
  next() {
    const p = this._next;
    if (this._list && p !== this._list._root) {
      return p;
    }
    return null;
  }

  /**
   * @public
   * @return {ListNode}
   */
  prev() {
    const p = this._prev;
    if (this._list && p !== this._list._root) {
      return p;
    }
    return null;
  }
}

module.exports = {
  ListNode,
};
