'use strict';

function find_first_even(collection) {
  var index = collection.findIndex(ele=>ele%2===0);
  var result = collection[index];
  return result;
}

module.exports = find_first_even;

