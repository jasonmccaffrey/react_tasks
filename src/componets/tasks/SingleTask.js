import React, { Component } from "react";
import PropTypes from "prop-types";

export class SingleTask extends Component {

  render() {
    const { id, title, completed } = this.props.task;
    return (
        <div className="task-item">
        <label className={(completed) ? "completed" : ""}>
          <input
            type="checkbox" checked={completed}
            onChange={this.props.markComplete.bind(this, id)}
          />
          {title}
        </label>
        <button onClick={this.props.deleteTask.bind(this, id)} className="remove-task">&times;</button>
        </div>
    );
  }
}

// PropTypes
SingleTask.propTypes = {
  task: PropTypes.object.isRequired,
  markComplete: PropTypes.func.isRequired,
  deleteTask: PropTypes.func.isRequired
};

export default SingleTask;
