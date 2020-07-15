'use strict';

class Stack {

  constructor(maxSize = 10000) {
    if (typeof maxSize !== 'number') {
      throw new TypeError();
    }
    if (isNaN( maxSize ) || maxSize < 0 || !Number.isInteger( maxSize )) {
      throw new RangeError();
    }

    this._size = 0;
    this._maxSize = maxSize;
  }

  get isEmpty() {
    return this._size === 0;
  }

  push(value) {

    this[`_${this._size++}`] = value;

    if (this._size > this._maxSize) {
      throw new RangeError( 'Stack overflow' );
    }

    return this._size;
  }

  pop() {
    if (this.isEmpty) {
      return;
    }
    const lastItem = this[`_${--this._size}`];
    delete this[`_${this._size}`];
    return lastItem;

  }

  pick() {
    if (this.isEmpty) {
      return;
    }
    return this[`_${this._size - 1}`];
  }

}

const stack1 = new Stack( 10 );
