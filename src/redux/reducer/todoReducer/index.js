import {todoActiontype} from '../../actionType';

const initialState = {
  allTodos: [],
  todo: {},
};

export const todoReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case todoActiontype.FETCH_ALL_TODOS:
      return {...state, allTodos: payload};
    case todoActiontype.FETCH_TODO:
      return {...state, todo: payload};
    case todoActiontype.FETCH_TODO_REMOVE:
      return {...state, todo: {}};
    default:
      return state;
  }
};
