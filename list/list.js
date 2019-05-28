class ListNode {
  /**
   * @type {ListNode}
   */
  next = null;

  /**
   * @type {ListNode}
   */
  prev = null;

  /**
   * @type {List}
   */
  list = null;

  /**
   * @public
   * @type {*}
   */
  Value = null;

  /**
   * @constructor
   * @param {*} v
   */
  constructor(v) {
    this.Value = v;
  }

  /**
   * @public
   * @return {ListNode}
   */
  Next() {
    const p = this.next;
    if (this.list && p !== this.list.root) {
      return p;
    }
    return null;
  }

  /**
   * @public
   * @return {ListNode}
   */
  Prev() {
    const p = this.prev;
    if (this.list && p !== this.list.root) {
      return p;
    }
    return null;
  }
}

class List {
  /**
   * @type {ListNode}
   */
  root = new ListNode(null);

  /**
   * @type {number}
   */
  len = 0;

  /**
   * @constructor
   */
  constructor() {
    this.init();
  }

  /**
   * @private
   */
  init() {
    this.root.next = this.root;
    this.root.prev = this.root;
  }

  /**
   * @public
   * @return {number}
   */
  Len() {
    return this.len;
  }

  /**
   * @public
   * @return {ListNode}
   */
  Front() {
    if (this.len === 0) {
      return null;
    }
    return this.root.next;
  }

  /**
   * @public
   * @return {ListNode}
   */
  Back() {
    if (this.len === 0) {
      return null;
    }
    return this.root.prev;
  }

  /**
   * @private
   * @param {ListNode} e
   * @param {ListNode} at
   * @return {ListNode}
   */
  insert(e, at) {
    const n = at.next;
    at.next = e;
    e.prev = at;
    e.next = n;
    n.prev = e;
    e.list = this;
    this.len++;
    return e;
  }

  /**
   * @private
   * @param {*} v
   * @param {ListNode} at
   * @return {ListNode}
   */
  insertValue(v, at) {
    return this.insert(new ListNode(v), at);
  }

  /**
   * @private
   * @param {ListNode} e
   * @return {ListNode}
   */
  remove(e) {
    e.prev.next = e.next;
    e.next.prev = e.prev;
    e.next = null; // avoid memory leaks
    e.prev = null; // avoid memory leaks
    e.list = null;
    this.len--;
    return e;
  }

  /**
   * @private
   * @param {ListNode} e
   * @param {ListNode} at
   * @return {ListNode}
   */
  move(e, at) {
    if (e === at) {
      return e;
    }
    e.prev.next = e.next;
    e.next.prev = e.prev;

    const n = at.next;
    at.next = e;
    e.prev = at;
    e.next = n;
    n.prev = e;

    return e;
  }

  /**
   * @public
   * @param {ListNode} e
   * @return {*}
   */
  Remove(e) {
    if (e.list === this) {
      this.remove(e);
    }
    return e.Value;
  }

  /**
   * @public
   * @param {*} v
   * @return {ListNode}
   */
  PushFront(v) {
    return this.insertValue(v, this.root);
  }

  /**
   * @public
   * @param {*} v
   * @return {ListNode}
   */
  PushBack(v) {
    return this.insertValue(v, this.root.prev);
  }

  /**
   * @public
   * @param {*} v
   * @param {ListNode} mark
   * @return {ListNode}
   */
  InsertBefore(v, mark) {
    if (mark.list !== this) {
      return null;
    }
    return this.insertValue(v, mark.prev);
  }

  /**
   * @public
   * @param {*} v
   * @param {ListNode} mark
   * @return {ListNode}
   */
  InsertAfter(v, mark) {
    if (mark.list !== this) {
      return null;
    }
    return this.insertValue(v, mark);
  }

  /**
   * @public
   * @param {ListNode} e
   */
  MoveToFront(e) {
    if (e.list !== this || this.root.next === e) {
      return;
    }
    this.move(e, this.root);
  }

  /**
   * @public
   * @param {ListNode} e
   */
  MoveToBack(e) {
    if (e.list !== this || this.root.prev === e) {
      return;
    }
    this.move(e, this.root.prev);
  }

  /**
   * @public
   * @param {ListNode} e
   * @param {ListNode} mark
   */
  MoveBefore(e, mark) {
    if (e.list !== this || e === mark || mark.list !== this) {
      return;
    }
    this.move(e, mark.prev);
  }

  /**
   * @public
   * @param {ListNode} e
   * @param {ListNode} mark
   */
  MoveAfter(e, mark) {
    if (e.list !== this || e === mark || mark.list !== this) {
      return;
    }
    this.move(e, mark);
  }

  /**
   * @public
   * @param {List} other
   */
  PushBackList(other) {
    for (let i = other.Len(), e = other.Front(); i > 0; i -= 1, e = e.Next()) {
      this.insertValue(e.Value, this.root.prev);
    }
  }

  /**
   * @public
   * @param {List} other
   */
  PushFrontList(other) {
    for (let i = other.Len(), e = other.Back(); i > 0; i -= 1, e = e.Prev()) {
      this.insertValue(e.Value, this.root);
    }
  }
}

module.exports = {
  List,
  ListNode,
};
