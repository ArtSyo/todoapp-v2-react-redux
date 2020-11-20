import React from 'react';
import PropTypes from 'prop-types';

import ToDoItem from '../TodoItem/TodoItem';

import './TodoList.css';

const ToDoList = ({ tasksList }) => (
  <ul className="todo-list">
    {tasksList.map(({ id, text, isCompleted }) => (
      <ToDoItem key={id} text={text} isCompleted={isCompleted} />
    ))}
  </ul>
);

ToDoList.propTypes = {
  tasksList: PropTypes.array,
}

ToDoList.defaultProps = {
  tasksList: [],
}

export default ToDoList;
