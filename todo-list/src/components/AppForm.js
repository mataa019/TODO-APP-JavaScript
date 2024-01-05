import React, { useState } from 'react';

function TodoForm({ addTodo }) {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if the input is not empty
    if (text.trim() !== '') {
      // Call the addTodo function with the input text
      addTodo(text);
      // Clear the input field
      setText('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Hello add new todo..."
      />
      <button type="submit">Add Todo</button>
    </form>
  );
}

export default TodoForm;
