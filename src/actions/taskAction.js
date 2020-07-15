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
} from './types';

// Set loading to true
export const setLoading = () => {
  return { type: SET_LOADING };
};

// Get tasks from DB
export const getTasks = () => async dispatch => {
  try {
    setLoading();

    const res = await fetch('/tasks');
    const data = await res.json();

    dispatch({
      type: GET_TASKS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: TASKS_ERROR,
      payload: error,
    });
  }
};

// add new task to DB
export const addTask = task => async dispatch => {
  try {
    setLoading();

    const res = await fetch('/tasks', {
      method: 'POST',
      body: JSON.stringify(task),
      headers: {
        'content-type': 'application/json',
      },
    });
    const data = await res.json();
    dispatch({
      type: ADD_TASK,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: TASKS_ERROR,
      payload: error,
    });
  }
};

// delete task from DB
export const deleteTask = id => async dispatch => {
  try {
    setLoading();

    await fetch(`/tasks/${id}`, {
      method: 'DELETE',
    });

    dispatch({
      type: DELETE_TASK,
      payload: id,
    });
  } catch (error) {
    dispatch({
      type: TASKS_ERROR,
      payload: error,
    });
  }
};

// set current task
export const setCurrent = log => {
  return {
    type: SET_CURRENT,
    payload: log,
  };
};

// clear current task
export const clearCurrent = () => {
  return {
    type: CLEAR_CURRENT,
  };
};

// update task to DB
export const updateTask = task => async dispatch => {
  try {
    setLoading();

    const res = await fetch(`/tasks/${task.id}`, {
      method: 'PUT',
      body: JSON.stringify(task),
      headers: {
        'content-type': 'application/json',
      },
    });
    const data = await res.json();

    dispatch({
      type: UPDATE_TASK,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: TASKS_ERROR,
      payload: error,
    });
  }
};

// search task from DB
export const searchTasks = text => async dispatch => {
  try {
    setLoading();

    const res = await fetch(`/tasks?q=${text}`);
    const data = await res.json();

    dispatch({
      type: SEARCH_TASKS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: TASKS_ERROR,
      payload: error,
    });
  }
};
