import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import SortBy from './SortBy'
import { 
  SORT_BY_NEWEST,
  SORT_BY_OLDEST,
  SORT_BY_BEST,
  SORT_BY_WORST
} from '../util/constants'

class PostList extends Component {

  render() {
    const { posts } = this.props

    return (
      <div className="postList">
        <Link to="/addpost">Add post</Link>
        <SortBy />
        {posts.map(post => (
          <div className="postListEntry">
            <span>{post.voteScore}</span>
            <Link to={`/${post.category}/${post.id}`}>{post.title}</Link>
          </div>
        ))}
      </div>
    )
  }
}

function sortPosts(posts, sortBy) {
  // It probably wouldn't hurt to sort the store's posts array in-place,
  // but it doesn't feel right so I'm copying the array before sorting.
  const displayedPosts = posts.slice()

  switch (sortBy) {
    case SORT_BY_NEWEST:
      return displayedPosts.sort((a, b) => b.timestamp - a.timestamp)
    case SORT_BY_OLDEST:
      return displayedPosts.sort((a, b) => a.timestamp - b.timestamp)
    case SORT_BY_BEST:
      return displayedPosts.sort((a, b) => b.voteScore - a.voteScore)
    case SORT_BY_WORST:
      return displayedPosts.sort((a, b) => a.voteScore - b.voteScore)
    default:
      return displayedPosts
  }
}

function mapStateToProps({ posts, sort }) {
  return {
    posts: sortPosts(posts, sort.postSortMode)
  }
}

export default connect(mapStateToProps)(PostList)