import React from 'react'
import {Row, Col, Image} from 'react-bootstrap'

import '../../assets/css/newscard.css'

const Home = () => {
  return (
    <Row>
      <Row>
        <Col md={6}>
          {' '}<span className="card-category--tech">TECH</span>
          <Image
            responsive
            src="https://cdn0.tnwcdn.com/wp-content/blogs.dir/1/files/2017/08/3_l.jpg"
            alt="Avatar"
            className="card-image"
          />
          <div className="card-title--featured">
            Interview with Moti Cohen, founder and CEO of Apester
          </div>
          <div className="card-author">by Teste da silva</div>
        </Col>
        <Col md={3}>
          {' '}<span className="card-category--tech">TECH</span>
          <div className="card-image-container">
            <Image
              responsive
              src="https://cdn0.tnwcdn.com/wp-content/blogs.dir/1/files/2017/08/3_l.jpg"
              alt="Avatar"
            />
            <div className="card-middle">
              <a href="#">
                <div className="card-button">Read More</div>
              </a>
            </div>
          </div>
          <div className="card-title">
            Interview with Moti Cohen, founder and CEO of Apester
          </div>
          <div className="card-author">by Teste da silva</div>
          <div className="card-content">
            We’ve seen a lot of changes over the past few years when it comes to
            the appearance and distribution of online content. Publishers
            wanting to create emotional and authentic content
          </div>
        </Col>
        <Col md={3}>
          {' '}<span className="card-category--tech">TECH</span>
          <Image
            responsive
            src="https://cdn0.tnwcdn.com/wp-content/blogs.dir/1/files/2017/08/3_l.jpg"
            alt="Avatar"
          />
          <div className="card-title">
            Interview with Moti Cohen, founder and CEO of Apester
          </div>
          <div className="card-author">by Teste da silva</div>
          <div className="card-content">
            We’ve seen a lot of changes over the past few years when it comes to
            the appearance and distribution of online content. Publishers
            wanting to create emotional and authentic content
          </div>
        </Col>
      </Row>
      <br />
      <br />
      <Row>
        <Col md={4}>
          <span className="card-category--tech">TECH</span>

          <div className="card-title">
            Interview with Moti Cohen, founder and CEO of Apester
          </div>
          <div className="card-author">by Teste da silva</div>
          <div className="card-content">
            We’ve seen a lot of changes over the past few years when it comes to
            the appearance and distribution of online content. Publishers
            wanting to create emotional and authentic content
          </div>
        </Col>
        <Col md={4}>
          {' '}<span className="card-category--tech">TECH</span>
          <div className="card-title">
            Interview with Moti Cohen, founder and CEO of Apester
          </div>
          <div className="card-author">by Teste da silva</div>
          <div className="card-content">
            We’ve seen a lot of changes over the past few years when it comes to
            the appearance and distribution of online content. Publishers
            wanting to create emotional and authentic content
          </div>
        </Col>
        <Col md={4}>
          {' '}<span className="card-category--tech">TECH</span>
          <div className="card-title">
            Interview with Moti Cohen, founder and CEO of Apester
          </div>
          <div className="card-author">by Teste da silva</div>
          <div className="card-content">
            We’ve seen a lot of changes over the past few years when it comes to
            the appearance and distribution of online content. Publishers
            wanting to create emotional and authentic content
          </div>
        </Col>
      </Row>
    </Row>
  )
}

export default {
  component: Home
}
