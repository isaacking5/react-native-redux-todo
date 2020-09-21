export const LOAD_TODOS = "LOAD_TODOS";
export const ADD_TODO = "ADD_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";
export const REMOVE_TODO = "REMOVE_TODO";
export const EDIT_TODO = "EDIT_TODO";
export const TOGGLE_EDIT_TODO = "TOGGLE_EDIT_TODO";
export const TOGGLE_STAR_TODO = "TOGGLE_STAR_TODO";
export const SET_VISIBILITY_FILTER = "SET_VISIBILITY_FILTER";
export const FETCH_TODOS_REQUEST = "FETCH_TODOS_REQUEST";
export const FETCH_TODOS_FAILURE = "FETCH_TODOS_FAILURE";
export const FETCH_TODOS_SUCCESS = "FETCH_TODOS_SUCCESS";

// generate unique id
const uuid = () => Math.random().toString(34).slice(2);

export function fetchTodosRequest() {
  return {
    type: FETCH_TODOS_REQUEST,
  };
}

export function fetchTodosFailure(error) {
  return {
    type: FETCH_TODOS_FAILURE,
    payload: error,
  };
}

export function loadTodos(todos) {
  return {
    type: LOAD_TODOS,
    payload: todos,
  };
}

export function addTodo(text) {
  return {
    type: ADD_TODO,
    payload: {
      id: uuid(),
      isDone: false,
      isEditing: false,
      isStarred: false,
      text,
    },
  };
}

export function toggleTodo(id) {
  return {
    type: TOGGLE_TODO,
    id,
  };
}

export function toggleStarTodo(id) {
  return {
    type: TOGGLE_STAR_TODO,
    id,
  };
}

export function toggleEditTodo(id) {
  return {
    type: TOGGLE_EDIT_TODO,
    id,
  };
}

export function editTodo(id, text) {
  return {
    type: EDIT_TODO,
    id,
    text,
  };
}

export function removeTodo(id) {
  return {
    type: REMOVE_TODO,
    id,
  };
}

export function setVisibilityFilter(filter) {
  return {
    type: SET_VISIBILITY_FILTER,
    filter,
  };
}
