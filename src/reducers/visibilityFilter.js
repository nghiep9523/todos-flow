//@flow

import { VisibilityFilters } from '../actions'

const initialState : FilterStateType = VisibilityFilters.SHOW_ALL

const visibilityFilter = (state : FilterStateType = initialState, action: Action) => {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.filter
    default:
      return state
  }
}

export default visibilityFilter
