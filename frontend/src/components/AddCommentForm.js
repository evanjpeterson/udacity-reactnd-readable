import React, { Component } from 'react'
import { connect } from 'react-redux'
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
      <div>
        <div>Add Comment</div>
        <textarea
          placeholder='Body'
          value={this.state.body}
          onChange={event => this.setState({ body: event.target.value })}
        />
        <input
          type='text'
          placeholder='Author'
          value={this.state.author}
          onChange={event => this.setState({ author: event.target.value })}
        />
        <button
          onClick={() => {
            addComment({
              ...this.state,
              parentId
            })
            // Clear fields after submit
            this.setState({body: '', author: ''})
          }}
        >Submit</button>
    </div>

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