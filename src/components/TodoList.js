//@flow

import React from 'react'
import Todo from './Todo'

type TodoProps = {
  todos: Array<{
    id: number,
    completed: boolean,
    text: string
  }>,
  toggleTodo: (number) => void
}

const TodoList = ({ todos, toggleTodo } : TodoProps) : ReactElement => (
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
