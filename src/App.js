import React, { Component } from "react";
import { BrowserRouter as Router, Route} from 'react-router-dom'
import Header from './componets/layout/header'
import TaskList from "./componets/tasks/TaskList"
import About from "./componets/pages/About"
import AddTask from "./componets/tasks/AddTask"
import axios from 'axios';

class App extends Component {
  state = {
    tasks: []
  };

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
      .then(res => this.setState({ tasks: res.data}))
  }

  // Toggle Task Complete / Incomplete
  markComplete = (id) => {
    this.setState({tasks: this.state.tasks.map(task => {
      if (task.id === id) {
        task.completed = !task.completed
      }
      return task
    }) });
  };

  addTask = (title) => {
    axios.post('https://jsonplaceholder.typicode.com/todos', {
      title: title,
      completed: false
    })
    .then(res => this.setState({tasks: [...this.state.tasks, res.data]}))
  }

  //Delete Task
  deleteTask = (id) => {
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
    .then(res=> this.setState({tasks: [...this.state.tasks.filter(task=> task.id !== id)]}))  
  }

  render() {
    return (
      <Router>
        <Header />
        <Route exact path="/" render={props => (
          <React.Fragment>
            <AddTask addTask = {this.addTask} />
            <div id="tasklist">
              <TaskList tasks={this.state.tasks} markComplete={this.markComplete} deleteTask = {this.deleteTask} />
            </div>
          </React.Fragment>
        )} />
        <Route exact path="/about" component= {About} />
      </Router>
    );
  }
}

export default App;
