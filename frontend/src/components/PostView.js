import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as moment from 'moment'
import { fetchPost } from '../actions/postActions'
import { fetchComments } from '../actions/commentActions'
import PostUpdooter from './PostUpdooter'

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
      <div className="postView">
          <PostUpdooter postId={post.id}/>
          <div className="postViewTitle">{post.title}</div>
          <div className="postViewAuthor">{post.author}</div>
          <div className="postViewDate">{formatTimestamp(post.timestamp)}</div>
          <div className="postViewBody">{post.body}</div>
          <div className="postViewComments">
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

function formatTimestamp(timestamp) {
    return moment(timestamp).format('MMM Do YYYY, h:mm a')
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