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

const vocabulary = new Map();

vocabulary.set( 'cat', 'кот/кошка' );
vocabulary.set( 'dog', 'собака' );
vocabulary.set( 'squirrel', 'белка' );
vocabulary.set( 'create', 'создать' );
vocabulary.set( 'read', 'читать' );
vocabulary.set( 'update', 'обновить' );
vocabulary.set( 'delete', 'удалить' );

const test = 'cat dog squirrel delete test';
/**
 *
 * @param {string} str
 * @param {string} [separator]
 * @returns {string}
 */
function translate(str, separator = ' ') {

  const englishWords = str.split( separator );

  const russianWords = englishWords.map( function (word) {

    return vocabulary.get( word );

  } );

  return russianWords.join( separator );
}

const translate2 = (str, separator = ' ') => str
  .split( separator )
  .map( w => vocabulary.has( w )
             ? vocabulary.get( w )
             : w )
  .join( separator );


alert( translate2( test ) );