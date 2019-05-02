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

  render() {
    return (
      <div className="App">
        <h1>To Do list</h1>
        <Todo todo={this.state.todo} />
      </div>
    );
  }
}

export default App;
