import React from 'react';
import PropTypes from 'prop-types';

import ToDoItem from '../TodoItem/TodoItem';

import './TodoList.css';

const ToDoList = ({ tasksList, removeTodoTask, isCompletedChange }) => (
  <ul className="todo-list">
    {tasksList.map(({ id, text, isCompleted }) => (
      <ToDoItem removeTodoTask={removeTodoTask} isCompleted={isCompleted} id={id} key={id} text={text} isCompletedChange={isCompletedChange} />
    ))}
  </ul>
);

ToDoList.propTypes = {
  tasksList: PropTypes.array,
  removeTodoTask: PropTypes.func,
  isCompletedChange: PropTypes.func
}

ToDoList.defaultProps = {
  tasksList: [],
  removeTodoTask: ()=>{},
  isCompletedChange: () =>{}
}

export default ToDoList;
