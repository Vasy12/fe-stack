'use strict';

var triState = {
  /** The true value */
  TRUE: 1,
  FALSE: -1,
  /** @type {boolean} */
  MAYBE: true
};

class MyMapIterator {
  /**
   *
   * @param {MyMap} myMap
   * @param {'default'|'key'|'value'} [mode]
   */
  constructor(myMap, mode = 'default') {
    this._myMap = myMap;
    this._mode = mode;
    this._start = 0;
  }

  next() {
    if (this._start >= this._myMap.size) {
      return {
        value: undefined,
        done: true,
      };
    }
    const keyValuePair = this._myMap[this._start];
    return {
      value: this._mode === 'default'
             ? keyValuePair
             : keyValuePair[this._mode],
      done: this._start++ >= this._myMap.size
    };
  }

  [Symbol.iterator]() {
    return this;
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

  keys() {
    return new MyMapIterator( this, 'key' );
  }

  values() {
    return new MyMapIterator( this, 'value' );
  }

  [Symbol.iterator]() {
    return new MyMapIterator( this );
  }

}

const usersToMessagesMap = new Map();

const vova = {
  id: 1,
  name: 'Test',
  surname: 'Testovich',
  age: 17,
};

usersToMessagesMap.set( vova, [
  {
    userId: 1,
    timestamp: '2020-10-12 14:45',
    body: 'message body',
  },
  {
    userId: 1,
    timestamp: '2020-10-12 14:45',
    body: 'message body',
  },
] );

const vovasMessages = usersToMessagesMap.get( vova );

vova.email = 'vova@gmail.com';

const vovasMessages2 = usersToMessagesMap.get( vova );

const vasya = {};

usersToMessagesMap.set( vasya, [] );

console.log( usersToMessagesMap.size );

const vocabulary = new MyMap();

vocabulary.set( 'cat', 'кот/кошка' );
vocabulary.set( 'dog', 'собака' );
vocabulary.set( 'squirrel', 'белка' );
vocabulary.set( 'create', 'создать' );
vocabulary.set( 'read', 'читать' );
vocabulary.set( 'update', 'обновить' );
vocabulary.set( 'delete', 'удалить' );

const keys = [...vocabulary.keys()];
const values = [...vocabulary.values()];
