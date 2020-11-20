import React, { Component } from "react";

import ToDoInput from "../../components/Input/Input";
import ToDoList from "../../components/TodoList/TodoList";
import Footer from "../../components/Footer/Footer";

import "./Todo.css";



class ToDo extends Component {
  state = {
    activeFilter: "all",
    todoTask: "",
  };

  todoInputHandler = ({target: {value}}) => {
    this.setState({
      todoTask: value
    })
    console.log(this.state.todoTask);
  }

  render() {
    const { activeFilter, todoTask } = this.state;
    const tasksList = [];
    const isTasksExist = tasksList && tasksList.length > 0;

    return (
      <div className="todo-wrapper">
        <ToDoInput onChange={this.todoInputHandler} value={todoTask}/>
        {isTasksExist && <ToDoList tasksList={tasksList} />}
        {isTasksExist && (
          <Footer amount={tasksList.length} activeFilter={activeFilter} />
        )}
      </div>
    );
  }
}

export default ToDo;
