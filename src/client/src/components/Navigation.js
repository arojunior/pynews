import React from 'react'
import {Navbar, Nav, NavItem, Col} from 'react-bootstrap'
import {compose, withProps} from 'recompose'
import withSizes from 'react-sizes'
import '../assets/css/navigation.css'

const NavItems = ({pullRight}) =>
  <Nav pullRight={pullRight}>
    <NavItem eventKey={1} href="#">
      POLITICS
    </NavItem>
    <NavItem eventKey={2} href="#">
      BUSINESS
    </NavItem>
    <NavItem eventKey={3} href="#">
      TECH
    </NavItem>
    <NavItem eventKey={4} href="#">
      SCIENCE
    </NavItem>
    <NavItem eventKey={5} href="#">
      SPORTS
    </NavItem>
    <NavItem eventKey={6}>LOGIN</NavItem>
  </Nav>

const NavigationDesktop = NavItems =>
  <Navbar>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="#">Pynews</a>
      </Navbar.Brand>
    </Navbar.Header>
    {NavItems({pullRight: true})}
  </Navbar>

const NavigationMobile = NavItems =>
  <Navbar>
    <Navbar.Toggle />
    <Navbar.Header>
      <Col xs={4} xsOffset={2}>
        <Navbar.Brand>
          <a href="#">Pynews</a>
        </Navbar.Brand>
      </Col>
    </Navbar.Header>
    <Navbar.Collapse>
      {NavItems({pullRight: false})}
    </Navbar.Collapse>
  </Navbar>

const Navigation = ({NavItems, isMobile}) =>
  isMobile ? NavigationMobile(NavItems) : NavigationDesktop(NavItems)

export default compose(
  withProps({
    NavItems
  }),
  withSizes(({width}) => ({isMobile: width < 480}))
)(Navigation)
