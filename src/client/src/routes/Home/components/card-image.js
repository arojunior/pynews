import React from 'react'
import {Col, Image} from 'react-bootstrap'
import CardCategory from './card-category'

const NewsCard = news =>
  news.slice(1, 3).map(post =>
    <Col md={3} sm={6} key={post.id}>
      {CardCategory(post.category)}
      <div className="card-image-container">
        <Image
          responsive
          src={post.image_url}
          alt={post.title}
          className="card-image"
        />
        <div className="card-middle">
          <a href={post.url} target="_blank">
            <div className="card-button">Read More</div>
          </a>
        </div>
      </div>
      <div className="card-title">
        {post.title}
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
