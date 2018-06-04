//@flow

import React from 'react'
import type { Text } from '../types/todos'

export type TodoProps = {
  onClick: () => void,
  completed: boolean,
  text: Text
};

const Todo = ({ onClick, completed, text } : TodoProps) => (
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
