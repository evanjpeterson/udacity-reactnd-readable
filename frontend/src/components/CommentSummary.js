import React, { Component } from 'react'
import { connect } from 'react-redux'
import Paper from 'material-ui/Paper'
import Button from 'material-ui/Button'
import TextField from 'material-ui/TextField'
import { editComment, deleteComment } from '../actions/commentActions'
import { formatTimestamp } from '../util/helpers'
import VoteControl from './VoteControl'

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

  getDeleteButton({ comment, deleteComment }) {
    return (
      <div className="comment-summary-details-delete">
        <Button
          color="accent"
          onClick={() => deleteComment(comment.id)}>
          Delete comment
        </Button>
      </div>
    )
  }

  render() {
    const { comment, editComment } = this.props
    const { editing, body } = this.state

    return (
      <Paper>
        <div className="comment-summary"> 
          <VoteControl votable={comment} forComment={true}/>
          <div className="comment-summary-details">
            <div className="comment-summary-details-line1">
              <div className="comment-summary-details-author">by {comment.author}</div>
              <div className="comment-summary-details-date">{formatTimestamp(comment.timestamp)}</div>
            </div>
            { editing ? 
              <div className="comment-summary-edit-form">
                <TextField
                  label="Body"
                  multiline
                  fullWidth
                  rows="3"
                  margin="normal"
                  value={body}
                  onChange={event => this.setState({ body: event.target.value })}
                />
                <Button
                  color="primary"
                  raised
                  onClick={() => {
                    editComment({ id: comment.id, body })
                    this.setState({ editing: false })
                  }}
                >Update</Button>
              </div>
              : (
              <div>
                <div className="comment-summary-details-body">{comment.body}</div>
                <div className="comment-summary-details-line2">
                  <div classname="comment-summary-details-edit">
                    <Button
                      color="primary"
                      onClick={() => this.setState({ editing: true })}
                    >Edit comment</Button>
                  </div>
                  { this.getDeleteButton(this.props) }
                </div>
              </div>
            )}
          </div>
        </div>
      </Paper>
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