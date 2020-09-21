import {
  ADD_TODO,
  TOGGLE_TODO,
  EDIT_TODO,
  TOGGLE_STAR_TODO,
  TOGGLE_EDIT_TODO,
  REMOVE_TODO,
  FILTER_TODO,
  LOAD_TODOS,
  FETCH_TODOS_REQUEST,
  FETCH_TODOS_FAILURE,
} from "../actions/todoActions";

const initialState = {
  todos: [],
  isFetching: false,
  error: null,
};
const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TODOS_REQUEST:
      return {
        ...state,
        isFetching: true,
      };
    case FETCH_TODOS_FAILURE:
      return {
        isFetching: false,
        todos: [],
        error: action.payload,
      };

    case LOAD_TODOS: {
      return {
        ...state,
        todos: action.payload,
        isFetching: false,
      };
    }
    case ADD_TODO:
      return {
        ...state,
        isFetching: false,
        todos: [action.payload, ...state.todos],
      };

    case TOGGLE_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id !== action.id) {
            return todo;
          }

          return Object.assign({}, todo, { isDone: !todo.isDone });
        }),
      };

    case EDIT_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id !== action.id) {
            return todo;
          }

          return Object.assign({}, todo, { text: action.text });
        }),
      };

    case TOGGLE_STAR_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id !== action.id) {
            return todo;
          }

          return Object.assign({}, todo, { isStarred: !todo.isStarred });
        }),
      };

    case TOGGLE_EDIT_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id !== action.id) {
            return todo;
          }

          return Object.assign({}, todo, { isEditing: !todo.isEditing });
        }),
      };

    case REMOVE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => {
          return todo.id !== action.id;
        }),
      };

    case FILTER_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => {
          return todo.visibilityFilter === action.filter;
        }),
      };

    default:
      return state;
  }
};

export default todoReducer;
