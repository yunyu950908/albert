import React, {Component} from "react";

class TodoInput extends Component {
    constructor() {
        super();
        this.submit = this.submit.bind(this);
        this.changeTitle = this.changeTitle.bind(this);
    }

    submit(e) {
        // console.log(this)
        if (e.key === "Enter") {
            this.props.onSubmit();
        }
    }

    changeTitle(e) {
        // console.log(e.target)
        this.props.onChange(e);
    }

    render() {
        return (
            <input
                type="text"
                onChange={this.changeTitle}
                onKeyPress={this.submit}/>
        )
    }
}

export {TodoInput}
