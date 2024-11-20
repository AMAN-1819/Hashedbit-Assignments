function mergeObjects(obj1, obj2) {
    return Object.assign({}, obj1, obj2); // Merges into a new object
}

const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };
console.log(mergeObjects(obj1, obj2)); // { a: 1, b: 3, c: 4 }
