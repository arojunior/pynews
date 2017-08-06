import axios from 'axios'
import {createAction} from 'redux-actions'

export const NEWS_FETCHING = 'modules/News/FETCHING'
export const NEWS_SUCCESS = 'modules/News/SUCCESS'
export const NEWS_ERROR = 'modules/News/ERROR'

const newsFetching = createAction(NEWS_FETCHING)
const newsError = createAction(NEWS_ERROR)
const newsSuccess = createAction(NEWS_SUCCESS)

export const getNews = () => ({
  type: [newsFetching, newsSuccess, newsError],
  payload: {
    data: () => axios.get('http://localhost:8000/api/v1/articles/')
  }
})
