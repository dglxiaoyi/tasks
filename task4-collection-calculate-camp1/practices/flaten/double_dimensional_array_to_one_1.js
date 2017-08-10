'use strict';

function double_to_one(collection) {

    collection = collection.join(",").split(",").map(x=>parseInt(x));
    return collection;
}

module.exports = double_to_one;
