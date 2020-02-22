import React, { Fragment } from "react";

import Card from "../components/Card";

import { useFetch } from "./Todos/Hooks";
import TodosList from "./Todos/TodosList";
import TodoForm from "./Todos/TodoForm";

const FormDemo = () => {
  const [todos, loading, setTodos] = useFetch();
  const addTodo = title => {
    const newTodos = [...todos, { title }];
    setTodos(newTodos);
  };
  const completeTodo = index => {
    const newTodos = [...todos];
    newTodos[index].completed = !todos[index].completed;
    setTodos(newTodos);
  };

  return (
    <Fragment>
      <Card>
        <div>
          <h3 style={styles.formTitles}>Todo's list</h3>
          {loading ? (
            <p> Loading ...</p>
          ) : (
            <TodosList todos={todos} completeTodo={completeTodo} />
          )}
          <div>
            <TodoForm addTodo={addTodo} />
          </div>
        </div>
      </Card>
    </Fragment>
  );
};

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
