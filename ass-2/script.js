function openTab(event, tabId) {
    const tabContent = document.getElementsByClassName("tab-content");
    for (let i = 0; i < tabContent.length; i++) {
        tabContent[i].classList.remove("active");
    }
    document.getElementById(tabId).classList.add("active");
}

// Question 1: Display Even Numbers
function displayEvenNumbers() {
    let result = [];
    for (let i = 2; i <= 100; i += 2) {
        result.push(i);
    }
    document.getElementById("evenNumbers").innerText = result.join(', ');
}

// Question 2: Calculator
function calculate() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const operation = document.getElementById("operation").value;
    let result;

    switch (operation) {
        case "add":
            result = num1 + num2;
            break;
        case "subtract":
            result = num1 - num2;
            break;
        case "multiply":
            result = num1 * num2;
            break;
        case "divide":
            result = num1 / num2;
            break;
        default:
            result = "Invalid operation";
    }
    document.getElementById("calcResult").innerText = "Result: " + result;
}

// Question 3: Calculate Tax
function findTax() {
    const salary = parseFloat(document.getElementById("salary").value);
    let tax;

    switch (true) {
        case (salary > 0 && salary <= 500000):
            tax = 0;
            break;
        case (salary > 500000 && salary <= 1000000):
            tax = salary * 0.1;
            break;
        case (salary > 1000000 && salary <= 1500000):
            tax = salary * 0.2;
            break;
        case (salary > 1500000):
            tax = salary * 0.3;
            break;
        default:
            tax = "Invalid salary";
    }
    document.getElementById("taxResult").innerText = "Tax: " + tax;
}

// Question 4: Sum of Product of Digits
function sumOfProducts() {
    const n1 = document.getElementById("n1").value.padStart(2, "0");
    const n2 = document.getElementById("n2").value.padStart(2, "0");
    const length = Math.max(n1.length, n2.length);
    let sum = 0;

    for (let i = 0; i < length; i++) {
        const digit1 = parseInt(n1[n1.length - 1 - i] || "0");
        const digit2 = parseInt(n2[n2.length - 1 - i] || "0");
        sum += digit1 * digit2;
    }
    document.getElementById("productSumResult").innerText = "Sum of Products: " + sum;
}
