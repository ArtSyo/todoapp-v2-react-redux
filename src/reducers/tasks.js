import { ADD_TASK, REMOVE_TASK, COMPLETE_TASK } from "../constants";
import { load } from "redux-localstorage-simple";

let TASKS = load({ namespace: "todo-app" });

if (!TASKS || !TASKS.tasks || !TASKS.tasks.length) {
    TASKS = {
        tasks: []
    }
}

// const TASKS = [
//   {
//     id: 1,
//     text: "Task 1",
//     isCompleted: true,
//   },
//   {
//     id: 2,
//     text: "Task 2",
//     isCompleted: false,
//   },
//   {
//     id: 3,
//     text: "Task 3",
//     isCompleted: false,
//   },
// ];

const tasks = (state = TASKS.tasks, { id, text, isComplited, type }) => {
  switch (type) {
    case ADD_TASK:
      return [
        ...state,
        {
          id,
          text,
          isComplited,
        },
      ];
    case REMOVE_TASK:
      return [...state].filter((task) => task.id !== id);

    case COMPLETE_TASK:
      return [...state].map((task) => {
        if (task.id === id) {
          task.isCompleted = !task.isCompleted;
        }
        return task;
      });

    default:
      return state;
  }
};

export default tasks;
