import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { fetchPost } from '../actions/postActions'
import { fetchComments } from '../actions/commentActions'
import PostSummary from './PostSummary'
import CommentSummary from './CommentSummary'
import AddCommentForm from './AddCommentForm'

class PostView extends Component {

  componentDidMount() {
    const { postId, fetchPost, fetchComments } = this.props

    // Load this post's details
    fetchPost(postId)
    fetchComments(postId)
  }

  componentWillReceiveProps({ post: newPost }) {
    const { post: currentPost, history } = this.props
    if (currentPost != null && newPost == null) {
      // The post got deleted while the user was on the PostView page.
      // Kick back to the home page.
      history.push('/')
    }
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
          <PostSummary post={post} shouldLink={false} hideCommentCount={true}/>
          <div className="post-view-body">{post.body}</div>
          <div className="post-view-comments">
            <div className="post-view-comment-count">{comments.length} comments</div>
            {comments.map(comment => 
              <CommentSummary key={comment.id} comment={comment} />
            )}
            <AddCommentForm parentId={post.id}/>
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
)(withRouter(PostView))