'use strict';

function calculate_elements_sum(collection, element) {
  var result = collection.findIndex(ele=>ele === element);
  return result;
}

module.exports = calculate_elements_sum;

