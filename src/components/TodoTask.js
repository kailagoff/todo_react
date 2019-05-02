import React, { Component } from 'react'

export class TodoTask extends Component {
  render(){
    return (
      <div>
        <p>{this.props.task.title}</p>
      </div>
    )
  }
}

export default TodoTask
