import React, { Component } from 'react'
import './App.css'
import { fetchCategories } from '../actions/categoryActions'
import { connect } from 'react-redux'

class App extends Component {
  componentWillMount() {
    this.props.fetchCategories()
  }

  render() {
    const { categories } = this.props

    return (
      <div className="App">
        <ul>
          {categories.map(category => (
            <li key={category}>
              {category}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

function mapStateToProps ({ categories }) {
  return {
    categories: categories.map(category => category.name)
  }
}

function mapDispatchToProps (dispatch) {
  return {
    fetchCategories: () => dispatch(fetchCategories())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
