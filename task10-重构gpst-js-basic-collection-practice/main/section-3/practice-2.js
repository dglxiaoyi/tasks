'use strict';

function includes(collection, ch) {
    for (let item of collection) {
        if (item === ch) {
            return true;
        }
    }

    return false;
}

module.exports = function createUpdatedCollection(collectionA, objectB) {
    let result = [];
    collectionA.forEach((item) =>{
       let key = item.key;
        let count = item.count;
        if (includes(objectB.value, key)) {
            count = count - Math.floor(count / 3);
        }
        result.push({key, count});
    },this);
    return result;
}
