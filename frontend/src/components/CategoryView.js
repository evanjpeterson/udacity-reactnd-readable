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

  render() {
    const { category } = this.props

    return (
      <div className="categoryView">
        <div>{category}</div>
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