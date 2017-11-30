import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchAllPosts } from '../actions/postActions'
import PostList from './PostList'

class MainView extends Component {

  componentDidMount() {
    const { fetchAllPosts } = this.props

    // Grab *all* posts, not limited by category
    fetchAllPosts()
  }

  render() {
    return (
      <div className="main-view">
        <PostList />
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchAllPosts: () => dispatch(fetchAllPosts())
  }
}

export default connect(
  null,
  mapDispatchToProps
)(MainView)