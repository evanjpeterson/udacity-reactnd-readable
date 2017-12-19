import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { MAX_CATEGORIES_SHOWN } from '../util/constants'

class CategoryNav extends Component {

  render() {
    const { categories } = this.props

    return (
      <div className="category-nav">
        {categories.slice(0, MAX_CATEGORIES_SHOWN)
          .map(category => (
            <div className="category-nav-item" key={category}>
              <Link className="category-nav-link" to={`/${category}`}>{category}</Link>
            </div>
          ))}
        {/* As a follow-up feature, make a way to view *all* categories in a sane fashion */}
        {categories.length > MAX_CATEGORIES_SHOWN &&
          <div>...</div>
        }
      </div>
    )
  }
}

export default CategoryNav