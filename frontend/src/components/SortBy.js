import React, { Component } from 'react'
import { connect } from 'react-redux'
import { SORT_OPTIONS } from '../util/constants'
import { updatePostSortMode } from '../actions/sortActions'

class SortBy extends Component {

  render() {
    const { sortMode, updatePostSortMode } = this.props

    return (
      <div className="sortBy">
        <span>Sort by </span>
        <select
          value={sortMode}
          onChange={(event) => updatePostSortMode(event.target.value)}
        >
          {SORT_OPTIONS.map(([sortMode, name]) =>
            <option
              value={sortMode}
              key={sortMode}
            >{name}</option>
          )}
        </select>
      </div>
    )
  }
}

function mapStateToProps({ sort }) {
  return {
    sortMode: sort.postSortMode
  }
}

function mapDispatchToProps(dispatch) {
  return {
    updatePostSortMode: (sortMode) => dispatch(updatePostSortMode(sortMode))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SortBy)