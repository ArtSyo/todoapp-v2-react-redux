import React from "react";
import PropTypes from "prop-types";

import "./TodoItem.css";

const ToDoItem = ({ text, isCompleted, removeTodoTask, id, isCompletedChange }) => (
  <li className="todo-item"  >
    <i onClick={() => {isCompletedChange(id) }}
      className={
        isCompleted ? "mark far fa-check-circle" : "mark far fa-circle"
      }
    />
    <span className={isCompleted ? "completed text" : "text"}>{text}</span>
    <i
      onClick={() => {
        removeTodoTask(id);
      }}
      className="fas fa-times"
    />
  </li>
);

ToDoItem.propTypes = {
  text: PropTypes.string,
  isCompleted: PropTypes.bool,
  removeTodoTask: PropTypes.func,
  id: PropTypes.number,
  isCompletedChange: PropTypes.func
};

ToDoItem.defaultProps = {
  text: "",
  isCompleted: false,
  removeTodoTask: () => {},
  id: 0,
  isCompletedChange: () => {}
};

export default ToDoItem;
