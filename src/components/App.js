import React, { Component } from 'react';
import '../css/style.css';
import AddTask from './AddTask'
import TaskList from './TaskList'

class App extends Component {
    counter = 5
  state = {
    tasks: [
      {id: 0, text: "Zagrać w League of Legends", date: "2020-04-07", active: true, important: false, finishDate: null},
      {id: 1, text: "Iść na siłownie", date: "2020-12-12", active: true, important: true, finishDate: null},
      {id: 2, text: "Posprzątać auto", date: "2020-11-22", active: true, important: false, finishDate: null},
      {id: 3, text: "Zrobić obiadek", date: "2020-05-07", active: true, important: true, finishDate: null},
      {id: 4, text: "Spanko!", date: "2020-04-01", active: true, important: false, finishDate: null},
    ]
  }

  changeTask = (id) => {
    const tasks = [...this.state.tasks]
    tasks.forEach(task => {
      if(task.id === id) {
        task.active = false;
        task.finishDate = new Date().getTime()
      }
    })
    this.setState({
      tasks
    })
  }
  
  deleteTask = (id) => {
    const tasks = [...this.state.tasks]
    const index = tasks.findIndex(task => task.id === id)
    tasks.splice(index, 1)
    this.setState({
      tasks
    })
  }

  addTask = (text, date, important) => {
    const task = {
      id: this.counter,
      text,
      date,
      important,
      active: true,
      finishDate: null
    }

    this.counter++
    this.setState(prevState => ({
      tasks: [...prevState.tasks, task]
    }))
    return true
  }


  render() {
  return (
    <div className="App">
      <AddTask add={this.addTask}/>
      <TaskList tasks={this.state.tasks} delete={this.deleteTask} change={this.changeTask} />
    </div>
  );
  }
}

export default App;
