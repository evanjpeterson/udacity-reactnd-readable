export const UPDATE_POST_SORT_MODE = 'UPDATE_POST_SORT_MODE'

export function updatePostSortMode(postSortMode) {
  return {
    type: UPDATE_POST_SORT_MODE,
    postSortMode
  }
}