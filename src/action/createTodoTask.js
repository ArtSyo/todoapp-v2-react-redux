import { ADD_TASK } from "../constants";

export const createTodoTask = (id, text, isComplited) => {
  return {
    type: "ADD_TASK",
    id,
    text,
    isComplited,
  };
};
