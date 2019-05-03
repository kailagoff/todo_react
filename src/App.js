import React, { Component } from 'react';
import './App.css';
import Header from './components/layout/header'
import Todo from './components/Todo';
import AddTodo from './components/AddTodo';

class App extends Component {
  state = {
    todo: [
      {
        id: 1,
        title: 'Take out the trash',
        completed: false
      },
      {
        id: 2,
        title: 'Mow the grass',
        completed: false
      },
      {
        id: 3,
        title: 'Party',
        completed: false
      }
    ]
  }

  //checkbox event method
    markComplete = (id) => {
      this.setState({todo: this.state.todo.map(task => {
        if(task.id ===id) {
          task.completed =!task.completed
        }
        return task;
      }) });
    }

//delete task
  delTodo = (id) => {
      this.setState({ todo: [...this.state.todo.filter(task => task.id !== id)
    ]});
  }
// add new task
  addTodo = (title) => {
    const newTask = {
      id: 4,
      title: title,
      completed: false,
    }
    this.setState({ todo: [...this.state.todo, newTask]})
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <Header />
          <br />
          <AddTodo addTodo={this.addTodo}/>
          <br />
          <Todo todo={this.state.todo} markComplete={this.markComplete} delTodo={this.delTodo} />
        </div>
      </div>
    );
  }
}

export default App;
