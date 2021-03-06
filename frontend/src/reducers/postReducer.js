import { RECEIVE_POSTS, UPDATE_POST, REMOVE_POST } from '../actions/postActions'

const initialState = []

function reducer (state = initialState, action) {
  switch (action.type) {
    case RECEIVE_POSTS:
      const { posts } = action
      return posts 
    case UPDATE_POST:
      const newPost = action.post
      // Replace the matching post with the new post, and retain all other posts.
      // If there's no post to replace, then the new post is simply added.
      return state
        .filter(post => post.id !== newPost.id)
        .concat([newPost])
    case REMOVE_POST:
      return state.filter(post => post.id !== action.postId)
    default:
      return state
  }
}

export default reducer