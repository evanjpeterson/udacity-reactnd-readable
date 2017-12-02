import { RECEIVE_COMMENTS, UPDATE_COMMENT, REMOVE_COMMENT } from '../actions/commentActions'

const initialState = []

function reducer (state = initialState, action) {
  switch (action.type) {
    case RECEIVE_COMMENTS:
      const { comments } = action
      return comments 
    case UPDATE_COMMENT:
      const newComment = action.comment
      // Same idea as UPDATE_POST, filter out the outdated comment,
      // bring in the new updated version of the comment.
      return state
        .filter(comment => comment.id !== newComment.commentId)
        .concat([newComment])
    case REMOVE_COMMENT:
      return state.filter(comment => comment.id !== action.commentId)
    default:
      return state
  }
}

export default reducer