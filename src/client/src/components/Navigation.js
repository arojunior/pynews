import {compose, withProps} from 'recompose'
import withSizes from 'react-sizes'

import '../assets/css/navigation.css'

import NavItems from './Nav/Items'
import NavDesktop from './Nav/Desktop'
import NavMobile from './Nav/Mobile'

const Navigation = ({NavItems, isMobile}) =>
  isMobile ? NavMobile(NavItems) : NavDesktop(NavItems)

export default compose(
  withProps({
    NavItems
  }),
  withSizes(({width}) => ({isMobile: width < 1024}))
)(Navigation)
