import {handleActions} from 'redux-actions'

import {NEWS_FETCHING, NEWS_SUCCESS, NEWS_ERROR} from './actions'

const initialState = {
  fetching: false,
  data: null
}

const reducer = handleActions(
  {
    [NEWS_FETCHING]: (state, action) => ({
      ...state,
      fetching: true
    }),

    [NEWS_SUCCESS]: (state, action) => ({
      ...state,
      fetching: false,
      data: action.payload.data
    }),

    [NEWS_ERROR]: (state, action) => ({
      ...state,
      fetching: false
    })
  },
  initialState
)

export default reducer
