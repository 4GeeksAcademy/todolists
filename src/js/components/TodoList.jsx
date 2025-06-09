import React from 'react';
import TodoItem from './TodoItem';

export default function TodoList({ todos, onDelete }) {
  if (todos.length === 0) {
    return <p className="empty-state">No hay tareas, añadir tareas</p>;
  }

  return (
    <ul className="todo-list">
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onDelete={onDelete}
        />
      ))}
      <li className="todo-footer">
        {todos.length} item{todos.length > 1 ? 's' : ''} left
      </li>
    </ul>
  );
}