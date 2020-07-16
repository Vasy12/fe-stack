'use strict';

class MyMapIterator {
  /**
   *
   * @param {MyMap} myMap
   */
  constructor(myMap) {
    this._myMap = myMap;
    this._start = 0;
  }

  next() {
    if (this._start >= this._myMap.size) {
      return {
        value: undefined,
        done: true,
      };
    }

    return {
      value: this._myMap[this._start],
      done: this._start++ >= this._myMap.size
    };
  }
}

class MyMap {

  constructor() {
    this.size = 0;
  }

  set(key, value) {
    for (const item of this) {
      if (item.key === key) {
        item.value = value;
        return this;
      }
    }

    this[this.size++] = {
      key: key,
      value: value,
    };

    return this;
  }

  get(key) {
    for (const item of this) {
      if (item.key === key) {
        return item.value;
      }
    }
  }

  [Symbol.iterator]() {
    return new MyMapIterator( this );
  }

}

const myFirstMap = new MyMap();

myFirstMap.set( 'key', 'VALUE' );
myFirstMap.set( 'key', 'VALUE2' );
myFirstMap.set( 'key', 'VALUE3' );

const keyValue = myFirstMap.get( 'key' );

console.log( keyValue );


