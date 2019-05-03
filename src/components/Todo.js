import React, { Component } from 'react';
import TodoTask from './TodoTask';
import PropTypes from 'prop-types';

class Todo extends Component {


  render() {
    return this.props.todo.map((task) =>
      <TodoTask key={task.id} task={task} markComplete={this.props.markComplete} delTodo={this.props.delTodo}/>
     );
  }
}

//validates PropTypes
Todo.propTypes = {
  todo: PropTypes.array.isRequired
}

export default Todo;
