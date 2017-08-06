import React from 'react'
import {Col} from 'react-bootstrap'

const NewsCard = news_list =>
  news_list.map(news =>
    <Col md={4} key={news.id}>
      <span className={`card-category--${news.category}`}>
        {news.category}
      </span>
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
