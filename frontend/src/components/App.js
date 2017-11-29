import React, { Component } from 'react'
import './App.css'
import { fetchCategories } from '../actions/categoryActions'
import { connect } from 'react-redux'
import { withRouter, Route, Link } from 'react-router-dom'
import MainView from './MainView'
import CategoryView from './CategoryView'
import PostView from './PostView'

class App extends Component {
  componentDidMount() {
    const { fetchCategories } = this.props 

    // Fetch categories once at the top level because they can't be changed (by the client)
    // and therefore shouldn't need to be refetched.
    fetchCategories()
  }

  render() {
    return (
      <div className="app">
        <div className="app-header">
          <Link to="/">Readable.</Link>
        </div>

        <Route exact path="/" component={MainView}/>
        <Route exact path="/:category" render={({ match }) => 
          <CategoryView category={match.params.category}/>
        }/>
        <Route exact path="/:category/:postId" render={({ match }) =>
          <PostView postId={match.params.postId}/>
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

export default withRouter(connect(
  null,
  mapDispatchToProps
)(App))
