import { combineReducers } from 'redux';
import { todosReducer } from './todos';
import { Todo } from '../actions';

export interface State {
  todos: Todo[];
}

export const reducers = combineReducers<State>({
  todos: todosReducer,
});
