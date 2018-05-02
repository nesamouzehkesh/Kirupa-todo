import React from 'react';
import TodoItem from './TodoItem';

const TodoItems = ({ entries, deleteHandler }) => (
    <ul className="theList">
        {entries.map(entry => <TodoItem entry={entry} onDelete={deleteHandler} />)}
    </ul>
)

export default TodoItems;


