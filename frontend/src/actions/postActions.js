import * as api from '../util/api'

export const RECEIVE_POSTS = 'RECEIVE_POSTS'
export const UPDATE_POST = 'UPDATE_POST'
export const REMOVE_POST = 'REMOVE_POST'

export function fetchAllPosts() {
  return dispatch => {
    return api.getAllPosts()
      .then(posts => dispatch(receivePosts(posts)))
  }
}

export function fetchPosts(category) {
  return dispatch => {
    return api.getPosts(category)
      .then(posts => dispatch(receivePosts(posts)))
  }
}

export function fetchPost(id) {
  return dispatch => {
    return api.getPost(id)
      .then(post => dispatch(receivePosts([post])))
  }
}

export function voteOnPost(id, voteType) {
  return dispatch => {
    return api.voteOnPost(id, voteType)
      .then(post => dispatch(updatePost(post)))
  }
}

export function addPost(post) {
  return dispatch => {
    return api.addPost(post)
      .then(post => dispatch(updatePost(post)))
  }
}

export function editPost(post) {
  return dispatch => {
    return api.editPost(post)
      .then(post => dispatch(updatePost(post)))
  }
}

export function deletePost(postId) {
  return dispatch => {
    return api.removePost(postId)
      .then(() => dispatch(removePost(postId)))
  }
}

function receivePosts(posts) {
  return {
    type: RECEIVE_POSTS,
    posts
  }
}

function updatePost(post) {
  return {
    type: UPDATE_POST,
    post
  }
}

function removePost(postId) {
  return {
    type: REMOVE_POST,
    postId
  }
}