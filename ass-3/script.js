function showTab(tabNumber) {
    const contents = document.querySelectorAll('.tab-content');
    contents.forEach(content => content.classList.remove('active'));
    document.getElementById(`content${tabNumber}`).classList.add('active');
}

// Q1 Solution
document.getElementById('content1').innerText = `
let states = ['Andhra Pradesh', 'Odisha', 'Uttar Pradesh', 'Maharashtra', 'Delhi'];
let filteredStates = states.filter(state => !['A', 'E', 'I', 'O', 'U'].includes(state[0].toUpperCase()));
console.log(filteredStates);`;

// Q2 Solution
document.getElementById('content2').innerText = `
let str = 'I love my India';
let reversed = str.split(' ').reverse().join(' ');
console.log(reversed);`;

// Q3 Solution
document.getElementById('content3').innerText = `
let string = ['I', 'N', 'D', 'I', 'A'];
string.splice(2, 0, 'O', 'N', 'E', 'S', 'I');
console.log(string.join(''));`;

// Q4 Solution
document.getElementById('content4').innerText = `
let text = 'This is a sample string with more than twenty characters';
let vowels = text.match(/[aeiou]/gi)?.length || 0;
let consonants = text.match(/[^aeiou\s\d]/gi)?.length || 0;
console.log({ vowels, consonants });`;

// Q5 Solution
document.getElementById('content5').innerText = `
function correctfn(string, wrong, correct) {
    return string.replace(wrong, correct);
}
console.log(correctfn('I am a bad boy', 'bad', 'good'));`;

// Q6 Solution
document.getElementById('content6').innerText = `
let inputArr = [1, 2, 3, 9, 10, 7, 5, 4, 3];
let result = inputArr.filter(num => num > 5);
console.log(result);`;

// Q7 Solution
document.getElementById('content7').innerText = `
const students = [
    { name: "Ram", scores: [80, 70, 60] },
    { name: "Mohan", scores: [80, 70, 90] },
    { name: "Sai", scores: [60, 70, 80] },
    { name: "Hemang", scores: [90, 90, 80, 80] },
];
let output = students.map(student => ({
    name: student.name,
    average: Math.round(student.scores.reduce((a, b) => a + b, 0) / student.scores.length)
}));
console.log(output);`;

// Q8 Solution
document.getElementById('content8').innerText = `
function sumToSingleDigit(num) {
    while (num >= 10) {
        num = num.toString().split('').reduce((sum, digit) => sum + +digit, 0);
    }
    return num;
}
console.log(sumToSingleDigit(456));`;

// Q9 Solution
document.getElementById('content9').innerText = `
function countWords(paragraph) {
    return paragraph.trim().split(/\s+/).length;
}
console.log(countWords('This is a sample paragraph with multiple words.'));`;

// Q10 Solution
document.getElementById('content10').innerText = `
function reverseString(str) {
    return str.split('').reverse().join('');
}
console.log(reverseString('Hello'));`;

// Q11 Solution
document.getElementById('content11').innerText = `
let input = {
    student1: { subject1: 44, subject2: 56, subject3: 87, subject4: 97, subject5: 37 },
    student2: { subject1: 44, subject2: 56, subject3: 87, subject4: 97, subject5: 37 },
    student3: { subject1: 44, subject2: 56, subject3: 87, subject4: 97, subject5: 37 },
};
let output = Object.fromEntries(Object.entries(input).map(([key, subjects]) => {
    let values = Object.values(subjects);
    return [key, { average: Math.round(values.reduce((a, b) => a + b, 0) / values.length) }];
}));
console.log(output);`;
