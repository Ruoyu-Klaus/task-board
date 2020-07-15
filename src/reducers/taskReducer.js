import {
  GET_TASKS,
  ADD_TASK,
  DELETE_TASK,
  SET_LOADING,
  TASKS_ERROR,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_TASK,
  SEARCH_TASKS,
} from '../actions/types';

const initState = {
  tasks: null,
  current: null,
  loading: false,
  error: null,
};

export default (state = initState, action) => {
  switch (action.type) {
    case GET_TASKS:
      return { ...state, tasks: action.payload, loading: false };
    case ADD_TASK:
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
        loading: false,
      };
    case DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter(task => task.id !== action.payload),
        loading: false,
      };
    case UPDATE_TASK:
      return {
        ...state,
        tasks: state.tasks.map(task =>
          task.id === action.payload.id ? action.payload : task
        ),
      };
    case SET_CURRENT:
      return { ...state, current: action.payload };
    case CLEAR_CURRENT:
      return { ...state, current: null };
    case SEARCH_TASKS:
      return { ...state, tasks: action.payload };
    case TASKS_ERROR:
      console.log(action.payload);
      return { ...state, error: action.payload };
    case SET_LOADING:
      return { ...state, loading: true };
    default:
      return state;
  }
};
