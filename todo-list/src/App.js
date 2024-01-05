import React, { useState } from 'react';
import AppForm from './components/AppForm';
import AppList from './components/AppList';
import AppTodo from './components/AppTodo';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    // Create a new todo object with an ID and text
    const newTodo = {
      id: new Date().getTime(),
      text,
      completed: false,
    };

    // Update the todos state with the new todo
    setTodos([...todos, newTodo]);
  };

  const toggleTodo = (id) => {
    // Toggle the 'completed' property of the clicked todo
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const removeTodo = (id) => {
    // Remove the todo with the given ID from the todos state
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div>
      <div className="header">
        <h1>TODO LIST APP</h1>
      </div>
      <div className="App">
        <AppForm addTodo={addTodo} />
        <AppList todos={todos} toggleTodo={toggleTodo} removeTodo={removeTodo} />
        <AppTodo total={todos.length} />
      </div>
    </div>
  );
}

export default App;
