import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import {
  addPost,
  editPost,
  fetchPost
} from '../actions/postActions'

class AddEditPostView extends Component {
 
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      body: '',
      author: '',
      category: ''
    }
  }

  componentDidMount() {
    // Load a post's details only if in an edit workflow
    if (this.props.editing) {
      const { postId, fetchPost } = this.props
      fetchPost(postId)
    }
  }

  componentWillReceiveProps({ post, editing }) {
    // If editing and props are received where post is not null,
    // then the fetchPost() async call has finished. Can now set initial form state.
    if (editing && post != null) {
      this.setState({
        title: post.title,
        body: post.body,
        category: post.category
      })
    }
  }

  addPostAndRedirect = () => {
    const { addPost, history } = this.props

    addPost(this.state)
    // Redirect to the category where the new post was just added
    history.push(`/${this.state.category}`)
  }

  editPostAndRedirect = () => {
    const { postId, editPost, history } = this.props

    editPost({
      id: postId,
      ...this.state
    })
    // Redirect to the post detail page for the post that was just edited
    history.push(`/${this.state.category}/${postId}`)
  }

  render() {
    const { editing, categories } = this.props

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
          <textarea
            placeholder='Body'
            value={this.state.body}
            onChange={event => this.setState({ body: event.target.value })}
          />
          {!editing &&
            <input
              type='text'
              placeholder='Author'
              value={this.state.author}
              onChange={event => this.setState({ author: event.target.value })}
            />
          }
          {!editing &&
            <select
              value={this.state.category}
              onChange={event => this.setState({ category: event.target.value })}
            >
              <option value=''>Select category</option>
              {categories.map(category =>
                <option
                  value={category}
                  key={category}
                >{category}</option>
              )}
            </select>
          }
          <button
            onClick={editing ? this.editPostAndRedirect : this.addPostAndRedirect}
          >Submit</button>
        </div>
      </div>
    )
  }
}

function mapStateToProps({ posts, categories }, { postId }) {
  return {
    // Leave post empty if no postId is defined.
    post: postId && posts.find(post => post.id === postId),
    categories: categories.map(category => category.name)
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
)(withRouter(AddEditPostView))