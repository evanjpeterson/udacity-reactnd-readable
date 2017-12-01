import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { MAX_CATEGORIES_SHOWN } from '../util/constants'

class CategoryNav extends Component {

  render() {
    const { categories } = this.props

    return (
      <div className="category-nav">
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

export default CategoryNav