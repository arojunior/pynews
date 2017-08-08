import React from 'react'
import {Col, Image} from 'react-bootstrap'
import CardCategory from './card-category'

const NewsCard = news_list =>
  news_list.map(news =>
    <Col md={3} sm={6} key={news.id}>
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
      <div className="card-title">
        {news.title}
      </div>
      <div className="card-author">
        by {news.author}
      </div>
      <div className="card-content">
        {news.content}
      </div>
    </Col>
  )

export default NewsCard
