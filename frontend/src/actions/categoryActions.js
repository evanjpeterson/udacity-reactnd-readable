import * as api from '../util/api'

export const RECEIVE_CATEGORIES = 'RECEIVE_CATEGORIES'

export function fetchCategories () {
  return dispatch => {
    return api.getCategories()
      .then(categories => dispatch(receiveCategories(categories)))
  }
}

function receiveCategories (categories) {
  return {
    type: RECEIVE_CATEGORIES,
    categories
  }
}