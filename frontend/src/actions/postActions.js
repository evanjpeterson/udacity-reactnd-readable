import * as api from '../util/api'

export const RECEIVE_POSTS = 'RECEIVE_POSTS'
export const UPDATE_POST = 'UPDATE_POST'

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