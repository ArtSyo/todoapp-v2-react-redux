import { ADD_TASK } from "../constants";

export default createTodoTask = (id, text, isComplited) => {
  return {
    type: "ADD_TASK",
    id,
    text,
    isComplited,
  };
};
