function getObjectKeys(obj) {
    return Object.keys(obj);
}

const sampleObject = { a: 1, b: 2, c: 3 };
console.log(getObjectKeys(sampleObject)); // ["a", "b", "c"]
