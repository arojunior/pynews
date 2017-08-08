import React from 'react'
import {Row, Col} from 'react-bootstrap'
import {compose, lifecycle, branch, renderNothing} from 'recompose'
import {connect} from 'react-redux'

import '../../assets/css/newscard.css'

import {getNews} from '../../modules/News/actions'
import Card from './components/card'
import CardFeatured from './components/card-featured'
import CardImage from './components/card-image'

const Home = ({news}) => {
  const featured = news.slice(0, 1)[0]
  const withImage = news.slice(1, 3)
  const noImage = news.slice(3, 6)

  return (
    <Row>
      <Row>
        <Col md={6} sm={12} xs={12}>
          {CardFeatured(featured)}
        </Col>
        {CardImage(withImage)}
      </Row>
      <Row className="news-no-image">
        {Card(noImage)}
      </Row>
    </Row>
  )
}

const HomeComponent = compose(
  connect(state => ({
    news: state.News.data
  })),
  lifecycle({
    componentDidMount() {
      this.props.dispatch(getNews(this.props.params))
    },
    componentWillReceiveProps(props) {
      this.props.dispatch(getNews(props.params))
    }
  }),
  branch(props => !props.news, renderNothing)
)(Home)

export default {
  component: HomeComponent
}
