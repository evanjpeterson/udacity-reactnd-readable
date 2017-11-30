import React, { Component } from 'react'
import { connect } from 'react-redux'
import CaretUp from 'react-icons/lib/fa/caret-up'
import CaretDown from 'react-icons/lib/fa/caret-down'
import { voteOnPost } from '../actions/postActions'
import { UPVOTE, DOWNVOTE } from '../util/constants'

class PostUpdooter extends Component {

  render() {
    const { post, voteOnPost } = this.props

    return (
      <div className="post-updooter">
        <button
          className="icon-button"
          onClick={() => voteOnPost(post.id, UPVOTE)}>
            <CaretUp size={30}/>
        </button>
        <div className="post-score">{post.voteScore}</div>
        <button
          className="icon-button"
          onClick={() => voteOnPost(post.id, DOWNVOTE)}>
            <CaretDown size={30}/>
        </button>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    voteOnPost: (id, voteType) => dispatch(voteOnPost(id, voteType))
  }
}

export default connect(
  null,
  mapDispatchToProps
)(PostUpdooter)