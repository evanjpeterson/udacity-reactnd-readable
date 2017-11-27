import { RECEIVE_CATEGORIES } from '../actions/categoryActions'

const initialCategoryState = []

function reducer (state = initialCategoryState, action) {
  switch (action.type) {
    case RECEIVE_CATEGORIES:
      const { categories } = action
      return categories
    default:
      return state
  }
}

export default reducer