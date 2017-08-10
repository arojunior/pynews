import React from 'react'

const CategoryTitle = category => {
  switch (category) {
    case 'technology':
      return 'TECH'
    case 'science-and-nature':
      return 'SCIENCE'
    case 'politics':
      return 'POLITICS'
    case 'sport':
      return 'SPORTS'
    case 'business':
      return 'BUSINESS'
    default:
      return category
  }
}

const CardCategory = category =>
  <span className={`card-category--${category}`}>
    {CategoryTitle(category)}
  </span>

export default CardCategory
