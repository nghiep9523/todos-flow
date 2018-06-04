//@flow

import React from 'react'
import Todo from './Todo'
import type { Todos, Id } from '../types/todos'

export type TodoProps = {
  todos: Todos,
  toggleTodo: (id: Id) => void
};

const TodoList = ({ todos, toggleTodo } : TodoProps) => (
  <ul>
    {todos.map(todo =>
      <Todo
        key={todo.id} 
        {...todo}
        onClick={() => toggleTodo(todo.id)}
      />
    )}
  </ul>
)

export default TodoList
