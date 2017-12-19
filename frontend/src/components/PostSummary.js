import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Paper from 'material-ui/Paper'
import Button from 'material-ui/Button'
import { formatTimestamp } from '../util/helpers'
import VoteControl from './VoteControl'
import { deletePost } from '../actions/postActions'

class PostSummary extends Component {

  render() {
    const { post, shouldLink, deletePost, hideCommentCount } = this.props

    return (
      <Paper>
        <div className="post-summary">
          <VoteControl votable={post} forPost={true}/>
          <div className="post-summary-details">
            { shouldLink ?
              <div className="post-summary-details-title-link">
                <Link to={`/${post.category}/${post.id}`}>{post.title}</Link>
              </div>
              :
              <div className="post-summary-details-title">
                {post.title}
              </div>
            }
            <div className="post-summary-details-line1">
              <div className="post-summary-details-author">by {post.author}</div>
              <div className="post-summary-details-date">{formatTimestamp(post.timestamp)}</div>
              {!hideCommentCount &&
                <div className="post-summary-details-comment-count">{post.commentCount} comments</div>
              }
            </div>
            <div className="post-summary-details-line2">
              <div className="post-summary-details-edit">
                <Button 
                  component={Link} to={`/editpost/${post.id}`}
                  color="primary"
                >Edit post</Button>
              </div>
              <div className="post-summary-details-delete">
                <Button
                  onClick={() => deletePost(post.id)}
                  color="accent"
                >Delete post</Button>
              </div>
            </div>
          </div>
        </div>
      </Paper>
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