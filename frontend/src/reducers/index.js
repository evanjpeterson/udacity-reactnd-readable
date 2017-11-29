import { combineReducers } from 'redux'
import categories from './categoryReducer'
import posts from './postReducer'
import comments from './commentReducer'
import sort from './sortReducer'

export default combineReducers({
  categories,
  posts,
  comments,
  sort
})