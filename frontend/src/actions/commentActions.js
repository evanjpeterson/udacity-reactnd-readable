import * as api from '../util/api'

export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS'

export function fetchComments(postId) {
  return dispatch => {
    return api.getComments(postId)
      .then(comments => dispatch(receiveComments(comments)))
  }
}

function receiveComments(comments) {
  return {
    type: RECEIVE_COMMENTS,
    comments
  }
}