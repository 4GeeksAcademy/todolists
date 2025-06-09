import React, { useState } from 'react';
import TodoInput from './TodoInput';
import TodoList from './TodoList';

export default function App() {
  const [todos, setTodos] = useState([]);

  // Añade una tarea nueva
  const addTodo = text => {
    setTodos([
      ...todos,
      { id: Date.now().toString(), text }
    ]);
  };

  // Borra la tarea con el id dado
  const deleteTodo = id => {
    setTodos(todos.filter(t => t.id !== id));
  };

  return (
    <div className="todo-app">
      <h1>todos</h1>
      <TodoInput onAdd={addTodo} />
      <TodoList todos={todos} onDelete={deleteTodo} />
    </div>
  );
}