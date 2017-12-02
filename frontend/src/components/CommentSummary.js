import React, { Component } from 'react'
import { connect } from 'react-redux'
import { editComment, deleteComment } from '../actions/commentActions'
import { formatTimestamp } from '../util/helpers'

class CommentSummary extends Component {

  constructor(props) {
    super(props)
    this.state = {
      editing: false,
      body: props.comment.body
    }
  }

  componentWillReceiveProps({ comment }) {
    this.setState({
      body: comment.body
    })
  }

  render() {
    const { comment, editComment, deleteComment } = this.props
    const { editing, body } = this.state

    return (
      <div> 
        <div className="comment-author">{comment.author}</div>
        <div className="comment-date">{formatTimestamp(comment.timestamp)}</div>
        { editing ? 
          <div>
            <textarea
              placeholder='Body'
              value={body}
              onChange={event => this.setState({ body: event.target.value })}
            />
            <button
              onClick={() => {
                editComment({ id: comment.id, body })
                this.setState({ editing: false })
              }}
            >Edit</button>
          </div>
          : (
          <div>
            <div className="comment-body">{comment.body}</div>
            <div classname="comment-edit-button">
              <button
                onClick={() => this.setState({ editing: true })}
              >Edit comment</button>
            </div>
          </div>
        )}
        <div className="comment-delete">
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
    editComment: (comment) => dispatch(editComment(comment)),
    deleteComment: (commentId) => dispatch(deleteComment(commentId))
  }
}

export default connect(
  null,
  mapDispatchToProps
)(CommentSummary)