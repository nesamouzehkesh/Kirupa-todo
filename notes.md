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