'use strict';

/**
 * LIFO - last in first out
 */
class Stack {

  constructor(maxSize = 10000, ...args) {
    if (typeof maxSize !== 'number') {
      throw new TypeError();
    }
    if (isNaN( maxSize ) || maxSize < 0 || !Number.isInteger( maxSize )) {
      throw new RangeError();
    }

    this._size = 0;
    this._maxSize = maxSize;

    for (let arg of args) {
      this.push( arg );
    }
  }

  get isEmpty() {
    return this._size === 0;
  }

  get size() {
    return this._size;
  }

  push(value) {
    if (this._size >= this._maxSize) {
      throw new RangeError( 'Stack overflow' );
    }
    this[`_${this._size++}`] = value;

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

const userStr = prompt() ?? '';

const options = {
  brackets: {
    '@': '&'
  }
};

const result = checkCorrectBracketsSequence( userStr, options );

alert( result
       ? 'RIGHT'
       : 'WRONG' );

/**
 *
 * @param {string} str
 * @param {object} [options]
 * @param {object} options.brackets
 * @returns {boolean}
 */
function checkCorrectBracketsSequence(str, options = {
  brackets: {
    '(': ')',
  }
}) {
  const bracketsStack = new Stack( str.length );
  const brackets = options.brackets;
  const closeBrackets = Object.values( brackets );
  for (const s of str) {
    if (brackets[s]) {
      bracketsStack.push( s );
      continue;
    }
    if (closeBrackets.includes( s ) && bracketsStack.isEmpty) {
      return false;
    }
    if (brackets[bracketsStack.pick()] === s) {
      bracketsStack.pop();
    }
  }

  return bracketsStack.isEmpty;
}


