import React, { Component } from 'react';
import { BrowserRouter as Router, Route  } from 'react-router-dom';
import './App.css';
import Header from './components/layout/header'
import Todo from './components/Todo';
import AddTodo from './components/AddTodo';
import About from './components/pages/About';
import uuid from 'uuid';

class App extends Component {
  state = {
    todo: [
      {
        id: uuid.v4(),
        title: 'Take out the trash',
        completed: false
      },
      {
        id: uuid.v4(),
        title: 'Mow the grass',
        completed: false
      },
      {
        id: uuid.v4(),
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
      id: uuid.v4(),
      title: title,
      completed: false,
    }
    this.setState({ todo: [...this.state.todo, newTask]})
  }

  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <Route exact path="/" render={props => (
              <React.Fragment>
                <AddTodo addTodo={this.addTodo}/>
                <Todo todo={this.state.todo} markComplete={this.markComplete} delTodo={this.delTodo} />
              </React.Fragment>
            )} />
            <Route path="/about" component={About}/>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
