//@flow
import type { Id, Text, TodosAction } from '../types/todos';
import type { VisibilityFilter, VisibilityFilterAction } from '../types/visibilityFilter';

let nextTodoId: Id = 0

export const addTodo = (text: Text) : TodosAction => ({
  type: 'ADD_TODO',
  id: nextTodoId++,
  text
})

export const setVisibilityFilter = (filter: VisibilityFilter) : VisibilityFilterAction => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
})

export const toggleTodo = (id: Id) : TodosAction => ({
  type: 'TOGGLE_TODO',
  id
})

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}
