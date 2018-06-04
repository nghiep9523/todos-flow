//@flow

import React from 'react'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { addTodo } from '../actions'

type AddTodoProps = {
  dispatch: Dispatch
}

const AddTodo = ({ dispatch } : AddTodoProps) : ReactElement => {
  let input

  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        dispatch(addTodo(input.value))
        input.value = ''
      }}>
        <input ref={node => input = node} />
        <button type="submit">
          Add Todo
        </button>
      </form>
    </div>
  )
}

export default connect()(AddTodo)
