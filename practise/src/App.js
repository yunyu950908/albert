import React, {Component} from 'react';

import {TodoInput} from "./components/main/todoinput"
import {TodoItem} from "./components/main/todoitem"

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newTodo: "",
            todoList: [
                {id: 1, title: "firstTodo"}
            ],
        };
        this.changeTitle = this.changeTitle.bind(this);
        this.addTodo = this.addTodo.bind(this);
        this.toggle = this.toggle.bind(this);
        this.delete = this.delete.bind(this);
    }

    addTodo() {
        // console.log(this)
    }

    changeTitle(e) {
        // console.log(e.target.value)
        this.setState({
            newTodo: e.target.value
        })

        // let val = e.target.value;
        // this.setState(prev => prev.newTodo = val)
    }

    toggle(todo) {
        todo.status = todo.status === "completed" ? "" : "completed";
        this.setState(this.state)
    }

    delete(todo) {
        todo.deleted = true;
        this.setState(this.state)
    }

    render() {
        let todos = this.state.todoList.filter(item => !item.deleted)
            .map((item, index) => {
            return (
                <TodoItem
                    key={index}
                    todo={item}
                    onToggle={this.toggle}
                    onDelete={this.delete}
                />
            )
        });

        return (
            <div className="App">
                Hello world
                <div className="inputwrap">
                    <TodoInput
                        content={this.state.newTodo}
                        onChange={this.changeTitle}
                        onSubmit={this.addTodo}/>
                </div>
                <ol>
                    {todos}
                </ol>
            </div>
        );
    }
}

export default App;
