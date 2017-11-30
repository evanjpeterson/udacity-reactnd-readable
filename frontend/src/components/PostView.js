import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchPost } from '../actions/postActions'
import { fetchComments } from '../actions/commentActions'
import { formatTimestamp } from '../util/helpers'
import PostSummary from './PostSummary'

class PostView extends Component {

  componentDidMount() {
    const { postId, fetchPost, fetchComments } = this.props

    // Load this post's details
    fetchPost(postId)
    fetchComments(postId)
  }

  render() {
    const { post, comments } = this.props

    if (post == null) {
      return (
        <div className="postView">
          <div className="postViewLoading">Loading post...</div>
        </div>
      )
    }

    return (
      <div className="post-view">
          <PostSummary post={post} shouldLink={false}/>
          <div className="post-view-body">{post.body}</div>
          <div className="post-view-comments">
            <ul>
              {comments.map(comment => (
                <div key={comment.id}> 
                  <div className="commentAuthor">{comment.author}</div>
                  <div className="commentDate">{formatTimestamp(post.timestamp)}</div>
                  <div className="commentBody">{comment.body}</div>
                </div>
              ))}
            </ul>
          </div>
      </div>
    )
  }

}

function mapStateToProps({ posts, comments }, { postId }) {
  return {
    post: posts.find(post => post.id === postId),
    comments
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchPost: (postId) => dispatch(fetchPost(postId)),
    fetchComments: (postId) => dispatch(fetchComments(postId))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostView)