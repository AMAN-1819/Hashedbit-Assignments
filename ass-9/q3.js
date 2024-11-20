function modifyArray(arr) {
    arr.push("New Element"); // Add to the end
    arr.pop(); // Remove the last element
    return arr;
}

const sampleArray = [1, 2, 3];
console.log(modifyArray(sampleArray)); // [1, 2, 3]
