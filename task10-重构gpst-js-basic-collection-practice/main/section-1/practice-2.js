'use strict';

function includes(collection, ch) {
    for (let item of collection) {
        if (item === ch) {
            return true;
        }
    }

    return false;
}

module.exports = function collectSameElements(collectionA, collectionB) {
    let result = [];
    collectionA.forEach((item) => {
        if (includes(collectionB[0], item)) {
            result.push(item);
        }
    }, this);
    return result;
}
