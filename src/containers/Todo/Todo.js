import React, { Component } from "react";
import { connect } from "react-redux";

import { createTodoTask } from "../../action/createTodoTask";

import ToDoInput from "../../components/Input/Input";
import ToDoList from "../../components/TodoList/TodoList";
import Footer from "../../components/Footer/Footer";

import "./Todo.css";

class ToDo extends Component {
  state = {
    activeFilter: "all",
    todoTask: "",
  };

  todoInputHandler = ({ target: { value } }) => {
    this.setState({
      todoTask: value,
    });
  };

  createTodoTask = ({ key }) => {
    const { todoTask } = this.state;
    if (todoTask.length > 3 && key === "Enter") {
      const { createTodoTask } = this.props;
      createTodoTask(new Date().getTime(), todoTask, false);

      this.setState({
        todoTask: "",
      });
    }
  };

  render() {
    const { activeFilter, todoTask } = this.state;
    const { tasks } = this.props;
    const isTasksExist = tasks && tasks.length > 0;

    return (
      <div className="todo-wrapper">
        <ToDoInput
          keyPressed={this.createTodoTask}
          onChange={this.todoInputHandler}
          value={todoTask}
        />
        {isTasksExist && <ToDoList tasksList={tasks} />}
        {isTasksExist && (
          <Footer amount={tasks.length} activeFilter={activeFilter} />
        )}
      </div>
    );
  }
}

export default connect(
  (state) => ({
    tasks: state.tasks,
  }),
  { createTodoTask }
)(ToDo);
