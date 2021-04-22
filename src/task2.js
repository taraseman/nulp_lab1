'use strict'

function hasIncludedSubString(string, subString) {
  return string.includes(subString);
}

const string = 'ab abc abcd cc df';
const subString = 'ab';

console.log(hasIncludedSubString(string, subString));