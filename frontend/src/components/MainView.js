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
    const { categories } = this.props

    return (
      <div className="mainView">
        <ul>
          {categories.map(category => (
            <li key={category}>
              {category}
            </li>
          ))}
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