import { RECEIVE_COMMENTS } from '../actions/commentActions'

const initialState = []

function reducer (state = initialState, action) {
  switch (action.type) {
    case RECEIVE_COMMENTS:
      const { comments } = action
      return comments 
    default:
      return state
  }
}

export default reducer