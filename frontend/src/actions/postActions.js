import * as api from '../util/api'

export const RECEIVE_POSTS = 'RECEIVE_POSTS'

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

function receivePosts(posts) {
  return {
    type: RECEIVE_POSTS,
    posts
  }
}