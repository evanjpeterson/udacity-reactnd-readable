import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { formatTimestamp } from '../util/helpers'
import PostUpdooter from './PostUpdooter'
import { deletePost } from '../actions/postActions'

class PostSummary extends Component {

  render() {
    const { post, shouldLink, deletePost } = this.props

    return (
      <div className="post-summary" key={post.id}>
        <PostUpdooter post={post}/>
        { shouldLink ?
          <div className="post-title-link">
            <Link to={`/${post.category}/${post.id}`}>{post.title}</Link>
          </div>
          :
          <div className="post-title">
            {post.title}
          </div>
        }
        <div className="post-author">{post.author}</div>
        <div className="post-date">{formatTimestamp(post.timestamp)}</div>
        <div className="post-comment-count">{post.commentCount} comments</div>
        <div className="post-edit-link">
          <Link to={`/editpost/${post.id}`}>Edit post</Link>
        </div>
        <div className="post-delete-link">
          <button
            onClick={() => deletePost(post.id)}>
            Delete post
          </button>
        </div>
      </div>
    )
  }
}

function mapDispatchToState(dispatch) {
  return {
    deletePost: (postId) => dispatch(deletePost(postId))
  }
}

export default connect(
  null,
  mapDispatchToState
)(PostSummary)