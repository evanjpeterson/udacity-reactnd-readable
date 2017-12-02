import * as api from '../util/api'

export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS'
export const UPDATE_COMMENT = 'UPDATE_COMMENT'
export const REMOVE_COMMENT = 'REMOVE_COMMENT'

export function fetchComments(postId) {
  return dispatch => {
    return api.getComments(postId)
      .then(comments => dispatch(receiveComments(comments)))
  }
}

export function addComment(comment) {
  return dispatch => {
    return api.addComment(comment)
      .then(comment => dispatch(updateComment(comment)))
  }
}

export function voteOnComment(id, voteType) {
  return dispatch => {
    return api.voteOnComment(id, voteType)
      .then(comment => dispatch(updateComment(comment)))
  }
}

export function editComment(comment) {
  return dispatch => {
    return api.editComment(comment)
      .then(comment => dispatch(updateComment(comment)))
  }
}

export function deleteComment(commentId) {
  return dispatch => {
    return api.removeComment(commentId)
      .then(() => dispatch(removeComment(commentId)))
  }
}

function receiveComments(comments) {
  return {
    type: RECEIVE_COMMENTS,
    comments
  }
}

function updateComment(comment) {
  return {
    type: UPDATE_COMMENT,
    comment
  }
}

function removeComment(commentId) {
  return {
    type: REMOVE_COMMENT,
    commentId
  }
}