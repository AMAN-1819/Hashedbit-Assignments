const person = {
    name: "Alice",
    age: 25,
    occupation: "Engineer"
};

function greetPerson(obj) {
    console.log(`Hello, my name is ${obj.name}, I am ${obj.age} years old and work as a ${obj.occupation}.`);
}

greetPerson(person);
// Output: "Hello, my name is Alice, I am 25 years old and work as a Engineer."
