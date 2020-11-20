import React from 'react';
import PropTypes from 'prop-types';

import ToDoItem from '../TodoItem/TodoItem';

import './TodoList.css';

const ToDoList = ({ tasksList, removeTodoTask }) => (
  <ul className="todo-list">
    {tasksList.map(({ id, text, isCompleted }) => (
      <ToDoItem removeTodoTask={removeTodoTask} id={id} key={id} text={text} isCompleted={isCompleted} />
    ))}
  </ul>
);

ToDoList.propTypes = {
  tasksList: PropTypes.array,
  removeTodoTask: PropTypes.func,
}

ToDoList.defaultProps = {
  tasksList: [],
  removeTodoTask: ()=>{},
}

export default ToDoList;
