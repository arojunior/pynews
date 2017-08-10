import axios from 'axios'
import {createAction} from 'redux-actions'
import {isEmpty} from 'ramda'

export const NEWS_FETCHING = 'modules/News/FETCHING'
export const NEWS_SUCCESS = 'modules/News/SUCCESS'
export const NEWS_ERROR = 'modules/News/ERROR'

const newsFetching = createAction(NEWS_FETCHING)
const newsSuccess = createAction(NEWS_SUCCESS)
const newsError = createAction(NEWS_ERROR)

export const getNews = (params = null) => {
  const api_url = 'http://localhost:8000/api/v1/articles/'
  const filter = isEmpty(params) ? `` : `?category=${params.category}`

  return {
    type: [newsFetching, newsSuccess, newsError],
    payload: {
      data: () => axios.get(api_url + filter)
    }
  }
}
