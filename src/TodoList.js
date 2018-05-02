import React, { Component } from 'react';
import TodoItems from './TodoItems';
import './TodoList.css';

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.addItem = this.addItem.bind(this);

        this.state = {
            items: []
        };
    }

    addItem(e) {
        e.preventDefault();

        const item = {
            key: Date.now(),
            value: this._inputElement.value
        }

        this.setState({
            items: [...this.state.items, item]
        });
        /**
         * Or:
         * this.setState((prevState) => {
                return { 
                    items: prevState.items.concat(newItem) 
                };
            });
         */
        this._inputElement.value = "";
    }

    render() {
        return (
            <div className="todoListMain">
                <div className="header">
                    <form onSubmit={this.addItem}>
                        <input ref={(a) => this._inputElement = a} type="text" placeholder="enter a task" />
                        <button type="submit">add</button>
                    </form>
                </div>
                <TodoItems entries={this.state.items} />
            </div>
        );
    }
}

export default TodoList;