import React, {Component} from "react";

class TodoItem extends Component {
    constructor() {
        super();
        this.toggle = this.toggle.bind(this);
        this.delete = this.delete.bind(this);
    }

    toggle() {
        this.props.onToggle(this.props.todo)
    }

    delete() {
        this.props.onDelete(this.props.todo)
    }

    render() {
        return (
            <li>
                <input
                    type="checkbox"
                    onChange={this.toggle}
                    checked={this.props.todo.status === "completed"}/>
                {this.props.todo.title}
                <button onClick={this.delete}>删除</button>
            </li>
        )
    }
}

export {TodoItem}