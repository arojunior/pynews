import React from 'react'
import {Col} from 'react-bootstrap'
import CardCategory from './card-category'

const NewsCard = news =>
  news.slice(3, 6).map(post =>
    <Col md={4} sm={6} key={post.id}>
      {CardCategory(post.category)}
      <div className="card-title">
        <a href={post.url} target="_blank">
          {post.title}
        </a>
      </div>
      <div className="card-author">
        by {post.author}
      </div>
      <div className="card-content">
        {post.content}
      </div>
    </Col>
  )

export default NewsCard
