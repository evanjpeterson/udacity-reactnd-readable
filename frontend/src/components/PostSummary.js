import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { formatTimestamp } from '../util/helpers'
import PostUpdooter from './PostUpdooter'

class PostSummary extends Component {

  render() {
    const { post, shouldLink } = this.props

    return (
      <div className="post-summary" key={post.id}>
        <PostUpdooter post={post}/>
        { shouldLink ?
          <div className="post-title-link">
            <Link to={`/${post.category}/${post.id}`}>{post.title}</Link>
          </div>
          :
          <div className="post-title">
            {post.title}
          </div>
        }
        <div className="post-author">{post.author}</div>
        <div className="post-date">{formatTimestamp(post.timestamp)}</div>
        <div className="post-comment-count">{post.commentCount} comments</div>
      </div>
    )
  }

}

export default PostSummary