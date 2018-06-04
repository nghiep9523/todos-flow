//@flow

import { connect } from 'react-redux'
import { setVisibilityFilter } from '../actions'
import Link from '../components/Link'
import type { State, Dispatch } from '../types'
import type { VisibilityFilter } from '../types/visibilityFilter'

type OwnPropsType = {
  filter: VisibilityFilter
};

const mapStateToProps = (state : State, ownProps: OwnPropsType) => ({
  active: ownProps.filter === state.visibilityFilter
})

const mapDispatchToProps = (dispatch: Dispatch, ownProps: OwnPropsType) => ({
  onClick: () => dispatch(setVisibilityFilter(ownProps.filter))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Link)
