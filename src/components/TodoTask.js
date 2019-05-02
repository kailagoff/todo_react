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
        </p>
      </div>
    )
  }
}

// validates the PropTypess
TodoTask.propTypes = {
  task: PropTypes.object.isRequired
}

//css variables
// const taskStyle = {
//   backgroundColor: '#f4f4f4'
// }

export default TodoTask
