import React, { Component } from "react";
import "./App.css";
import Todos from "./components/Todos";
import Header from "./components/layout/Header";

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: "Take Out the Trash",
        completed: false
      },
      {
        id: 2,
        title: "Dinner with wife",
        completed: false
      },
      {
        id: 3,
        title: "Meeting with boss",
        completed: false
      }
    ]
  };

  //ToggleComplete
  markComplete = id => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    });
  };

  delTodo = id => {
    this.setState({
      todos: [...this.state.todos.filter(todo => todo.id !== id)]
    });
  };

  render() {
    return (
      <div className="App">
        <Header style={headerStyle} />
        <Todos
          todos={this.state.todos}
          markComplete={this.markComplete}
          delTodo={this.delTodo}
        />
      </div>
    );
  }
}

const headerStyle = {
  background: "#333",
  color: "#fff",
  textAlign: "center",
  padding: "10px"
};

export default App;
