import React from 'react';

export default function TodoItem({ todo, onDelete }) {
  return (
    <li className="todo-item">
      <span className="todo-text">{todo.text}</span>
      <button
        className="delete-btn"
        onClick={() => onDelete(todo.id)}
      >✕</button>
    </li>
  );
}