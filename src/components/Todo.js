//@flow

import React from 'react'

type TodoProps = {
  onClick: func,
  completed: boolean,
  text: string
}

const Todo = ({ onClick, completed, text } : TodoProps) : ReactElement => (
  <li
    onClick={onClick}
    style={{
      textDecoration: completed ? 'line-through' : 'none'
    }}
  >
    {text}
  </li>
)

export default Todo
