'use strict';

function includes(collection, ch) {
    for (let item of collection) {
        if (item === ch) {
            return true;
        }
    }

    return false;
}

module.exports = function collectSameElements(collectionA, objectB) {
    let result = [];
    collectionA.forEach((item) => {
        if (includes(objectB.value, item.key)) {
            result.push(item.key);
        }
    }, this);
    return result;
}
