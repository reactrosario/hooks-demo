import React, { Component, Fragment } from "react";
import Card from "../components/Card";
import TodosList from "./Todos/TodosList";
import TodoForm from "./Todos/TodoForm";

class FormDemo extends Component {
  state = {
    todos: []
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/todos?_limit=10")
      .then(response => response.json())
      .then(json => this.setState({ todos: json }))
      .catch(e => console.log(e));
  }
  addTodo = title => {
    const newTodos = [...this.state.todos, { title }];
    this.setState({ todos: newTodos });
  };

  todoComplete = id => {
    const newTodos = [...this.state.todos];
    newTodos[id].completed = !this.state.todos[id].completed;
    this.setState({ todos: newTodos });
  };

  componentDidUpdate() {}

  render() {
    return (
      <Fragment>
        <Card>
          <div>
            <h3 style={styles.formTitles}>Todo's list</h3>
            {!this.state.todos ? (
              <p> Loading ...</p>
            ) : (
              <TodosList
                todos={this.state.todos}
                completeTodo={this.todoComplete}
              />
            )}
            <div>
              <TodoForm addTodo={this.addTodo} />
            </div>
          </div>
        </Card>
      </Fragment>
    );
  }
}

const styles = {
  container: {},
  formTitles: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  },
  cardStyle: {
    flex: 1
  }
};

export default FormDemo;
