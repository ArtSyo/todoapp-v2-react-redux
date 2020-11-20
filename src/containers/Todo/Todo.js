import React, { Component } from "react";
import { connect } from "react-redux";

import { createTodoTask, removeTodoTask } from "../../action/createTodoTask";

import Input from "../../components/Input/Input";
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

  removeTodoElement = () => {

  }

  render() {
    const { activeFilter, todoTask } = this.state;
    const { tasks, removeTodoTask } = this.props;
    const isTasksExist = tasks && tasks.length > 0;

    return (
      <div className="todo-wrapper">
        <Input
          keyPressed={this.createTodoElement}
          onChange={this.todoInputHandler}
          value={todoTask}
        />
        {isTasksExist && <ToDoList tasksList={tasks} removeTodoTask={removeTodoTask}/>}
        {isTasksExist && (
          <Footer amount={tasks.length} activeFilter={activeFilter} />
        )}
      </div>
    );
  }
}

export default connect((state) => ({ tasks: state.tasks,}), { createTodoTask, removeTodoTask })(ToDo);
