import React, { Component } from 'react';
import TodoTask from './TodoTask';

class Todo extends Component {
  render() {
    return this.props.todo.map((task) =>
      <TodoTask key={task.id}task={task} />
     );
  }
}

export default Todo;
