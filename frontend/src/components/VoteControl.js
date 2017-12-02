import React, { Component } from 'react'
import { connect } from 'react-redux'
import CaretUp from 'react-icons/lib/fa/caret-up'
import CaretDown from 'react-icons/lib/fa/caret-down'
import { voteOnPost } from '../actions/postActions'
import { voteOnComment } from '../actions/commentActions'
import { UPVOTE, DOWNVOTE } from '../util/constants'

class VoteControl extends Component {

  render() {
    const { 
      votable,
      voteOnPost,
      voteOnComment,
      forPost,
      forComment
    } = this.props

    const voteAction = forPost ? voteOnPost 
      : forComment ? voteOnComment
      : () => {}

    return (
      <div className="vote-control">
        <button
          className="icon-button"
          onClick={() => voteAction(votable.id, UPVOTE)}>
            <CaretUp size={10}/>
        </button>
        <div className="vote-score">{votable.voteScore}</div>
        <button
          className="icon-button"
          onClick={() => voteAction(votable.id, DOWNVOTE)}>
            <CaretDown size={10}/>
        </button>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    voteOnPost: (id, voteType) => dispatch(voteOnPost(id, voteType)),
    voteOnComment: (id, voteType) => dispatch(voteOnComment(id, voteType))
  }
}

export default connect(
  null,
  mapDispatchToProps
)(VoteControl)