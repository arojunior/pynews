import Layout from '../layouts'
import Home from './Home'

const HomeRoute = {
  component: Layout,
  indexRoute: Home
}

export default [
  {
    ...HomeRoute,
    path: '/'
  },
  {
    ...HomeRoute,
    path: '/:category'
  }
]
