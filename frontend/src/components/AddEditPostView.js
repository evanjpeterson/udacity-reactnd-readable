import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  addPost,
  editPost,
  fetchPost
} from '../actions/postActions'

class AddEditPostView extends Component {
  // TODO Use local state for this one.

  // Add and Edit
  // Title, Body

  // Add only
  // Author
  // Category dropdown
 
  constructor(props) {
    super(props)
    const { postId } = this.props
    this.state = {
      editing: postId != null,
      adding: postId == null
    }
  }

  componentDidMount() {
    // Load a post's details only if in an edit workflow
    if (this.state.editing) {
      const { postId, fetchPost } = this.props
      fetchPost(postId)
    }
  }


  render() {
    const { adding } = this.state

    return (
      <div>
        <div>Add/Edit</div>
        <div>
          <input
            type='text'
            placeholder='Title'
            value={this.state.title}
            onChange={event => this.setState({ title: event.target.value })}
          />
          <input
            type='textarea'
            placeholder='Body'
            value={this.state.body}
            onChange={event => this.setState({ body: event.target.value })}
          />
          {adding &&
            <input
              type='text'
              placeholder='Author'
              value={this.state.author}
              onChange={event => this.setState({ author: event.target.value })}
            />
          }
          {adding &&
            <select
              value={this.state.category}
              onChange={event => this.setState({ author: event.target.value })}
            >
              <option>Default</option>
            </select>
          }
        </div>
      </div>
    )
  }
}

function mapStateToProps({ posts }, { postId }) {
  return {
    // Leave post empty if no postId is defined.
    post: postId != null && posts.find(post => post.id === postId),
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addPost: (post) => dispatch(addPost(post)),
    editPost: (post) => dispatch(editPost(post)),
    fetchPost: (postId => dispatch(fetchPost(postId)))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddEditPostView)