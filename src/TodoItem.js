import React from 'react';

const TodoItem = ({ entry }) => (
    <li key={entry.key}>
        {entry.value}
    </li>
)

export default TodoItem;

