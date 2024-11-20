import React, { useState } from 'react';
import './Calculator.css';

const Calculator = () => {
    const [num1, setNum1] = useState('');
    const [num2, setNum2] = useState('');
    const [result, setResult] = useState(null);

    const calculate = (operation) => {
        const number1 = parseFloat(num1);
        const number2 = parseFloat(num2);
        if (isNaN(number1) || isNaN(number2)) {
            setResult('Please enter valid numbers');
            return;
        }
        switch (operation) {
            case 'add':
                setResult(number1 + number2);
                break;
            case 'subtract':
                setResult(number1 - number2);
                break;
            case 'multiply':
                setResult(number1 * number2);
                break;
            case 'divide':
                setResult(number2 !== 0 ? number1 / number2 : 'Cannot divide by zero');
                break;
            default:
                setResult('Invalid operation');
        }
    };

    return (
        <div className="calculator">
            <input
                type="number"
                placeholder="Enter first number"
                value={num1}
                onChange={(e) => setNum1(e.target.value)}
            />
            <input
                type="number"
                placeholder="Enter second number"
                value={num2}
                onChange={(e) => setNum2(e.target.value)}
            />
            <button onClick={() => calculate('add')}>Add</button>
            <button onClick={() => calculate('subtract')}>Subtract</button>
            <button onClick={() => calculate('multiply')}>Multiply</button>
            <button onClick={() => calculate('divide')}>Divide</button>
            <div className="result">Result: {result}</div>
        </div>
    );
};

export default Calculator;
