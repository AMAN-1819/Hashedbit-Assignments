const numberArray = [1, 2, 3, 4, 5];

function calculateSum(arr) {
    return arr.reduce((sum, num) => sum + num, 0);
}

console.log(calculateSum(numberArray)); // 15
