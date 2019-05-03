import React, { Component } from 'react';
import './App.css';
import Todo from './components/Todo';

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

    //delete // TODO:
  delTodo = (id) => {
      this.setState({ todo: [...this.state.todo.filter(task => task.id !== id)
    ]});
  }

  render() {
    return (
      <div className="App">
        <h1>To Do list</h1>
        <Todo todo={this.state.todo} markComplete={this.markComplete} delTodo={this.delTodo} />
      </div>
    );
  }
}

export default App;
