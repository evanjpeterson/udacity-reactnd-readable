import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import Paper from 'material-ui/Paper'
import Input, { InputLabel } from 'material-ui/Input'
import { MenuItem } from 'material-ui/Menu'
import TextField from 'material-ui/TextField'
import { FormControl } from 'material-ui/Form'
import Button from 'material-ui/Button'
import Select from 'material-ui/Select'
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
      <Paper>
        <div className="add-post-form">
          <div className="add-post-form-title">{editing ? 'Edit Post' : 'Add Post'}</div>
          <TextField
            label="Title"
            value={this.state.title}
            onChange={event => this.setState({ title: event.target.value })}
          />
          <TextField
            label="Body"
            multiline
            fullWidth
            margin="normal"
            rows="3"
            value={this.state.body}
            onChange={event => this.setState({ body: event.target.value })}
          />
          {!editing &&
            <TextField
              label="Author"
              value={this.state.author}
              onChange={event => this.setState({ author: event.target.value })}
            />
          }
          {!editing &&
            <FormControl
                className="add-post-category-select"
                margin="normal"
            >
              <InputLabel htmlFor="post-category">Category</InputLabel>
              <Select
                value={this.state.category}
                onChange={event => this.setState({ category: event.target.value })}
                input={<Input name="post-category" id="post-category"/>}
              >
                <MenuItem value="">Select category</MenuItem>
                {categories.map(category =>
                  <MenuItem
                    value={category}
                    key={category}
                  >{category}</MenuItem>
                )}
              </Select>
            </FormControl>
          }
          <Button
            raised
            color="primary"
            onClick={editing ? this.editPostAndRedirect : this.addPostAndRedirect}
            >Submit</Button>
        </div>
      </Paper>
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