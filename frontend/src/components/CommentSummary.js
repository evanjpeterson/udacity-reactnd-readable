import React, { Component } from 'react'
import { connect } from 'react-redux'
import { deleteComment } from '../actions/commentActions'
import { formatTimestamp } from '../util/helpers'

class CommentSummary extends Component {

  render() {
    const { comment, deleteComment } = this.props

    return (
      <div> 
        <div className="comment-author">{comment.author}</div>
        <div className="comment-date">{formatTimestamp(comment.timestamp)}</div>
        <div className="comment-body">{comment.body}</div>
        <div classname="comment-delete">
          <button
            onClick={() => deleteComment(comment.id)}>
            Delete comment
          </button>
        </div>
      </div>
    )
  }

}

function mapDispatchToProps(dispatch) {
  return {
    deleteComment: (commentId) => dispatch(deleteComment(commentId))
  }
}

export default connect(
  null,
  mapDispatchToProps
)(CommentSummary)