import React, { Component } from 'react'
import { connect } from 'react-redux'
import Input, { InputLabel } from 'material-ui/Input'
import { MenuItem } from 'material-ui/Menu'
import TextField from 'material-ui/TextField'
import { FormControl } from 'material-ui/Form'
import Select from 'material-ui/Select'
import { SORT_OPTIONS } from '../util/constants'
import { updatePostSortMode } from '../actions/sortActions'

class SortBy extends Component {

  render() {
    const { sortMode, updatePostSortMode } = this.props

    return (
      <FormControl>
        <div>
          <InputLabel htmlFor="sort-by-field">Sort by</InputLabel>
          <Select
            value={sortMode}
            onChange={(event) => updatePostSortMode(event.target.value)}
            input={<Input name="sort-by-field" />}
          >
            {SORT_OPTIONS.map(([sortMode, name]) =>
              <MenuItem
                value={sortMode}
                key={sortMode}
              >{name}</MenuItem>
            )}
          </Select>
        </div>
      </FormControl>
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