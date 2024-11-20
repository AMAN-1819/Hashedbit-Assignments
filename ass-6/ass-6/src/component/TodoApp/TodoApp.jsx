
import React, { useState } from 'react';
import './TodoApp.css';

const TodoApp = () => {
    const [task, setTask] = useState('');
    const [todos, setTodos] = useState([]);

    // Add a new task
    const addTask = () => {
        if (task.trim() !== '') {
            setTodos([...todos, { text: task, completed: false }]);
            setTask('');
        }
    };

    // Toggle task completion
    const toggleComplete = (index) => {
        const newTodos = [...todos];
        newTodos[index].completed = !newTodos[index].completed;
        setTodos(newTodos);
    };

    // Delete a task
    const deleteTask = (index) => {
        setTodos(todos.filter((_, i) => i !== index));
    };

    return (
        <div className="todo-app">
            <h2>To-Do List</h2>
            <div className="input-section">
                <input
                    type="text"
                    placeholder="Add a new task"
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                />
                <button onClick={addTask}>Add</button>
            </div>
            <ul className="todo-list">
                {todos.map((todo, index) => (
                    <li key={index} className={todo.completed ? 'completed' : ''}>
                        <span onClick={() => toggleComplete(index)}>{todo.text}</span>
                        <button onClick={() => deleteTask(index)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TodoApp;
