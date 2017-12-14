import React, { Component } from 'react'
import { connect } from 'react-redux'
import Paper from 'material-ui/Paper'
import TextField from 'material-ui/TextField'
import Button from 'material-ui/Button'
import { addComment } from '../actions/commentActions'

class AddCommentForm extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      body: '',
      author: ''
    }
  }

  render() {
    const { parentId, addComment } = this.props

    return (
      <Paper>
        <div className="add-comment-form">
          <div className="add-comment-form-title">
            Add Comment
          </div>
          <TextField
            label="Author"
            value={this.state.author}
            onChange={event => this.setState({ author: event.target.value })}
          />
          <TextField
            label="Post Body"
            multiline
            fullWidth
            rows="3"
            margin="normal"
            value={this.state.body}
            onChange={event => this.setState({ body: event.target.value })}
          />
          <Button
            raised
            color="primary"
            onClick={() => {
              addComment({
                ...this.state,
                parentId
              })
              // Clear fields after submit
              this.setState({body: '', author: ''})
            }}
          >Add</Button>
        </div>
      </Paper>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addComment: (comment) => dispatch(addComment(comment))
  }
}

export default connect(
  null,
  mapDispatchToProps
)(AddCommentForm)