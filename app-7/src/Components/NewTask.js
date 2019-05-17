import React, {Component} from 'react'

class NewTask extends Component {
    constructor() {
        super();

        this.state = {
            input: ''
        };

        this.handleAdd = this.handleAdd.bind(this);
    }

    handleInputChange(value) {
        this.setState({input: value})
    }

    handleAdd() {
        this.props.add(this.state.input);
        this.setState({input: ''});
    }

    render() {
        return (
            <div>
                <input
                value={this.state.input}
                placeholder='New task'
                onChange={(event) => this.handleInputChange(event.target.value)}
                />

                <button onClick={this.handleAdd}>Add Task</button>
            </div>
        )
    }
}

export default NewTask;