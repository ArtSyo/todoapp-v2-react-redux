import { CHANGE_FILTER } from "../constants";

const DEFAULT_FILTER = "all";

const filters = (state = DEFAULT_FILTER, { type, activefilter }) => {
  switch (type) {
    case CHANGE_FILTER:
      return activefilter;
    default:
      return state;
  }
};
export default filters;
