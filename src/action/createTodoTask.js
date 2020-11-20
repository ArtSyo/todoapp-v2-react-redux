import { ADD_TASK, REMOVE_TASK, COMPLETE_TASK } from "../constants";

export const createTodoTask = (id, text, isComplited) => {
  return {
    type: ADD_TASK,
    id,
    text,
    isComplited,
  };
};

export const removeTodoTask = (id) => {
  return {
    type: REMOVE_TASK,
    id,
  };
};

export const completeTodoTask = (id) => {
  return {
    type: COMPLETE_TASK,
    id,
  };
};
