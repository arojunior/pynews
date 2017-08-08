import React from 'react'
import {Image} from 'react-bootstrap'
import CardCategory from './card-category'

const NewsCard = news =>
  <div className="card-featured">
    {CardCategory(news.category)}
    <div className="card-image-container">
      <Image
        responsive
        src={news.image_url}
        alt={news.title}
        className="card-image"
      />
      <div className="card-middle">
        <a href={news.url} target="_blank">
          <div className="card-button">Read More</div>
        </a>
      </div>
    </div>
    <div className="card-title--featured">
      {news.title}
    </div>
    <div className="card-author">
      by {news.author}
    </div>
  </div>

export default NewsCard
