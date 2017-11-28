import { RECEIVE_POSTS } from '../actions/postActions'

const initialState = []

function reducer (state = initialState, action) {
  switch (action.type) {
    case RECEIVE_POSTS:
      const { posts } = action
      return posts 
    default:
      return state
  }
}

export default reducer