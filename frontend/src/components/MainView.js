import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchAllPosts } from '../actions/postActions'
import { MAX_CATEGORIES_SHOWN } from '../util/constants'
import PostList from './PostList'

class MainView extends Component {

  componentDidMount() {
    const { fetchAllPosts } = this.props

    // Grab *all* posts, not limited by category
    fetchAllPosts()
  }

  render() {
    const { categories } = this.props

    return (
      <div className="mainView">
        <ul>
          {categories.slice(0, MAX_CATEGORIES_SHOWN)
            .map(category => (
              <li key={category}>
                <Link to={`/${category}`}>{category}</Link>
              </li>
            ))}
            {/* As a follow-up feature, make a way to view *all* categories in a sane fashion */}
            {categories.length > MAX_CATEGORIES_SHOWN &&
              <li>...</li>
            }
        </ul>
        <PostList />
      </div>
    );
  }
}

function mapStateToProps({ categories }) {
  return {
    categories: categories.map(category => category.name),
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchAllPosts: () => dispatch(fetchAllPosts())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainView)