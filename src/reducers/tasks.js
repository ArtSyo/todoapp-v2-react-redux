import { ADD_TASK } from "../constants";

const TASKS = [
    {
      id: 1,
      text: "Learn ReactJS",
      isCompleted: true,
    },
    {
      id: 2,
      text: "Learn Redux",
      isCompleted: false,
    },
    {
      id: 3,
      text: "Learn React Router",
      isCompleted: false,
    },
  ];

const tasks = (state = TASKS, {id, text, isComplited, type}) => {
  switch (type) {
    case {ADD_TASK}:
      return [
        ...state,
        {
          id,
          text,
          isComplited,
        },
      ];
    default:
      return state;
  }
};

export default tasks;
