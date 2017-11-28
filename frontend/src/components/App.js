import React, { Component } from 'react'
import './App.css'
import { fetchCategories } from '../actions/categoryActions'
import { connect } from 'react-redux'
import { Route } from 'react-router-dom'
import MainView from './MainView'

class App extends Component {
  componentDidMount() {
    const { fetchCategories } = this.props 

    // Fetch categories at the top level because they can't be changed (by the client)
    // and therefore shouldn't need to be refetched.
    fetchCategories()
  }

  render() {
    return (
      <div className="app">
        <div className="app-header">
          <p>Readable.</p>
        </div>
        <Route exact path="/" render={() =>
          <MainView />
        }/>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchCategories: () => dispatch(fetchCategories())
  }
}

export default connect(
  null,
  mapDispatchToProps
)(App)
