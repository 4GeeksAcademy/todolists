import React, { useState } from 'react';

export default function TodoInput({ onAdd }) {
  const [value, setValue] = useState('');

  const handleKeyDown = e => {
    if (e.key === 'Enter' && value.trim() !== '') {
      onAdd(value.trim());
      setValue('');
    }
  };

  return (
    <input
      className="todo-input"
      type="text"
      placeholder="What needs to be done?"
      value={value}
      onChange={e => setValue(e.target.value)}
      onKeyDown={handleKeyDown}
    />
  );
}