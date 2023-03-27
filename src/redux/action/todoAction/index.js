import {todoActiontype} from '../../actionType';
import {axiosInstance} from '../../../config';

export const fetchAllTodoAction = () => async dispatch => {
  let resp = await axiosInstance
    .get('/todos')
    .catch(error => console.log(error, '===@@@'));
  dispatch({type: todoActiontype.FETCH_ALL_TODOS, payload: resp?.data});
};

export const fetchTodoAction = id => async dispatch => {
  let resp = await axiosInstance
    .get(`/todos/${id}`)
    .catch(error => console.log(error, '===@@@'));
  dispatch({type: todoActiontype.FETCH_TODO, payload: resp?.data});
};

export const clearTodo = () => async dispatch => {
  dispatch({type: todoActiontype.FETCH_TODO_REMOVE});
};
