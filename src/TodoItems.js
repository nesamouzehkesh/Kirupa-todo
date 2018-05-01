import React from 'react';
import TodoItem from './TodoItem';

const TodoItems = ({ entries }) => (
    <ul>
        {entries.map(entry => <TodoItem entry={entry} />)}
    </ul>
)

export default TodoItems;


