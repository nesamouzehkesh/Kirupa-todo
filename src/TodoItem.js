import React from 'react';

const TodoItem = ({ entry, onDelete }) => (

    <li key={entry.key}>
        <p>{entry.value}</p>
        <button onClick={() => onDelete(entry.key)}>Delete</button>
    </li>
)

export default TodoItem;

