import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { formatTimestamp } from '../util/helpers'
import VoteControl from './VoteControl'
import { deletePost } from '../actions/postActions'

class PostSummary extends Component {

  render() {
    const { post, shouldLink, deletePost, hideCommentCount } = this.props

    return (
      <div className="post-summary">
        <VoteControl votable={post} forPost={true}/>
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
        {!hideCommentCount &&
          <div className="post-comment-count">{post.commentCount} comments</div>
        }
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