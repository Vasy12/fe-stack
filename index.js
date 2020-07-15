'use strict';

const arr = [87, 14, 54, 51, 0, 545421, 5, 41, 2, 4, 4, 21, 57,];

const sortedArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 9, 9, 10, 11, 11, 11, 12, 13, 14, 15];

const test = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

arr.sort( (a, b) => a - b );

console.table( arr );
console.log( binarySearch( arr, 0 ) );
console.log( binarySearch( arr, 51 ) );
console.log( binarySearch( arr, 1 ) );
console.log( binarySearch( arr, 3 ) ); // 3
console.log( binarySearch( arr, 545421 ) ); // 7
console.log( binarySearch( arr, -98754 ) ); // -1

function binarySearch(arr, value) {

  let start = 0;
  let end = arr.length - 1;

  let middle = Math.ceil( (start + end) / 2 );

  while (true) {
    if (value === arr[middle]) {
      return middle;
    }
    if (end - start === 1) {
      break;
    }
    if (value > arr[middle]) {
      start = middle;
      middle = Math.ceil( (start + end) / 2 );
    } else {
      end = middle;
      middle = Math.floor( (start + end) / 2 );
    }
  }
  return -1;
}

/**
 *
 * @param {[]} arr
 * @param {*} value
 * @returns {number}
 */
function linearSearch(arr, value) {

  for (let i = 0; i < arr.length; i++) {
    if (value === arr[i]) {
      return i;
    }
  }

  return -1;
}


