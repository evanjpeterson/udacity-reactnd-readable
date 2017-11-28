import { UPDATE_POST_SORT_MODE } from '../actions/sortActions'
import { SORT_BY_BEST } from '../util/constants'

const initialState = {
  postSortMode: SORT_BY_BEST
}

function reducer (state = initialState, action) {
  switch (action.type) {
    case UPDATE_POST_SORT_MODE:
      const { postSortMode } = action
      return {
        ...state,
        postSortMode
      } 
    default:
      return state
  }
}

export default reducer