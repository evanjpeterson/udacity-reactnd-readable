import React, { Component } from 'react'
import { connect } from 'react-redux'
import IconButton from 'material-ui/IconButton'
import UpArrow from 'material-ui-icons/ArrowDropUp'
import DownArrow from 'material-ui-icons/ArrowDropDown'
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
          <IconButton className="vote-control-button"
            onClick={() => voteAction(votable.id, UPVOTE)}
          >
            <UpArrow size={40}/>
          </IconButton>
          <div className="vote-score">{votable.voteScore}</div>
          <IconButton className="vote-control-button"
            onClick={() => voteAction(votable.id, DOWNVOTE)}>
              <DownArrow size={40}/>
          </IconButton>
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