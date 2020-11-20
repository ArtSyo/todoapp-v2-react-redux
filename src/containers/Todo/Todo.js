import React, { Component } from "react";
import { connect } from "react-redux";

import {
  createTodoTask,
  removeTodoTask,
  completeTodoTask,
  changeFilter,
} from "../../action/createTodoTask";

import Input from "../../components/Input/Input";
import ToDoList from "../../components/TodoList/TodoList";
import Footer from "../../components/Footer/Footer";

import "./Todo.css";

class ToDo extends Component {
  state = {
    todoTask: "",
  };

  todoInputHandler = ({ target: { value } }) => {
    this.setState({
      todoTask: value,
    });
  };

  createTodoElement = ({ key }) => {
    const { todoTask } = this.state;
    if (todoTask.length > 3 && key === "Enter") {
      const { createTodoTask } = this.props;
      createTodoTask(new Date().getTime(), todoTask, false);

      this.setState({
        todoTask: "",
      });
    }
  };

  filterTasks = (tasks, activeFilter) => {
    switch (activeFilter) {
      case "completed":
        return tasks.filter((task) => task.isCompleted);
        break;
      case "active":
        return tasks.filter((task) => !task.isCompleted);
        break;
      default:
        return tasks;
    }
  };

  getActiveTasksCounter = (tasks) =>
    tasks.filter((task) => !task.isCompleted).length;

  render() {
    const { todoTask } = this.state;
    const {
      tasks,
      removeTodoTask,
      completeTodoTask,
      filters,
      changeFilter,
    } = this.props;
    const isTasksExist = tasks && tasks.length > 0;

    const filteredTasks = this.filterTasks(tasks, filters);

    const taskCounter = this.getActiveTasksCounter(tasks)

    return (
      <div className="todo-wrapper">
        <Input
          keyPressed={this.createTodoElement}
          onChange={this.todoInputHandler}
          value={todoTask}
        />
        {isTasksExist && (
          <ToDoList
            tasksList={filteredTasks}
            removeTodoTask={removeTodoTask}
            isCompletedChange={completeTodoTask}
          />
        )}
        {isTasksExist && (
          <Footer
            changeFilter={changeFilter}
            amount={taskCounter}
            activeFilter={filters}
          />
        )}
      </div>
    );
  }
}

export default connect(({ tasks, filters }) => ({ tasks, filters }), {
  createTodoTask,
  removeTodoTask,
  completeTodoTask,
  changeFilter,
})(ToDo);
