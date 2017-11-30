import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { MAX_CATEGORIES_SHOWN } from '../util/constants'

class CategoryNav extends Component {

  render() {
    const { categories } = this.props

    return (
      <div className="categoryNav">
        <ul>
          {categories.slice(0, MAX_CATEGORIES_SHOWN)
            .map(category => (
              <li key={category}>
                <Link to={`/${category}`}>{category}</Link>
              </li>
            ))}
          {/* As a follow-up feature, make a way to view *all* categories in a sane fashion */}
          {categories.length > MAX_CATEGORIES_SHOWN &&
            <li>...</li>
          }
        </ul>
      </div>
    )
  }

}

function mapStateToProps({ categories }) {
  return {
    categories: categories.map(category => category.name)
  }
}

export default connect(mapStateToProps)(CategoryNav)