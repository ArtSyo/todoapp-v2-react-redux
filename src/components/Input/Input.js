import React from 'react';
import PropTypes from 'prop-types';

import './Input.css';

const ToDoInput = ({ value, onChange, keyPressed }) => (
  <div className="todo-input-wrapper">
    <i className="fas fa-plus" />
    <input
      className="todo-input"
      placeholder="Click to add task"
      onChange={onChange}
      value={value}
      onKeyPress={keyPressed}
    />
  </div>
);

ToDoInput.propTypes = {
  onChange: PropTypes.func,
  keyPressed: PropTypes.func,
  value: PropTypes.string,
}

ToDoInput.defaultProps = {
  onChange: () => {},
  keyPressed: () => {},
  value: '',
}

export default ToDoInput;
