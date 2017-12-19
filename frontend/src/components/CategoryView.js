import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchPosts } from '../actions/postActions'
import PostList from './PostList'

class CategoryView extends Component {

  componentDidMount() {
    const { fetchPosts, category } = this.props

    // Grab posts for the current category
    fetchPosts(category)
  }

  componentWillReceiveProps(nextProps) {
    const { fetchPosts } = this.props

    if (nextProps.category !== this.props.category) {
      // Grab posts for the current category (again)
      // This is because the component doesn't actually get remounted by react-router if
      // the route match remains the same but the key differs,
      //    e.g. /category1 -> /category2 (both match '/:category' route),
      // so componentDidMount() does not get re-run.
      fetchPosts(nextProps.category)
    }
  }

  render() {
    const { category } = this.props

    return (
      <div className="category-view">
        <div class="category-view-header">{category}</div>
        <PostList />
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchPosts: (category) => dispatch(fetchPosts(category))
  }
}

export default connect(
  null,
  mapDispatchToProps
)(CategoryView)