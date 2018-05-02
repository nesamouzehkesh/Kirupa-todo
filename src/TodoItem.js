import React from 'react';

const TodoItem = ({ entry, onDelete }) => (

    <li key={entry.key}>
        {entry.value}
        <button onClick={() => onDelete(entry.key)}>Delete</button>
    </li>
)

export default TodoItem;

