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
      editing: postId != null
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
    //const { editing } = this.state
    //const { post } = this.props

    return (
      <div>Add/Edit</div>
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