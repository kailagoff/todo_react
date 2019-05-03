import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class TodoTask extends Component {

//css styling function
getStyle = () => {
  return {
    background: '#f4f4f4',
    padding: '15px',
    borderBottom: '1px black solid',
    textDecoration: this.props.task.completed ? 'line-through red' : 'none'
  }
}


  render(){
    const { id, title } = this.props.task;
    return (
      <div style={this.getStyle()}>
        <p>
          <input type="checkbox" onChange={this.props.markComplete.bind(this, id)}/> {' '}
          {title}
          <button onClick={this.props.delTodo.bind(this, id)} style={btnStyle}>x</button>
        </p>
      </div>
    )
  }
}

// validates the PropTypess
TodoTask.propTypes = {
  task: PropTypes.object.isRequired
}

//css variable for button styling
const btnStyle = {
  background: 'black',
  color: 'white',
  border: 'none',
  padding: '5px 10px',
  cursor: 'pointer',
  float: 'right',
  borderRadius: '30%'
}

export default TodoTask
