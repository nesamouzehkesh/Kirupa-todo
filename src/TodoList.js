import React, { Component } from 'react';

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.addItem = this.addItem.bind(this);

        this.state = {
            items: ['a', 'b']
        };
    }

    addItem(e) {
        e.preventDefault();

        const item = {
            key: Date.now(),
            value: this._inputElement.value
        }

        console.log(item);

        this.setState({
            items: [...this.state.items, item]
        });

        setTimeout(() => { console.log(this.state.items); }, 3000);
        this._inputElement = "";
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
            </div>
        );
    }
}

export default TodoList;