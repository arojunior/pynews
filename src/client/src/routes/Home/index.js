import React from 'react'
import {Row, Col} from 'react-bootstrap'
import {compose, lifecycle, branch, renderNothing} from 'recompose'
import {connect} from 'react-redux'
import {equals} from 'ramda'

import {getNews} from '../../modules/News/actions'
import CardFeatured from './components/card-featured'
import CardImage from './components/card-image'
import CardNoImage from './components/card-no-image'

import '../../assets/css/newscard.css'

const HomeComponent = ({news}) => {
  if (news < 6) {
    return <div>No news for this category</div>
  }
  return (
    <Row>
      <Row>
        <Col md={6} sm={12} xs={12}>
          {CardFeatured(news)}
        </Col>
        {CardImage(news)}
      </Row>
      <Row className="news-no-image">
        {CardNoImage(news)}
      </Row>
    </Row>
  )
}

const Home = compose(
  connect(state => ({
    news: state.News.data
  })),
  lifecycle({
    componentDidMount() {
      this.props.dispatch(getNews(this.props.params))
    },
    componentDidUpdate(prevProps) {
      if (!equals(prevProps.params, this.props.params)) {
        this.props.dispatch(getNews(this.props.params))
      }
    }
  }),
  branch(props => !props.news, renderNothing)
)(HomeComponent)

export default {
  component: Home
}
