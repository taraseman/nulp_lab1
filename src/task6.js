'use strict'

function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > arr[i + 1]) {
        const a = arr[i]
        const b = arr[i + 1]
        arr[i] = b
        arr[i + 1] = a
      }
    }
    return arr;
}

console.log(bubbleSort([1, 6, 7, 322, 4, 65]));