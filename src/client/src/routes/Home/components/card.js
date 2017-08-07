import React from 'react'
import {Col} from 'react-bootstrap'
import CardCategory from './card-category'

const NewsCard = news_list =>
  news_list.map(news =>
    <Col md={4} key={news.id}>
      {CardCategory(news.category)}
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
