import React, { Component } from "react";
import SingleTask from "./SingleTask";
import PropTypes from "prop-types";

class TaskList extends Component {

  render() {
    return this.props.tasks.map((task) => (
        <SingleTask key={task.id} task={task} markComplete={this.props.markComplete} deleteTask={this.props.deleteTask} />
    ));
  }
}

// PropTypes
TaskList.propTypes = {
  tasks: PropTypes.array.isRequired,
  markComplete: PropTypes.func.isRequired,
  deleteTask: PropTypes.func.isRequired
};

export default TaskList;
