import React from 'react'
import {Image} from 'react-bootstrap'
import CardCategory from './card-category'

const NewsCard = news => {
  const featured = news.slice(0, 1)[0]
  return (
    <div className="card-featured">
      {CardCategory(featured.category)}
      <div className="card-image-container">
        <Image
          responsive
          src={featured.image_url}
          alt={featured.title}
          className="card-image"
        />
        <div className="card-middle">
          <a href={featured.url} target="_blank">
            <div className="card-button">Read More</div>
          </a>
        </div>
      </div>
      <div className="card-title--featured">
        {featured.title}
      </div>
      <div className="card-author">
        by {featured.author}
      </div>
    </div>
  )
}

export default NewsCard
