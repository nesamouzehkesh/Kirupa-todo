import React from 'react';
import TodoItem from './TodoItem';

const TodoItems = ({ entries }) => (
    <ul className="theList">
        {entries.map(entry => <TodoItem entry={entry} />)}
    </ul>
)

export default TodoItems;


