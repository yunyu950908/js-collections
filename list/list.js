const { ListNode } = require('./list_node');

class List {
  /**
   * @constructor
   */
  constructor() {
    /**
     * @type {ListNode}
     */
    this._root = new ListNode(null);
    /**
     * @type {number}
     */
    this._len = 0;
    this._init();
  }

  /**
   * @private
   */
  _init() {
    this._root._next = this._root;
    this._root._prev = this._root;
  }

  /**
   * @public
   * @return {number}
   */
  len() {
    return this._len;
  }

  /**
   * @public
   * @return {ListNode}
   */
  front() {
    if (this._len === 0) {
      return null;
    }
    return this._root._next;
  }

  /**
   * @public
   * @return {ListNode}
   */
  back() {
    if (this._len === 0) {
      return null;
    }
    return this._root._prev;
  }

  /**
   * @private
   * @param {ListNode} e
   * @param {ListNode} at
   * @return {ListNode}
   */
  _insert(e, at) {
    const n = at._next;
    at._next = e;
    e._prev = at;
    e._next = n;
    n._prev = e;
    e._list = this;
    this._len++;
    return e;
  }

  /**
   * @private
   * @param {*} v
   * @param {ListNode} at
   * @return {ListNode}
   */
  _insertValue(v, at) {
    return this._insert(new ListNode(v), at);
  }

  /**
   * @private
   * @param {ListNode} e
   * @return {ListNode}
   */
  _remove(e) {
    e._prev._next = e._next;
    e._next._prev = e._prev;
    e._next = null; // avoid memory leaks
    e._prev = null; // avoid memory leaks
    e._list = null;
    this._len--;
    return e;
  }

  /**
   * @private
   * @param {ListNode} e
   * @param {ListNode} at
   * @return {ListNode}
   */
  _move(e, at) {
    if (e === at) {
      return e;
    }
    e._prev._next = e._next;
    e._next._prev = e._prev;

    const n = at._next;
    at._next = e;
    e._prev = at;
    e._next = n;
    n._prev = e;

    return e;
  }

  /**
   * @public
   * @param {ListNode} e
   * @return {*}
   */
  remove(e) {
    if (e._list === this) {
      this._remove(e);
    }
    return e.value;
  }

  /**
   * @public
   * @param {*} v
   * @return {ListNode}
   */
  pushFront(v) {
    return this._insertValue(v, this._root);
  }

  /**
   * @public
   * @param {*} v
   * @return {ListNode}
   */
  pushBack(v) {
    return this._insertValue(v, this._root._prev);
  }

  /**
   * @public
   * @param {*} v
   * @param {ListNode} mark
   * @return {ListNode}
   */
  insertBefore(v, mark) {
    if (mark._list !== this) {
      return null;
    }
    return this._insertValue(v, mark._prev);
  }

  /**
   * @public
   * @param {*} v
   * @param {ListNode} mark
   * @return {ListNode}
   */
  insertAfter(v, mark) {
    if (mark._list !== this) {
      return null;
    }
    return this._insertValue(v, mark);
  }

  /**
   * @public
   * @param {ListNode} e
   */
  moveToFront(e) {
    if (e._list !== this || this._root._next === e) {
      return;
    }
    this._move(e, this._root);
  }

  /**
   * @public
   * @param {ListNode} e
   */
  moveToBack(e) {
    if (e._list !== this || this._root._prev === e) {
      return;
    }
    this._move(e, this._root._prev);
  }

  /**
   * @public
   * @param {ListNode} e
   * @param {ListNode} mark
   */
  moveBefore(e, mark) {
    if (e._list !== this || e === mark || mark._list !== this) {
      return;
    }
    this._move(e, mark._prev);
  }

  /**
   * @public
   * @param {ListNode} e
   * @param {ListNode} mark
   */
  moveAfter(e, mark) {
    if (e._list !== this || e === mark || mark._list !== this) {
      return;
    }
    this._move(e, mark);
  }

  /**
   * @public
   * @param {List} other
   */
  pushBackList(other) {
    for (let i = other.len(), e = other.front(); i > 0; i -= 1, e = e.next()) {
      this._insertValue(e.value, this._root._prev);
    }
  }

  /**
   * @public
   * @param {List} other
   */
  pushFrontList(other) {
    for (let i = other.len(), e = other.back(); i > 0; i -= 1, e = e.prev()) {
      this._insertValue(e.value, this._root);
    }
  }
}

module.exports = {
  List,
};
