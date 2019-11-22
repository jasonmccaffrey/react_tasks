import React, { Component } from 'react'
import PropTypes from "prop-types";

export class AddTask extends Component {
    state = {
      title: ''  
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addTask(this.state.title);
        this.setState({title: '' });
    }

    onChange = (e) => this.setState({ [e.target.name]: e.target.value});

    render() {
        return (
            <form id="addTaskForm" onSubmit={this.onSubmit}>
                <input type="text" name="title" placeholder="Add Task" value={this.state.title} onChange={this.onChange}/>
                <input type="submit" value="Submit" />
            </form>
        )
    }
}

// PropTypes
AddTask.propTypes = {
  addTask: PropTypes.func.isRequired
};

export default AddTask
