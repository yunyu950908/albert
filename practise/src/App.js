import React, {Component} from 'react';
import * as localStorage from "./components/util/localStorage"
import {jsonClone} from "./components/util/jsonClone"

import {TodoInput} from "./components/main/todoinput"
import {TodoItem} from "./components/main/todoitem"

let id = 0;

function idMaker() {
    id += 1;
    return id;
}

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newTodo: "",
            todoList: localStorage.load("todoList") || [],
            // todoList: [],
        };
        this.changeTitle = this.changeTitle.bind(this);
        this.addTodo = this.addTodo.bind(this);
        this.toggle = this.toggle.bind(this);
        this.delete = this.delete.bind(this);
        // console.log(localStorage.load("todoList"))
    }

    // 更新后存入 localStorage
    componentDidUpdate() {
        localStorage.save("todoList", this.state.todoList)
    }

    // 添加一个todo
    addTodo(e) {
        const todoList = jsonClone(this.state.todoList);
        todoList.push({
            id: idMaker(),
            title: e.target.value,
            status: "",
            deleted: false
        });
        this.setState({
            todoList: todoList
        });

        e.target.value = "";

    }

    // TodoInput 内容改变
    changeTitle(e) {
        this.setState({
            newTodo: e.target.value
        })
    }

    // 切换完成状态
    toggle(todo) {
        todo.status = todo.status === "completed" ? "" : "completed";
        this.setState(this.state)
    }

    // 标记为删除
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
