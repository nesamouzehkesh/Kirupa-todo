## react's state conflict with HTML internal state:

An HTML form has its own internal state so for example in creating a 
todo app when you want to get the value typed inside an input element 
you cannot easily say `e.target.value` for you `submitHandler` for example. 

You need to either make a `ref` to your input and use that in your react app 
or you can use an `onChange` event handler for your input in which you set the 
state (you have to define a state such as `term`) value.

This is an example of using an `onChange`:

```
class TodoList extends Component {
    constructor(props) {
        super(props);
        this.addItem = this.addItem.bind(this);
        this.changeHandler = this.changeHandler.bind(this);

        this.state = {
            term: '',
            items: ['a', 'b']
        };
    }

    changeHandler(e) {
        this.setState({
            term: e.target.value
        })
    }

    addItem(e) {
        e.preventDefault();

        const item = {
            key: Date.now(),
            value: this.state.term
        }

        this.setState({
            term: '',
            items: [...this.state.items, item]
        });

        console.log(this.state.items);
    }

    render() {
        return (
            <div className="todoListMain">
                <div className="header">
                    <form onSubmit={this.addItem}>
                        <input type="text" placeholder="enter a task" value={this.state.term} onChange={this.changeHandler} />
                        <button type="submit">add</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default TodoList;
```

### Animating the existance of an element in react:

When it comes to animating the existence of an element, though, the traditional approaches we outlined run into some limitations. That is because the lifecycle of an element as it is about to be deleted from the DOM is entirely handled by React. We can definitely override some of the lifecycle methods to intercept an element deletion and interject our own animation logic, but that gets us a bit too far into the weeds. We don't want to deal with that right now.

Fortunately, the React community has come up with a handful of lightweight animation libraries that make animating adding and deleting elements really easy. One such library is Flip Move. Among many things, this library makes animating the addition and removal of list elements really simple.

This code did not work for FlipMove: 

```
import React from 'react';
import TodoItem from './TodoItem';
import FlipMove from 'react-flip-move';

const TodoItems = ({ entries, deleteHandler }) => (
    <ul className="theList">
        <FlipMove duration={250} easing="ease-out">
            {entries.map(entry => <TodoItem entry={entry} onDelete={deleteHandler} />)}
        </FlipMove>
    </ul>
)

export default TodoItems;


```